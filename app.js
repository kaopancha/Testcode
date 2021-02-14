//script จะทำงานโดยดึงข้อมูลจากส่วนบน tag script ใน file html มา (เชื่อมต่อ github)

//แสดงใน console
console.log("Hello Jame")
            
//แสดงข้อความ popup + ตั้งค่าตัวแปร
//alert("hello")

//กรอกข้อมูลใน popup
//var number = prompt("Enter Number")

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

var x = 20
{
    var x = 10
    // let ใช้ตัวแปรเฉพาะส่วน
    let y = 15
}

// function สุ่มเลขจนกว่าจะตรง นับรอบ
const random_num = async  () => 
{
    //sweet alert แบบ text
    const { value: number } = await Swal.fire({
        input: 'text',
        inputLabel: 'เลือกเลขที่ต้องการ 0-99',
        inputPlaceholder: 'กรอกเลขที่ต้องการ'
      })
    
    var ran_number
    var count = 0
    do {
        //สุ่มเลข Math.floor ปัดเศษลง Math.random() สุ่มเลข 0-1
        ran_number = Math.floor(Math.random() * 100)
        count++
        //แสดงเลขสุ่มใน console
        console.log(ran_number)
    }
    while (number != ran_number && number != "" && number != null) //เงื่อนไขถ้าเลขสุ่มไม่ตรงกับเลขที่กรอกให้แสดงแล้ววนซ้ำ
    
    Swal.fire('เลขที่เลือก คือ ' + number + '\nจำนวนที่สุ่มไปทั้งหมด ' + count + ' ครั้ง')

    //innerHTML ใส่ code html ได้ innerText ใส่ได้แค่ Text
    document.getElementById("result").innerHTML = "จำนวนที่สุ่มทั้งหมด " + count //แสดงจำนวนครั้ง
}

//function สุ่มลอตเตอรี่
const lotto = async  () => {

    //sweet alert แบบ text
    const { value: number } = await Swal.fire({
      input: 'text',
      inputLabel: 'เลือกเลขที่ต้องการ 0-99',
      inputPlaceholder: 'กรอกเลขที่ต้องการ'
    })

    //สุ่มเลข Math.floor ปัดเศษลง Math.random() สุ่มเลข 0-1
    var ran_number = Math.floor(Math.random() * 100)

    if (number != null) {
      Swal.fire('เลขที่เลือก : ' + number + '\nเลขที่สุ่มได้ : ' + ran_number)
    }
    
}

//คำนวณราคา
async function cal_pro() {

  var product_list = ""
  var total = 0
  var sum = 0

  //sweet alert แบบ number
  const { value: list } = await Swal.fire({
    input: 'number',
    inputLabel: 'รายการสินค้า',
    inputPlaceholder: 'กรอกจำนวนรายการสินค้า'
  })

  for(var i=1; i<=list; i++)
  {
      //sweet alert แบบ select
      const { value: product } = await Swal.fire({
        title: 'Fruits or Vegetables',
        input: 'select',
        inputOptions: {
          'Fruits': {
            Apples: 'Apples 30',
            Bananas: 'Bananas 50',
            Grapes: 'Grapes 80'
          },
          'Vegetables': {
            Potato: 'Potato 40',
            Carrot: 'Carrot 25'
          }
        },
        inputPlaceholder: 'Select Product',
        showCancelButton: true
        
      })

      //sweet alert แบบ text
      if (product) {
        const { value: qrt } = await Swal.fire({
          input: 'text',
          inputLabel: 'จำนวนสินค้า',
          inputPlaceholder: 'กรอกจำนวนสินค้า'
        })

        //คิดราคารวมตามชนิดสินค้า
        if(product == "Apples") sum = 30 * parseInt(qrt)
        else if(product == "Bananas") sum = 50 * parseInt(qrt)
        else if(product == "Grapes") sum = 80 * parseInt(qrt)
        else if(product == "Potato") sum = 40 * parseInt(qrt)
        else if(product == "Carrot") sum = 25 * parseInt(qrt)
        
        total += sum
        product_list += "สินค้าที่ " + i + " " + product + " จำนวน " + qrt + " ราคารวม " + sum +"<br>"
      }
  }
  product_list += "ราคารวมทั้งหมด " + total
  //แสดงรายการผ่าน <p id="result" ใน index>
  document.getElementById("result").innerHTML = product_list
}

