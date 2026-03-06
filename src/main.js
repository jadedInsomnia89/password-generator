import "./style.css";

const characterLimit = 50;
const generatePwdBtn = document.getElementById("generate-pwd-btn");
const pwdResult1 = document.getElementById("pwd-result-1");
const pwdResult2 = document.getElementById("pwd-result-2");

function generatePassword(length = 12, includeSpecial = true) {
  if (length > 50) length = 50;
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const special = "!@#$%^&*()_+-=[]{}|;:,.<>?`~";

  let chars = lowercase + uppercase + numbers;
  if (includeSpecial) chars += special;

  let password = "";
  const randomValues = crypto.getRandomValues(new Uint32Array(length));
  for (let i = 0; i < length; i++) {
    password += chars[randomValues[i] % chars.length];
  }
  return password;
}

function getPasswords() {
  const pwd1 = generatePassword();
  const pwd2 = generatePassword();
  pwdResult1.textContent = pwd1;
  pwdResult2.textContent = pwd2;
}
generatePwdBtn.addEventListener("click", getPasswords);
