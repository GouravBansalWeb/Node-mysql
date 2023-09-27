const express= require("express");
const con = require("./config");
const app= express();
app.use(express.json())

app.get("/", (req, resp)=>{
    con.query("select * from users",(err, result)=>{
        if(err)
        {
            resp.send("error")
        }
        else
        {
            resp.send(result)
        }
    } )
});

app.post("/Signup",(req,resp)=>{
    const data= req.body;
    con.query('INSERT INTO users SET ?', data, (error,result,fields)=>{
        if(error) throw error;
        resp.send(result)
    })
});

app.put("/:id",(req,resp)=>{
    const data = [req.body.name, req.body.password, req.body.user_role, req.params.id];
    con.query("UPDATE users set name=?, password=?, user_role=? where id = ?",data,(error, result, fields)=>{
        if(error) throw error;
        resp.send(result)
    })
});

app.delete("/:id",(req, resp)=>{
    con.query("DELETE FROM users WHERE id ="+ req.params.id,(error,result)=>{
        if (error) throw error;
        resp.send(result)
    })
});


app.listen(5000)