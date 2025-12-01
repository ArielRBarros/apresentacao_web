function handleWhatsappLinkClick() {
  const number = "5582982174779";

  const user = document.getElementById("user-input").value.trim();
  const message = document.getElementById("message-input").value.trim();
  const errorEl = document.getElementById("form-error");

  errorEl.textContent = "";

  if (!user) {
    errorEl.textContent = "Por favor, preencha os campos.";
    return;
  }

  const text = `Olá, eu sou o ${user}. ${message || ""}`;
  const encodedText = encodeURIComponent(text);

  const url = `https://api.whatsapp.com/send?phone=${number}&text=${encodedText}`;
  window.open(url, "_blank");
}