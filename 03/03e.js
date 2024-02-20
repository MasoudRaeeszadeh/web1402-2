let fs = require('fs');
let inp = process.argv;

function x(err)
{
    if(err)
    {console.log('err:',err)}
    else
    {console.log('copped')}
}

fs.copyFile(inp[2], inp[3], x);