const charset = "abcdefghijklmnopqrstuvwxyz0123456789!§$%&/()=?#,;.:_";

function getRandomInt() {
  return Math.floor(Math.random() * charset.length);
}

function generator(length, mixedCase) {
  let password = "";

  for (let i = 0; i < length; i++) {
 

    const zahl = getRandomInt();

    if (mixedCase && i % 3 == 0) {
        password += charset[zahl].toUpperCase();
      } else {
        password += charset[zahl];
      }
    }
    return password;
  }
const form = document.querySelector("#password-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const lengthEl = document.querySelector("#length");
  const length = parseInt(lengthEl.value, 10);

  const mixedCaseElement = document.querySelector("#mixedCases");
  const mixedCase = mixedCaseElement.checked;

  const password = generator(length, mixedCase);
  const passElement = document.querySelector("#output");
  passElement.textContent = password;
});