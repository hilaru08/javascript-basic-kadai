const date = new Date();
const year = date.getFullYear();
const month = date.getMonth()+1;
const day = date.getDate();

console.log(date);
console.log(year);
console.log(month);
console.log(day);

console.log(year + '年' + month + '月'+ day +'日');