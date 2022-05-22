const creation = document.querySelector("#createaccount");
const username = document.querySelector("#username");
const id = document.querySelector("#userid");
const pw = document.querySelector("#userpw");
const pwConfirm = document.querySelector("#userpwconfirm");

const USERINFO_KEY = "user";

function handleCreateSubmit(e) {
  const newUserObj = {
    name: username.value,
    id: id.value,
    pw: pw.value,
  };
  if (pw.value === pwConfirm.value) {
    window.localStorage.removeItem("todos");
    localStorage.setItem(USERINFO_KEY, JSON.stringify(newUserObj));
  } else {
    e.preventDefault();
    alert("Please Check your password and Confirm.");
  }
}

creation.addEventListener("submit", handleCreateSubmit);
