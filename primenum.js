// ***ภายใน function ย่อย ควรเป็นการทำงานโดยใช้ parameter รับค่ามาทำงาน

// function รับค่าตัวเลข แสดงผล
function primeNum_func(){
    let lastnum = prompt("ป้อนจำนวนที่ต้องการหาจำนวนเฉพาะ")    //รับค่าที่ต้องการ
    let primeNumbers = [];                                 //กำหนดตัวแปร array เก็บค่าจำนวนเฉพาะ
    for (let i = 1; i <= lastnum; i++) {                   //ลูปวนรอบ ตามค่าที่กรอก
        if (isPrime(i)) {                                  //เรียกใช้ function ทำงานเมื่อเป็น true
            primeNumbers.push(i);                          //เพิ่มค่า i เป็นสมาชิกใน array
        }
    }
    /*
    console.log("Prime numbers from 1 to " + lastnum);
    console.log(primeNumbers.join(", "));
    console.log(primeNumbers.length + " numbers in total");
    */
    document.getElementById("result").innerHTML = "Prime numbers from 1 to " + lastnum + "<br>" + primeNumbers.join(", ") + "<br>" + primeNumbers.length + " numbers in total"
}

// function หาจำนวนเฉพาะ (Function expression : funtion จะถูกสร้างตอนทำงาน)
let isPrime = function(n) {
    if (n == 1) {                           //ค่าเป็น 1 ส่ง false กลับ
        return false;           
    }               
    for (let i = 2; i <= n; i++) {          //ลูปเริ่มรอบที่ 2 ถ้ายัง <= n ให้เพิ่มรอบ
        if (n % i == 0 && n != i) {         //เงื่อนไข หารเอาเศษ = 0 และ n != จำนวนรอบ ส่ง false กลับ
            return false;
        }
    }
    return true;                            //ไม่เป็นไปตามด้านบน ส่ง true กลับ
}

    
