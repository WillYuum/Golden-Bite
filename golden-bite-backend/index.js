const express = require("express");
const app = express();

const sqlite3 = require("sqlite3").verbose();
let db = new sqlite3.Database("./goldenBites-db");

app.get("/products/read", function(req, res) {
  let sql =
    "Select * from Products JOIN Categories ON Products.category_id = Categories.categories_id";

  db.all(sql, [], (err, rows) => {
    data = [];
    if (err) {
      throw err;
    }
    rows.forEach(async row => {
      await data.push(row);
      res.send({ DATA: data });
    });
  });
});

app.get("/products/edit/:id?", function(req, res) {
  const ID = req.params.id;

  const PRODUCTS_NAME = req.query.name;
  const PRODUCTS_PRICE = req.query.price;
  const PRODUCTS_STOCK = req.query.stock;
  const PRODUCTS_DESCRIPTION = req.query.description;
  const PRODUCTS_IMAGE = req.query.image;
  const PRODUCTS_BESTSELLER = req.query.bestseller;
  const PRODUCTS_CATEGORY_ID = req.query.category;

  db.run(
    `UPDATE Products 
                SET products_name = coalesce(?,products_name),
                products_price = coalesce(?,products_price),
                products_stock = coalesce(?,products_stock),
                products_description = coalesce(?,products_description),
                products_image = coalesce(?,products_image),
                products_bestseller = coalesce(?,products_bestseller),
                category_id = coalesce(?,category_id)

                WHERE products_id= ${ID}`,

    [
      PRODUCTS_NAME,
      PRODUCTS_PRICE,
      PRODUCTS_STOCK,
      PRODUCTS_DESCRIPTION,
      PRODUCTS_IMAGE,
      PRODUCTS_BESTSELLER,
      PRODUCTS_CATEGORY_ID
    ],
    function(err, data) {
      if (err) {
        console.log(err);
      } else {
        res.send({ data });
      }
    }
  );
});
app.get("/products/create?", function(req, res) {
  const PRODUCTS_NAME = req.query.name;
  const PRODUCTS_PRICE = req.query.price;
  const PRODUCTS_STOCK = req.query.stock;
  const PRODUCTS_DESCRIPTION = req.query.description;
  const PRODUCTS_IMAGE = req.query.image;
  const PRODUCTS_BESTSELLER = req.query.bestseller;
  const PRODUCTS_CATEGORY_ID = req.query.category;

  db.all(
    `INSERT INTO Products
       (products_name, products_price, products_stock, products_description, products_image, products_bestseller, category_id)
        VALUES (?,?,?,?,?,?,?)`,
    [
      PRODUCTS_NAME,
      PRODUCTS_PRICE,
      PRODUCTS_STOCK,
      PRODUCTS_DESCRIPTION,
      PRODUCTS_IMAGE,
      PRODUCTS_BESTSELLER,
      PRODUCTS_CATEGORY_ID
    ],
    function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log("data added");
      }
    }
  );
});
// app.get("/products/create?", function(req, res) {
//   const PRODUCTS_NAME = req.query.name;
//   const PRODUCTS_PRICE = req.query.price;
//   const PRODUCTS_STOCK = req.query.stock;
//   const PRODUCTS_DESCRIPTION = req.query.description;
//   const PRODUCTS_IMAGE = req.query.image;
//   const PRODUCTS_BESTSELLER = req.query.bestseller;
//   const PRODUCTS_CATEGORY_ID = req.query.category;

//   db.all(`INSERT INTO Products
//     (products_name, products_price, products_stock, products_description, products_image, products_bestseller, category_id)
//     VALUES (?,?,?,?,?,?,?)`),
//     [
//       PRODUCTS_NAME,
//       PRODUCTS_PRICE,
//       PRODUCTS_STOCK,
//       PRODUCTS_DESCRIPTION,
//       PRODUCTS_IMAGE,
//       PRODUCTS_BESTSELLER,
//       PRODUCTS_CATEGORY_ID
//     ],
//     function(err, data) {
//       if (err) {
//         console.log(data);
//         console.log(err);
//       } else {
//         res.send(data);
//       }
//     };
// });

app.get("/products/delete/:id?", function(req, res) {
  ID = req.params.id;
  console.log(ID);

  db.run(`DELETE FROM Products WHERE products_id=${ID}`, function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log(`Product ${ID} got deleted!`);
    }
  });
});

app.listen(3000);
