let fs = require('fs');
let inp = process.argv;

function x(err)
{
    if(err)
    {
     if(err.code === 'EPERM')
      {
      fs.rmdir(inp[2], y)   
      }
      else
      {
        console.log('err:', err)
      }

    }
    else
    {
        console.log('file deleted')
    }
}

function y(err)
{
    if(err)
    {
     console.log('err:', err)
    }
    else
    {
        console.log('folder deleted')
    }
}

fs.unlink(inp[2], x);