const timer = (deadline) => {
  const timers = document.querySelectorAll(".count-wrap");
  let interval;

  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    if (dateNow > dateStop) {
      return { timeRemaining: -1, hours: "00", minutes: "00", seconds: "00" };
    }
    let timeRemaining = (dateStop - dateNow) / 1000;
    let days = Math.floor(timeRemaining / 60 / 60 / 24);
    let hours = Math.floor((timeRemaining / 60 / 60) % 24);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);

    return { timeRemaining, days, hours, minutes, seconds };
  };

  const updateClock = () => {
    let getTime = getTimeRemaining();
    timers.forEach((element) => {
      const [timerDays, timerHours, timerMinutes, timerSeconds] =
        element.children;
      if (getTime.days > 0) {
        timerDays.children[1].textContent = (getTime.days + "").padStart(
          2,
          "0"
        );
      } else {
        timerDays.children[1].textContent = "00";
      }
      timerHours.children[1].textContent = (getTime.hours + "").padStart(
        2,
        "0"
      );
      timerMinutes.children[1].textContent = (getTime.minutes + "").padStart(
        2,
        "0"
      );
      timerSeconds.children[1].textContent = (getTime.seconds + "").padStart(
        2,
        "0"
      );
    });

    if (getTime.timeRemaining < 0) {
      clearInterval(interval);
    }
  };

  const startClock = () => {
    updateClock();
    interval = setInterval(() => {
      updateClock();
    }, 1000);
  };

  startClock();
};

export default timer;
