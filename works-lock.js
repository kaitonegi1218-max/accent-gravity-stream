const gate = document.querySelector("#access-gate");
const gateForm = document.querySelector("#gate-form");
const gateCode = document.querySelector("#gate-code");
const gateError = document.querySelector("#gate-error");
const worksContent = document.querySelector("#works-content");
const accessKey = "ags_works_access_v1";
const passcodeHash = "ff358ed82bf1468cb4f974474467d0f931c25df7c3e6ede615c67de0b7628470";

const showWorks = () => {
  gate.hidden = true;
  worksContent.hidden = false;
};

const hashText = async (value) => {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
};

if (sessionStorage.getItem(accessKey) === passcodeHash) showWorks();

gateForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  gateError.textContent = "";
  const enteredHash = await hashText(gateCode.value.trim().toUpperCase());

  if (enteredHash === passcodeHash) {
    sessionStorage.setItem(accessKey, passcodeHash);
    showWorks();
    return;
  }

  gateCode.value = "";
  gateCode.focus();
  gateError.textContent = "パスコードが違います。もう一度お試しください。";
});

