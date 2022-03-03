let Add = function() {
    let a = 20;
    return function sum() {
        console.log(a + 20);
    }
}
Add()();
let callAdd = Add();
callAdd();