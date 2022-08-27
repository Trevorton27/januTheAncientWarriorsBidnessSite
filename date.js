const date = new Date();
const currentYear = date.getFullYear();
console.log('current year:', currentYear);
const showYear = document.querySelector('#date-span');
showYear.innerText = ` ${currentYear}`;
console.log('showYear:', showYear);
