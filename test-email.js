// メール送信テストスクリプト
const nodemailer = require("nodemailer");
require("dotenv").config({ path: ".env.local" });

async function testEmail() {
  console.log("=== メール送信テスト開始 ===\n");

  // 環境変数の確認
  console.log("1. 環境変数の確認:");
  console.log("   EMAIL_USER:", process.env.EMAIL_USER);
  console.log("   EMAIL_PASS:", process.env.EMAIL_PASS ? "設定されています（***）" : "未設定");
  console.log();

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error("❌ エラー: 環境変数が設定されていません");
    console.log("   .env.local ファイルを確認してください");
    return;
  }

  try {
    // トランスポーターの作成
    console.log("2. Nodemailerトランスポーターの作成...");
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    console.log("   ✓ トランスポーター作成成功\n");

    // 接続テスト
    console.log("3. Gmail接続テスト...");
    await transporter.verify();
    console.log("   ✓ Gmail接続成功\n");

    // テストメール送信
    console.log("4. テストメール送信...");
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "【テスト】劇団さいおうばWebサイト メール送信テスト",
      text: `
これはメール送信機能のテストメールです。

このメールが届いた場合、メール送信機能は正常に動作しています。

テスト日時: ${new Date().toLocaleString("ja-JP")}

─────────────────────
劇団さいおうば公式サイト
─────────────────────
      `,
    });

    console.log("   ✓ テストメール送信成功");
    console.log("   メッセージID:", info.messageId);
    console.log();
    console.log("=== テスト完了 ===");
    console.log("✓ すべてのテストが成功しました");
    console.log(`✓ ${process.env.EMAIL_USER} のメールボックスを確認してください`);
  } catch (error) {
    console.error("\n❌ エラーが発生しました:");
    console.error("   エラーメッセージ:", error.message);
    console.log();

    // エラーの種類に応じたアドバイス
    if (error.message.includes("Invalid login")) {
      console.log("📝 解決方法:");
      console.log("   1. Gmailアプリパスワードが正しいか確認してください");
      console.log("   2. アプリパスワードを再生成してみてください");
      console.log("      https://myaccount.google.com/apppasswords");
      console.log("   3. .env.local ファイルのEMAIL_PASSを更新してください");
    } else if (error.message.includes("EAUTH")) {
      console.log("📝 解決方法:");
      console.log("   1. Googleアカウントで2段階認証が有効か確認してください");
      console.log("      https://myaccount.google.com/security");
      console.log("   2. アプリパスワードを使用しているか確認してください");
      console.log("      （通常のパスワードでは認証できません）");
    } else if (error.message.includes("Network") || error.message.includes("ETIMEDOUT")) {
      console.log("📝 解決方法:");
      console.log("   1. インターネット接続を確認してください");
      console.log("   2. ファイアウォールやセキュリティソフトを確認してください");
    } else {
      console.log("📝 CONTACT_SETUP.mdのトラブルシューティングセクションを参照してください");
    }
  }
}

testEmail();