//ทายหัวก้อย
async function headtail(){
  var ran_number
  var choice = ""
  var result = []
  var true_c = 0; var false_c = 0

  //sweet alert แบบ number
  const { value: round } = await Swal.fire({
    input: 'number',
    inputLabel: 'คุณจะเล่นกี่รอบ',
    inputPlaceholder: 'กรอกจำนวนรอบ',
    inputAttributes: {
      min: 0,
      max: 100
    }
  })

  for(i=1; i<=round; i++){
    //sweet alert แบบ select
    const { value: answer } = await Swal.fire({
      input: 'select',
      inputLabel: 'หัว หรือ ก้อย',
      inputPlaceholder: 'เลือกหัวก้อย',
      inputOptions: {
        หัว: 'หัว',
        ก้อย: 'ก้อย',
      },
      //เงื่อนไขในการกรอกข้อมูล
      inputValidator: (value) => {
        return new Promise((resolve) => {
          if (value === 'หัว' || value === 'ก้อย') {
            resolve()
          } else {
            resolve('คุณต้องเลือกหัวหรือก้อย')
          }
        })
      }
    })
    ran_number = Math.floor(Math.random() * 10)

    if(ran_number <= 4) choice = "หัว"
    else choice = "ก้อย"
    
    if(answer == choice){
      result.push("ครั้งที่ " + i + " ถูกต้อง")
      true_c++
      await Swal.fire('ตอบถูก ! ยินดีด้วย')
    } 
    else {
      result.push("ครั้งที่ " + i + " ผิด ")
      false_c++
      await Swal.fire('ตอบผิด ! เสียใจด้วย')
    }
    
  }
  document.getElementById("result").innerHTML = result.join("<br>") + "<br>รวม ตอบถูก " + true_c + " ครั้ง ตอบผิด " + false_c + " ครั้ง" 
}

//แปลงอุณหภูมิ
async function tocelsius() {
  let celsius = 0

  //sweet alert แบบ number
  const { value: fahrenheit } = await Swal.fire({
    input: 'number',
    inputLabel: 'แปลง ฟาเรนไฮต์ เป็น เซลเซียส',
    inputPlaceholder: 'กรอกตัวเลขอุณภูมิ',
  })
  celsius = (fahrenheit - 32) * 5 / 9

  Swal.fire("อุณหภูมิ " + fahrenheit + " ℉ = " + celsius.toFixed(2) + " ℃")
}

// function ที่มี return
function sayHello(){
  return "Hello"
}

//แฟคทอเรียล ส่วนคำนวณ
function factorial_cal(value){
  let answer = 1
  if (value == 0){
    return answer
  }
  else {
    for(i=1; i<=value; i++){
      answer = answer * i
    }
    return answer
  }
}

//แฟคทอเรียล ส่วนหลัก
function ans_factorial(num_val){
  let answer = factorial_cal(num_val)
  document.getElementById("showcontent").innerHTML = num_val + "! = " + answer
}

// ส่ง argument แบบ function
function main () {
  plusNumber1(5, 10, function(result) {       //เรียกใช้ plusNumber1 ส่ง 5 10 function
    console.log(result) // 15
  })
  console.log(plusNumber2(3,7))               //เรียกใช้ plusNumber2 ส่ง 3 7
}
function plusNumber1(num1, num2, callback) {  
  setTimeout(function() {
    callback(num1+num2)           //ใช้ callback (เป็นตัวฟังก์ชันเก็บค่า result) จาก num1+num2
  },1000);                        //หน่วงเวลา 1 วินาที
}
function plusNumber2(num1, num2) {
  return num1+num2
}
main()

//เทคนิคใช้งาน async await
async function async_await_Tech () {
  let promiseA = axios.get('http://www.xxx.com/getUser')      // promiseA B C ทำงานพร้อมกัน
  let promiseB = axios.get('http://www.xxx.com/getCompany')
  let promiseC = axios.get('http://www.xxx.com/getProduct')
  let resultA = await promiseA                                // เรียกใช้ผลลัพธ์แต่ละตัว โดยเรียง A B C ไวขึ้นเพราะทำงานไว้ก่อนแล้ว
  let resultB = await promiseB                                // แค่เรียกใช้ผลลัพธ์ที่ถูกเก็บไว้ในตัวแปร
  let resultC = await promiseC
}

//การเปรียบเทียบค่า array
var arr1 = ['Hi!'];
var arr2 = ['Hi!'];
var arr1str = JSON.stringify(arr1);
var arr2str = JSON.stringify(arr2);
console.log(arr1 === arr2);           // false เทียบค่า address ที่เก็บข้อมูล ซึ่งไม่ตรงกัน
console.log(arr1str === arr2str);     // true การเทียบค่าใน memory ใช้ JSON 

//ใส่วิดีโอ youtube ใส่ \ หน้า " ตัวที่ไม่ใช่ตัวปิดข้อความ code iframe
document.getElementById("video_content").innerHTML = "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/k6oWQkDkh7c\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"


