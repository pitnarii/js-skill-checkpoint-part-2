const alphaTech = [
    { name: 'Alice', age: 23, department: 'Engineering' },
    { name: 'Bob', age: 19, department: 'Design' }
  ];
  
  const betaSoft = [
    { name: 'Charlie', age: 28, department: 'Engineering' },
    { name: 'David', age: 17, department: 'Support' }
  ];
  
  const gammaDev = [
    { name: 'Eve', age: 25, department: 'Marketing' },
    { name: 'Faythe', age: 18, department: 'Engineering' },
    { name: 'Grace', age: 20, department: 'Engineering' }
  ];
  

const alphaTechWithCompany = alphaTech.map(employee => ({
  ...employee,
  company: "alphaTech"
}));
// console.log(alphaTechWithCompany)

const betaSoftWithCompany = betaSoft.map(employee => ({
  ...employee,
  company: "betaSoft"
}));

const gammaDevWithCompany = gammaDev.map(employee => ({
  ...employee, 
  company: "gammaDev"
}))
// console.log(gammaDevWithCompany)

const allEmployees = [...alphaTechWithCompany, ...betaSoftWithCompany,...gammaDevWithCompany];
console.log(allEmployees)


const result = allEmployees.filter((employee) => {
  return employee.department === 'Engineering' && employee.age >= 20;
}).map((employee) => {
  return {
    name: employee.name,
    company: employee.company 
  };
});
/*
- โค้ดชุดนี้จะทำงานดังนี้:
    1. รวมข้อมูลพนักงานจากทั้ง 3 บริษัทให้อยู่ใน Array เดียว
    2. จากนั้นนำข้อมูลที่ได้จากข้อ 1 มากรองเฉพาะพนักงานที่อยู่ในแผนก `Engineering` และมีอายุตั้งแต่ 20 ปีขึ้นไป (รวมคนที่อายุ 20 ด้วย)
    3. นำข้อมูลที่ได้จากข้อ 2 มาแปลงผลลัพธ์ ให้เหลือเพียง  `name` และ `company` ของแต่ละคน
    4. ห้าม hardcode ชื่อบริษัทลงในข้อมูลโดยตรง ให้เขียนโค้ดเพื่อเข้าถึงข้อมูล `company` ของพนักงานแต่ละคนเท่านั้น
*/


console.log(result);
// [
//     { name: 'Alice', company: 'alphaTech' },
//     { name: 'Charlie', company: 'betaSoft' },
//     { name: 'Grace', company: 'gammaDev' }
// ]
  

