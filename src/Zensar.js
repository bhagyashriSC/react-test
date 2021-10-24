let array = [1, 2, 3, [4, 5, 6], [8, 9]];
let newArr = []
function addNew(a) {
    if(a){
        for (let j = 0; j < a.length; j++) {
            newArr.push(a[j])
        }
    }
}
for(let i = 0; i <= array.length; i++) {
    if(typeof (array[i]) === 'number') {
        newArr.push(array[i])
    }
    else{
        addNew(array[i])
    }

}
console.log(newArr)