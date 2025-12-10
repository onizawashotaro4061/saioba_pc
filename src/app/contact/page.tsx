"use client";

import { useState, FormEvent } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const categories = [
    "劇団/メンバーへのご依頼",
    "公演について",
    "ワークショップについて",
    "その他",
  ];

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^\d{10,11}$/;
    return phoneRegex.test(phone);
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "お名前を入力してください";
    }

    if (!formData.email.trim()) {
      newErrors.email = "メールアドレスを入力してください";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "正しいメールアドレスの形式で入力してください";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "お電話番号を入力してください";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "10桁または11桁の半角数字で入力してください（ハイフンなし）";
    }

    if (!formData.category) {
      newErrors.category = "お問い合わせタイトルを選択してください";
    }

    if (!formData.message.trim()) {
      newErrors.message = "お問い合わせ内容を入力してください";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          category: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // エラーをクリア
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const isFormValid = () => {
    return (
      formData.name.trim() &&
      formData.email.trim() &&
      validateEmail(formData.email) &&
      formData.phone.trim() &&
      validatePhone(formData.phone) &&
      formData.category &&
      formData.message.trim()
    );
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 sm:mb-8 text-white font-heading-en">
        CONTACT
      </h1>
      <div className="h-4 sm:h-6"></div>
      <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg max-w-4xl mx-auto shadow-lg">
        <div className="mb-6 sm:mb-8">
          <p className="text-sm sm:text-base md:text-lg mb-4 leading-relaxed text-gray-700 font-body-ja">
            この度は、劇団さいおうば公式サイトへお越しいただき、誠にありがとうございます。
          </p>
          <p className="text-sm sm:text-base md:text-lg mb-4 leading-relaxed text-gray-700 font-body-ja">
            当劇団へのお問い合わせは、こちらのフォームにてお伺いしております。
          </p>
          <div className="bg-orange-50 border-l-4 border-primary p-4 my-4">
            <p className="text-xs sm:text-sm md:text-base mb-2 text-gray-700 font-body-ja">
              ※
              公演の準備期間、公演の前後・最中などでは、ご返信にお時間をいただく場合がございます。
            </p>
            <p className="text-xs sm:text-sm md:text-base text-gray-700 font-body-ja">
              ※
              お寄せいただいた内容は劇団員が確認し、ご入力いただいた個人情報は劇団内で厳重に管理いたします。外部に提供・開示することは一切ございません。
            </p>
          </div>
        </div>

        {submitStatus === "error" && (
          <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded mb-6 font-body-ja">
            送信に失敗しました。しばらく時間をおいて再度お試しください。
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* お名前 */}
          <div>
            <label className="block text-sm sm:text-base font-bold mb-2 text-gray-800 font-subheading-ja">
              お名前 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent font-body-ja"
              placeholder="山田太郎"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1 font-body-ja">{errors.name}</p>
            )}
          </div>

          {/* メールアドレス */}
          <div>
            <label className="block text-sm sm:text-base font-bold mb-2 text-gray-800 font-subheading-ja">
              メールアドレス <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent font-body-en"
              placeholder="example@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1 font-body-ja">{errors.email}</p>
            )}
          </div>

          {/* お電話番号 */}
          <div>
            <label className="block text-sm sm:text-base font-bold mb-2 text-gray-800 font-subheading-ja">
              お電話番号 <span className="text-red-500">*</span>
              <span className="text-xs sm:text-sm font-normal text-gray-600 ml-2">
                （ハイフンなし、10桁または11桁の半角数字）
              </span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent font-body-en"
              placeholder="09012345678"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1 font-body-ja">{errors.phone}</p>
            )}
          </div>

          {/* お問い合わせタイトル */}
          <div>
            <label className="block text-sm sm:text-base font-bold mb-2 text-gray-800 font-subheading-ja">
              お問い合わせタイトル <span className="text-red-500">*</span>
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent font-body-ja"
            >
              <option value="">選択してください</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            {errors.category && (
              <p className="text-red-500 text-sm mt-1 font-body-ja">{errors.category}</p>
            )}
          </div>

          {/* お問い合わせ内容 */}
          <div>
            <label className="block text-sm sm:text-base font-bold mb-2 text-gray-800 font-subheading-ja">
              お問い合わせ内容 <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={8}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent font-body-ja resize-y"
              placeholder="お問い合わせ内容をご記入ください"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1 font-body-ja">{errors.message}</p>
            )}
          </div>

          {/* 送信ボタン */}
          <div className="text-center pt-4">
            <button
              type="submit"
              disabled={!isFormValid() || isSubmitting}
              className={`px-8 py-3 rounded-md text-white font-bold text-base sm:text-lg transition-all font-body-ja ${
                isFormValid() && !isSubmitting
                  ? "bg-primary hover:bg-opacity-90 cursor-pointer"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              {isSubmitting ? "送信中..." : "送信する"}
            </button>
          </div>
        </form>

        {/* 送信成功メッセージ */}
        {submitStatus === "success" && (
          <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded mt-6 font-body-ja text-center">
            お問い合わせを送信しました。ご連絡ありがとうございます。
          </div>
        )}
      </div>
    </div>
  );
}
