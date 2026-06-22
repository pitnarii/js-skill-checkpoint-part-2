const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];
/*
- ให้เขียนโปรแกรมโดยใช้ Built-in Array Function ทำกระบวนการต่อไปนี้
    1. ให้กรองข้อมูลนักเรียนที่มีคะแนนมากกว่า 50 (.filter students.score > 50)
    2. ให้เพิ่มคะแนนนักเรียนแต่ละคนที่ผ่านการกรองในข้อหนึ่ง 10% (add 0.1*scores from students's score > 50)
    3. ให้หาผลรวมของคะแนนทั้งหมดจากข้อ 2 (.reduce)
    4. ให้นำคะแนนที่รวมแล้ว มาแสดงบนหน้าจอ Console ในรูปแบบ 
    `"Total score is <ค่าของคะแนนที่รวมแล้ว>"` (ห้าม Hard-Code ค่าเข้าไปใน String โดยตรง)
    //"Total score is 235.4"
*/

// เริ่มเขียนโค้ดตรงนี้
// const filter = students.filter(student => student.score >50);
// console.log(filter)

function newScore(students) {
  const totalScores = students
  .filter(student => student.score > 50)
  .map(student => student.score + (student.score * 0.1))
  .reduce((sum,score) => sum + score,0)
  return totalScores
}
console.log(newScore(students))
let result = `Total score is ${newScore(students)}`
console.log(result)




