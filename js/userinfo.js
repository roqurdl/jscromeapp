const getInfo = JSON.parse(localStorage.getItem("user"));
const accountName = document.querySelector(".username");
const accountId = document.querySelector(".userid");
const accountPw = document.querySelector(".userpw");

const deletebtn = document.querySelector(".deleteaccount");

accountName.value = getInfo.name;
accountId.value = getInfo.id;
accountPw.value = getInfo.pw;

function deleteInfo() {
  window.localStorage.removeItem("user");
  window.localStorage.removeItem("todos");
}
deletebtn.addEventListener("submit", deleteInfo);
