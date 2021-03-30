//พื้นฐานการใช้งาน ตัวแปร แสดงข้อความ (Test เชื่อมต่ออีกเครื่อง)

var i = 0
let time_delay = setInterval(() => {
    console.log('i = ', i)
    i++
    if(i === 3){
        clearInterval(time_delay)        //ยกเลิก
    }
}, 1000)                                //หน่วงเวลาแบบทำทุกๆเวลาที่กำหนด Ctrl+c ยกเลิก

var lastname = 'Katukan'
var fullname = `Praphan ${lastname}`           //ต่อข้อความ ใช้ ``
var student = {                                //object
    id: '005',
    st_name: 'praphan',
    grade: {
        Math: 'A',
        Science: 'B',
    },
}
student.age = 22                                                //เพิ่ม property ใน object
delete student.age                                              //ลบ property ใน object

var list = ['Banana', 10, {price: 500}, ['Green', 'Yellow'],]    //array
/*
list.length       จำนวนสมาชิกใน array
list.push(i)      เพิ่มสมาชิกค่าตัวแปร i ต่อท้าย 
list.pop()        เอาสมาชิกท้ายออก
list.shift()      เอาสมาชิกตัวแรกออก
list.unshift(i)   แทรกค่าตัวแปร i ด้านหน้าตัวแรก
list.splice(start, deleteCount, item1, item2) sdadsada
    start ตำแหน่งเริ่มต้นที่ต้องการตัด    deleteCount จำนวนที่ตัด
    item1 item2 ตัวที่ต้องการแทรก(ถ้ามี)
    list.splice(1,2)   เริ่มลบที่ตำแหน่ง 1 ลบ 2 ตัว
    list.splice(2,0,'Apple') จำนวนลบ = 0 แทรก Apple ในตำแหน่งที่ 2 
*/
text = JSON.stringify(student)                  //JSON แปลงเป็น string
student = JSON.parse(text)                      //JSON แปลงกลับ

var student2 = student                          // student2 ชี้ไปที่ student    
student2.id = '006'                             // student ถูกเปลี่ยนไปด้วย
student3 = JSON.parse(JSON.stringify(student))  //การ clone ระดับลึก ถึง array, obj ด้านในอีกที (student3 เปลี่ยน student ไม่เปลี่ยน)

console.log(`Hello ${fullname} id : ${student.id}`)             //แสดงแบบต่อข้อความ + prop ใน object
//แสดงรายการใน array แบบ string number object array
console.log(`Order is ${list[0]} qty ${list[1]} total ${list[2].price} color ${(list[3])[1]}`)

