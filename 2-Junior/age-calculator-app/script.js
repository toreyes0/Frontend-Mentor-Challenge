function getTimeDiff(startDate) {
  const startDateObj = new Date(startDate);
  const currentDate = new Date();

  let yearDiff = currentDate.getFullYear() - startDateObj.getFullYear();
  let monthDiff = currentDate.getMonth() - startDateObj.getMonth();
  let dayDiff = currentDate.getDate() - startDateObj.getDate();

  if (dayDiff < 0) {
    monthDiff -= 1;
    const daysInLastMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    ).getDate();
    dayDiff += daysInLastMonth;
  }

  if (monthDiff < 0) {
    yearDiff -= 1;
    monthDiff += 12;
  }

  return [yearDiff, monthDiff, dayDiff];
}

const isDateInFuture = (startDate) => startDate > new Date();

const dayError = document.querySelector('#day .error');
const monthError = document.querySelector('#month .error');
const yearError = document.querySelector('#year .error');
const calcBtn = document.querySelector('#calc-btn');

calcBtn.addEventListener('click', () => {
  // get input
  const startDay = document.querySelector('#day-input').value
  const startMonth = document.querySelector('#month-input').value
  const startYear = document.querySelector('#year-input').value
  // validate
  const startDate = new Date(startYear, startMonth - 1, startDay);
  startDate.setFullYear(startYear); // for years < 100
  if (startDay === '' || startDay < 1 || startDay > 31) {
    dayError.classList.add('warning');
  }
  if (startMonth === '' || startMonth < 1 || startMonth > 12) {
    monthError.classList.add('warning');
  } else if (startYear === '' || isDateInFuture(startDate)) {
    dayError.classList.add('warning');
    monthError.classList.add('warning');
    yearError.classList.add('warning');
  } else {
    // remove warnings
    dayError.classList.remove('warning');
    monthError.classList.remove('warning');
    yearError.classList.remove('warning');
    // calculate
    const [yearsSince, monthsSince, daysSince] = getTimeDiff(startDate);
    // display output
    document.querySelector('#day-output span').textContent = daysSince;
    document.querySelector('#month-output span').textContent = monthsSince;
    document.querySelector('#year-output span').textContent = yearsSince;
  }
});
