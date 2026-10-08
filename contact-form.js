const contactForm = document.querySelector("#contact-form");

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(contactForm);
  const value = (name) => String(data.get(name) || "").trim();
  const subject = `【お問い合わせ】${value("category")}について / ${value("name")}様`;
  const body = [
    "Accent GRAVITY stream ご担当者様",
    "",
    "Webサイトの問い合わせフォームよりご連絡いたします。",
    "",
    `■ お名前\n${value("name")}`,
    `■ 会社名・活動名\n${value("company") || "未入力"}`,
    `■ メールアドレス\n${value("email")}`,
    `■ ご相談内容\n${value("category")}`,
    `■ 希望時期\n${value("schedule") || "未入力"}`,
    `■ ご予算\n${value("budget") || "未入力"}`,
    `■ お問い合わせ内容\n${value("message")}`,
  ].join("\n");

  window.location.href = `mailto:uk2lifestyle@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
