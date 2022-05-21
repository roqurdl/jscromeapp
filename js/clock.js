const today = document.querySelector("#clock h1:first-child");
const time = document.querySelector("#clock h1:last-child");

function paintClock() {
  const day = new Date();
  const year = day.getFullYear();
  const month = day.getMonth() + 1;
  const date = day.getDate();
  today.innerText = `${year}년 ${month}월 ${date}일`;
  const hours = String(day.getHours()).padStart(2, "0");
  const minutes = String(day.getMinutes()).padStart(2, "0");
  const seconds = String(day.getSeconds()).padStart(2, "0");
  time.innerText = `${hours}:${minutes}:${seconds}`;
}

setInterval(paintClock, 1000);
