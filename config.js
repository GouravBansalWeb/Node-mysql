var mysql= require("mysql")

const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'e-comm'
});

db.connect((err)=>{
if(err)
{
    console.warn("error in connection")
}

});
module.exports=db;