const accountName = document.querySelector("#username");
const accountInfo = JSON.parse(localStorage.getItem("user"));

accountName.innerText = accountInfo.name;
