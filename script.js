const input = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const result = document.getElementById("result");

function isPalindrome(textEntry) {
  const cleanText = textEntry
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, "");
  if (cleanText.length === 1) return false;

  return cleanText === cleanText.split("").reverse().join("");
}

function textValidation() {
  const textEntry = input.value.trim();

  if (!/[a-zA-Z]/.test(textEntry)) {
    alert("Please enter a string with at least one letter");
    return;
  }

  if (textEntry === "") {
    alert("Please input a value");
    return;
  }
  if (isPalindrome(textEntry)) {
    result.innerText = `${textEntry} is a palindrome.`;
  } else result.innerText = `${textEntry} is not a palindrome.`;
}

button.addEventListener("click", textValidation);

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    textValidation();
  }
});
