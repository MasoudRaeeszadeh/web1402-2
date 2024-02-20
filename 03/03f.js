let fs = require('fs');
let inp = process.argv;


switch (inp[2])

{
    case 'delete':

    function unlinkCB(err)
    {
     if(err)
     {
      if(err.code === 'EPERM')
      {
      fs.rmdir(inp[3], rmdirCB)   
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

  function rmdirCB(err)
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

  fs.unlink(inp[3], unlinkCB);
 break;

 case 'create': 

   function createCB(err)
   {
    if(err)
    {console.log('err:',err)}
    else
    {console.log('saved')}
   }

   fs.writeFile(inp[3], inp[4], createCB);

 break;

case 'append':

  function appendCB(err)
  {
    if(err)
    {console.log('err:',err)}
    else
    {console.log('append')}
  }

  fs.appendFile(inp[3], inp[4], appendCB);

  break;

case 'copy':
    function copyCB(err)
  {
    if(err)
    {console.log('err:',err)}
    else
    {console.log('copped')}
  }

  fs.copyFile(inp[3], inp[4], copyCB);

break;

}

