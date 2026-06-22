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
async function getUsers() {
    try {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/users'
        );
        const data = await response.json();
        // console.log(data);
        return data
        
    } catch (error) {
        console.log('Something went wrong:', error.message);
    }
}
getUsers()

const users = await getUsers();
const filterName = users
    .filter(user => user.name.length > 17) 
    .map(user => user.name)
console.log(filterName);


// [ 'Mrs. Dennis Schulist', 'Nicholas Runolfsdottir V', 'Clementina DuBuque' ]