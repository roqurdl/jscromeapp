const dDayText = document.querySelector("#dday__text");
const calDDay = document.querySelector("#cal-dday");
const chosenDay = document.querySelector("#ddate");

const CAL_DAY = 1000 * 60 * 60 * 24;
const CAL_HOUR = 1000 * 60 * 60;
const CAL_MIN = 1000 * 60;

function paintDDay(e) {
  e.preventDefault();
  const choDay = chosenDay.value;
  if (choDay !== "") {
    const dDay = new Date(choDay);
    const today = new Date();
    const gap = dDay.getTime() - today.getTime();
    const day = Math.floor(gap / CAL_DAY);
    if (gap > 0) {
      dDayText.innerText = `D-${day}`;
    } else {
      dDayText.innerText = `D+${day}`;
    }
  } else {
    alert("You Should Choose A Day");
  }
}

// clockText.innerText = `Select D-Day From Calendar`;
calDDay.addEventListener("click", paintDDay);
