let Row = 5;
let Col = 6;
let _array = [];
for(let i = 0; i < Row; i++) {
    let _arr1 = []
    for(let j=0;j<Col;j++){
        _arr1[j] = i*j;
    }
    _array[i] = _arr1;
}
console.log(_array);