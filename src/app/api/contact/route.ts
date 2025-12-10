import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, category, message } = body;

    // バリデーション
    if (!name || !email || !phone || !category || !message) {
      return NextResponse.json(
        { error: "すべての項目を入力してください" },
        { status: 400 }
      );
    }

    // メールアドレスの形式チェック
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "正しいメールアドレスの形式で入力してください" },
        { status: 400 }
      );
    }

    // 電話番号の形式チェック（ハイフンなし、10桁または11桁）
    const phoneRegex = /^\d{10,11}$/;
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { error: "正しい電話番号の形式で入力してください（10桁または11桁の半角数字、ハイフンなし）" },
        { status: 400 }
      );
    }

    // Nodemailerトランスポーターの設定
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // メール本文の作成
    const emailContent = `
【劇団さいおうば公式サイト お問い合わせ】

お名前: ${name}
メールアドレス: ${email}
電話番号: ${phone}
お問い合わせタイトル: ${category}

お問い合わせ内容:
${message}

────────────────────────
このメールは劇団さいおうば公式サイトのお問い合わせフォームから送信されました。
    `;

    // 劇団へのメール送信
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // gekidansaiouba@gmail.com
      subject: `【お問い合わせ】${category} - ${name}様`,
      text: emailContent,
      replyTo: email, // 返信先を問い合わせ者のメールアドレスに設定
    });

    // 問い合わせ者への自動返信メール
    const autoReplyContent = `
${name} 様

この度は、劇団さいおうば公式サイトよりお問い合わせいただき、誠にありがとうございます。

以下の内容でお問い合わせを受け付けました。

────────────────────────
お名前: ${name}
お問い合わせタイトル: ${category}

お問い合わせ内容:
${message}
────────────────────────

内容を確認の上、担当者より追ってご連絡させていただきます。
※公演の準備期間、公演の前後・最中などでは、ご返信にお時間をいただく場合がございます。

今しばらくお待ちくださいますよう、お願い申し上げます。

────────────────────────
劇団さいおうば
公式サイト: https://saiouba.com
Email: gekidansaiouba@gmail.com
────────────────────────

※このメールは自動送信されています。
※ご返信いただいても対応できかねますので、ご了承ください。
    `;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "【劇団さいおうば】お問い合わせを受け付けました",
      text: autoReplyContent,
    });

    console.log("お問い合わせメール送信完了:", name, email);

    return NextResponse.json(
      { message: "お問い合わせを受け付けました" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "送信に失敗しました。しばらく時間をおいて再度お試しください。" },
      { status: 500 }
    );
  }
}
