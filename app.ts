let language:string = "welcome";
 console.log(language);

let employeeName:string ="John Sharma";
console.log("employee name : " +employeeName);
console.log(`employee name :  ${employeeName}`);

let isManager:boolean = true;
console.log(`isManager ? : ${isManager}`);
 

let mobile:object={
color : "red",
price : 555,
}
console.log(mobile);


let tech:string[]=["fuck", "u", "fuck"];
console.log(tech);

enum Month{
    JAN = 'JANUARY',
    FEB = 'FEBUARY'
}
console.log(Month);


for(let elm in Month){
console.log(elm);
}


let tblName = `emp`;
let usrName = `root`;
let usrPaswd = `root`;

console.log(`select * from ${tblName} where username = '${usrName}' and password = '${usrPaswd}'`);
