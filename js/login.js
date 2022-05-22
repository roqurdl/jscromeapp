const ids = document.querySelector("#useid");
const pws = document.querySelector("#pw");
const loginForm = document.querySelector("#login");

const userInfo = JSON.parse(localStorage.getItem("user"));
//userInfo = object

function handleLoginSubmit(e) {
  const useId = ids.value;
  const usePw = String(pws.value);
  if (userInfo !== null) {
    if (userInfo.id !== useId && userInfo.pw !== usePw) {
      e.preventDefault();
      alert("You Should Create Acount First.");
    } else if (userInfo.id !== useId) {
      e.preventDefault();
      alert("Please Check your ID.");
    } else if (userInfo.pw !== usePw) {
      e.preventDefault();
      alert("Pleae Check your Password.");
    }
  } else {
    e.preventDefault();
    alert("You Should Create Acount First.");
  }
}

loginForm.addEventListener("submit", handleLoginSubmit);
