// เริ่มเขียนโค้ดตรงนี้
// fetch data from url: https://jsonplaceholder.typicode.com/users
/*
instruction
- ดึงข้อมูล User จาก Server ชื่อ `Jsonplaceholder` ด้วย Built-in `fetch` Function
- สมมุติว่าข้อมูลที่ได้จาก Server เป็นแบบนี้ (คลิกเพื่อแสดงข้อมูล)
- ให้แปลงข้อมูลที่ได้จาก Server ให้อยู่ในรูปแบบ Array ของชื่อที่มีความยาวตัวอักษรมากกว่า 17 ตัวอักษร 
ใช้ Built-in Array Function (Map, Filter หรือ Reduce) เช่น
- หลังจากการแปลงข้อมูล ผลลัพธ์ควรจะแสดงบนหน้าจอแบบนี้
*/
function getUsers() {
    const response = fetch('https://jsonplaceholder.typicode.com/users')
    response.json()
                        
}

// [ 'Mrs. Dennis Schulist', 'Nicholas Runolfsdottir V', 'Clementina DuBuque' ]