var language = "welcome";
console.log(language);
var employeeName = "John Sharma";
console.log("employee name : " + employeeName);
console.log("employee name :  ".concat(employeeName));
var isManager = true;
console.log("isManager ? : ".concat(isManager));
var mobile = {
    color: "red",
    price: 555
};
console.log(mobile);
var tech = ["fuck", "u", "fuck"];
console.log(tech);
var Month;
(function (Month) {
    Month["JAN"] = "JANUARY";
    Month["FEB"] = "FEBUARY";
})(Month || (Month = {}));
console.log(Month);
for (var elm in Month) {
    console.log(elm);
}
var tblName = "emp";
var usrName = "root";
var usrPaswd = "root";
console.log("select * from ".concat(tblName, " where username = '").concat(usrName, "' and password = '").concat(usrPaswd, "'"));
