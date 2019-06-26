const express = require('express')
const app = express()


const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./goldenbites')


app.get("/read/products", function(req,res){

    let sql = "Select * from products";
    

    db.all(sql,[], (err,rows)=>{
        if(err){throw err}
        rows.forEach((row)=>{
            data = row
            res.send({Data: checkQuery(NAME,row)})
        })
    })

   
})




app.listen(3000);