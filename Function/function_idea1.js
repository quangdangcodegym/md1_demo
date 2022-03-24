/* Một chương trình phần mềm bao gồm hàng trăm, hàng nghìn, hàng triệu dòng code
Không thể viết các dòng code liên tục nhau như thế được
Cần phân tách thành các phần nhỏ hơn để dễ lập trình, dễ quản lý
Hàm là một cách để tách một chương trình lớn thành các phần nhỏ

trình bày một ví dụ mẫu về một ứng dụng có nhiều hàm, mỗi hàm làm một nhiệm vụ khác nhau, chẳng hạn:



// Cach goi ham, tuan tu chuong trinh chay
function absolute(number) {
    if(number < 0) {
        return -number;
    }
    return number;
}
console.log(absolute(3));
console.log(absolute(-5));
console.log(absolute(0));


// Hieu ve return trong goi ham
function print(number) {
    if(number <= 0)
        return;
    for(let i = 0; i < number; i++) {
        console.log(i);
    }
}

print(5);
print(-5);


// Pham vi bien trong ham
function print() {
    let number = 5;
    console.log(number);
}

print();
console.log(number);


// Pham vi bien: toan cuc va cuc bo
let number = 5;
function print(argument) {
    argument++;
    console.log(argument);
    //number++;
}
print(number);
console.log(number);


// Truyen tham chieu trong javascript
let arr = [2, 4, 1];
function updateArray(arr, index, value){
    //arr[1] = value;


    let arrNew = arr;
    arrNew[1] = value + 10;
}

console.log(arr);
updateArray(arr,1, 2 )
console.log(arr);

*/
// 

let arr = [2, 4, 1];
arr = arr.slice();
function updateArray(arr, index, value){
    //arr[1] = value;


    let arrNew = arr;
    arrNew[1] = value + 10;
}

console.log(arr);
updateArray(arr,1, 2 )
console.log(arr);


