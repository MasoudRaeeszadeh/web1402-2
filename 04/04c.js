let fs = require('fs');
let command = process.argv[2];
let name = process.argv[3];
let arg4 = process.argv[4];

function writeFileCallback(err) {
    if(err){
        console.log('ERR: ', err);
    }
    else{
        console.log('writeFile  successfull.');
    }
}

function appendFileCallback(err) {
    if(err){
        console.log('ERR: ', err);
    }
    else{
        console.log('append  successfull.');
    }
}

function unlinkCallback(err) {
    if(err){
        if(err.code === 'EPERM'){
            fs.rmdir(name, rmdirCallback); 
        }
        else{
            console.log('ERR: ', err)
        }
    }
    else{
        console.log("unlink  successfull.")
    }
}

function rmdirCallback(err){
    if(err){
        console.log('ERR: ', err);
    }
    else{
        console.log('rmdir successfull')
    }
}

function copyFileCallback(err){
    if(err){
        console.log('ERR: ', err);
    }
    else{
        console.log('copyFile successfill')
    }
}

function readFileCallback(err,data){
    if(err){
        console.log('ERR: ', err);
    }
    else{
        console.log('readFile successfill\n');
        console.log('Data:',data)
        
    }
}



let messages ={
    copy: 'copyFile successfull',
    append: 'append  successfull.',
    create: 'writeFile  successfull.',
    read: 'readFile successfull'
}

function fsCallback(err){
    if(err){
        console.log('ERR: ', err);
    }
    else{
        console.log(messages[command])
    }
}


let commands = {
    create: function(){
        fs.writeFile(name, arg4, fsCallback);
    },
    append: function(){
        fs.appendFile(name, arg4, fsCallback); 
    },
    delete: function(){
        fs.unlink(name, unlinkCallback);
    },
    copy: function(){
        fs.copyFile(name, arg4, fsCallback);
    },
    read: function(){
        fs.readFile(name,{encoding: 'utf8'},readFileCallback)
    },
    createRecord: function(){
        let data={
            name: process.argv[3],
            family: process.argv[4],
            email: process.argv[5],
        }

        fs.readFile('database.json',{encoding: 'utf8'},function(err,fileData){
            if(err){
                console.log('err: ',err);
            }
            else{
            fileData=JSON.parse(fileData);
            fileData.records.push(data);
            fileData = JSON.stringify(fileData);
            fs.writeFile('database.json',fileData,fsCallback);
            }
        });
    },
    readRecord: function(){
        fs.readFile(name,{encoding: 'utf8'},readFileCallback)
    }
}

commands[command]();
