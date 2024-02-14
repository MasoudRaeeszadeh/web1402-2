// let input = [];
// input = process.argv;
// let a = [];
// for (let i = 2; i < input.length; i+=2) 
// {
//     let p = {
//         name:input[i],
//         age:input[i+1]
//     };
//     a.push(p)

// }

// console.log(a);

let inp = process.argv;
let array = [];
let j=0;
for (let i = 2; i < inp.length; i+=2) 
{
    array[j]={name: inp[i],age:[i+1]};
    j++;
}
console.log(array);