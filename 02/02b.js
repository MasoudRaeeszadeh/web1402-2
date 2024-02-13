let input = [];
input = process.argv;
let a = [];
for (let i = 2; i < input.length; i+2) 
{
    let p = {
        name:input[i],
        age:input[i+1]
    };
    a.push(p)

}


console.log(a)







