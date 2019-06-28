const express = require('express')
const app = express()



const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./')


app.get("/products/read", function(req,res){

    let sql = "Select * from Products";

    db.all(sql,[], (err,rows)=>{
        data = []
        if(err){throw err}
        rows.forEach(async (row)=>{
            await data.push(row)
            res.send({DATA:data})
        })
    })
})


app.get("/products/delete/:id?" ,function(req,res){
        ID = req.params.id
        console.log(ID)
        
        db.run(`DELETE FROM products WHERE products_id=${ID}`, function(err){
            if(err){
                console.log(err);
            }else{
                console.log(`Product ${ID} got deleted!`)
            }
        })
    })

    app.get("/products/edit/:id?", function(req,res){

        const ID = req.params.id

        const PRODUCTS_ID = req.query.name 
        const PRODUCTS_PRICE = req.query.price
        
        db.run(`UPDATE products SET prodcuts_name = ?,
                products_price = ?
                WHERE products_id= ? `,
                
                [checkQuery(PRODUCTS_ID), checkQuery(PRODUCTS_PRICE), ID] ,function(err){
            if(err){
                console.log(err)
            }else{
                console.log(`edited product ${ID}`)
            }
        })

    })

    function checkQuery(query){
        if(query === !undefined){
            console.log("query isn't mawjoode")
        }else{
            return query
        }
    }
 

app.listen(3000);