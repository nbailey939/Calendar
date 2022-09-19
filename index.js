const monthEl = document.querySelector('.date h1');
const fullDateEl = document.querySelector('.date p');
const daysEl = document.querySelector('.days');

const monthsIndex = new Date().getMonth();
const lastDay = new Date(
  new Date().getFullYear(),
  monthsIndex + 1,
  0
).getDate();
const firstDay =
  new Date(new Date().getFullYear(), monthsIndex, 1).getDay() - 1;
//month names in an Array
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

monthEl.innerText = months[monthsIndex];
fullDateEl.innerText = new Date().toDateString();

let days = '';

// picks the starting day of the month
for (let i = firstDay; i > 0; i--) {
  days += `<div class='empty'></div>`;
}
//picks the end day of the month
// the today class colors the div differently and changes
// the text color to black so you can easily see todays date.

for (let i = 1; i <= lastDay; i++) {
  if (i === new Date().getDate()) {
    days += `<div class='today'>${i}</div>`;
  } else {
    days += `<div>${i}</div>`;
  }
}

daysEl.innerHTML = days;
