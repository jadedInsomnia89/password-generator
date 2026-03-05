import "./style.css";

const characterLimit = 50;
const generatePwdBtn = document.getElementById("generate-pwd-btn");

function generatePassword(length = 12, includeSpecial = true) {
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

generatePassword();
// generatePwdBtn.addEventListener("click", generatePassword);
