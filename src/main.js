import "./style.css";

const minCharacterLimit = 8;
const maxCharacterLimit = 50;
const generatePwdForm = document.getElementById("generate-pwd-form");
const pwdResult1 = document.getElementById("pwd-result-1");
const pwdResult2 = document.getElementById("pwd-result-2");

function generatePassword(length, includeSpecialChars) {
  length =
    length < minCharacterLimit
      ? minCharacterLimit
      : length > maxCharacterLimit
        ? maxCharacterLimit
        : length;
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const specialChars = "!@#$%^&*()_+-=[]{}|;:,.<>?`~";

  let chars = lowercase + uppercase + numbers;
  if (includeSpecialChars) chars += specialChars;

  let password = "";
  const randomValues = crypto.getRandomValues(new Uint32Array(length));
  for (let i = 0; i < length; i++) {
    password += chars[randomValues[i] % chars.length];
  }
  return password;
}

function getPasswords(length = 12, includeSpecialChars) {
  const pwd1 = generatePassword(length, includeSpecialChars);
  const pwd2 = generatePassword(length, includeSpecialChars);
  pwdResult1.textContent = pwd1;
  pwdResult2.textContent = pwd2;
}
generatePwdForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const pwdRequirements = new FormData(generatePwdForm);
  const includeSpecialChars =
    pwdRequirements.get("includeSpecialChars") === "on";
  const length = Number(pwdRequirements.get("pwdLength"));

  getPasswords(length, includeSpecialChars);
});
