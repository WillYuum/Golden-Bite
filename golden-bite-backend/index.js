const express = require('express')
const app = express()


const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./goldenbites')


app.get("/read/products", function(req,res){


    let sql = "Select * from products";


    db.all(sql,[], (err,rows)=>{
        data = []
        if(err){throw err}
        rows.forEach(async (row)=>{
            await data.push(row)
            res.send({DATA:data})
        })
    })
})






app.listen(3000);