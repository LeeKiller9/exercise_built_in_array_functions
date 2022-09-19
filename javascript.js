function bai1_joinArray() {
    let n = +(prompt("Enter amount of array"));
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = prompt("Enter value at index " + i);
    }
    document.getElementById("result_ex1").innerHTML = "Array: " + arr + "<br>toString: " + (arr.toString())
        + "<br>Join: " + (arr.join()) + "<br>Join with '+': " + (arr.join('+'));
}

function bai2_insert() {
    let number = prompt("Enter a line of number");
    let arr = [];
    arr = number.toString();
    let result = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] % 2 === 0 && arr[i] % 2 === 0) {
            result.push("-", arr[i]);
        } else {
            result.push(arr[i]);
        }
        console.log(result)
    }
    document.getElementById("result_ex2").innerHTML = "Line of number: " + number + "<br>Insert -: " + (result.join(""));
}

function bai3_upper() {
    let str = prompt("Enter the string");
    let UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let LOWER = 'abcdefghijklmnopqrstuvwxyz';
    let result = [];

    for (let i = 0; i < str.length; i++) {
        if (UPPER.indexOf(str[i]) !== -1) {
            result.push(str[i].toLowerCase());
        } else if (LOWER.indexOf(str[i]) !== -1) {
            result.push(str[i].toUpperCase());
        } else {
            result.push(str[i]);
        }
    }
    document.getElementById("result_ex3").innerHTML = "The string: " + str + "<br>Upper and Lower: " + (result.join(""));

    // let str = prompt("Nhập chuỗi hoa thường bất kì");
    // let arrStr = str.split("");
    // let UPPER = "QWERTYUIOPASDFGHJKLZXCVBNM";
    // let arrUp = UPPER.split("");
    // let LOWER = "qwertyuiopasdfghjklzxcvbnm";
    // let arrLo = LOWER.split("");
    // document.write("" + arrStr + "<br>");
    // for (let i = 0; i < arrStr.length; i++) {
    //     for (let j = 0; j < arrUp.length; j++) {
    //         if (arrStr[i] === arrUp[j]) {
    //             arrStr[i] = arrLo[j];
    //         } else if (arrStr[i] === arrLo[j]) {
    //             arrStr[i] = arrUp[j];
    //         }
    //     }
    // }
    // document.write("" + arrStr);
}
