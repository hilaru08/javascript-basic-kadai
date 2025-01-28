const date = new Date(' Oct 12, 2024');
const year = date.getFullYear();
const month = date.getMonth()+1;
const day = date.getDate();

console.log(date);
console.log(year);
console.log(month);
console.log(day);

console.log(year + '年' + month + '月'+ day +'日');