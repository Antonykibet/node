const _ =require('lodash');
const fs = require('fs');
const path = require('path');
const {format} =require('date-fns');
//const {v4: uuid} = require('uuid');


//console.log(format(new Date(), 'dd mm yyy hh mm ss'));



const logEvents= async(message)=>{
    const dateTime =format(new Date(), 'dd mm yyy hh mm ss');
    try{
        fs.appendFile(path.join(__dirname,'eventLog.txt'), `${message} at ${dateTime}` ,(err)=>{
            if(err){
                console.log(err)
            }
            console.log("Succesfull");
        });
    }catch(err){
        console.log(err);
    }
}


module.exports = logEvents;