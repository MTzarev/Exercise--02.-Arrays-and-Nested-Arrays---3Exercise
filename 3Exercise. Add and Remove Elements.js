function addAndRemoveElements(input) {
let finalArr = []
for (let i=0; i<input.length; i++){
    let command = input[i];
    if(command===`add`){
        finalArr.push(i+1)
    }else if(command === `remove`){
        finalArr.pop(i)
    }
}
if (finalArr.length<=0){
    return `Empty`;
}
    return finalArr.join(`\n`)
}
console.log(addAndRemoveElements(['add', 
'add', 
'add', 
'add']));
console.log(`---`);
console.log(addAndRemoveElements(['add', 
'add', 
'remove', 
'add', 
'add']
));
console.log(`---`);
console.log(addAndRemoveElements(['remove', 
'remove', 
'remove']
));