// console.log("inputs", process.argv);

// let inputs = [];

// function x (val, index)
// {
//     if(index>1)
//     {
//         inputs[index - 2] = val; }
// }

// process.argv.forEach(x);
    
// console.log("input:", inputs);

let len = process.argv.length;
let array = [];
for (let i = 2; i<len; i++) 
{
 array[i-2]=process.argv[i];   
}
console.log(array);

