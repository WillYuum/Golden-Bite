const express = require("express");
const app = express();

const cors = require('cors');


const sqlite3 = require("sqlite3").verbose();
let db = new sqlite3.Database("./goldenBites-db");

app.use(cors())

//--------------------------------------PRODUCTS-------------------------------------------------------------------------
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

//--------------------------------------------------------------------------------------------------------------------------------------------------

//-----------------------------------------------------CATEGORIES-----------------------------------------------------------------------------------

app.get("/category/read", function(req, res) {
  let sqlread = "Select * from Categories";

  db.all(sqlread, [], (err, rows) => {
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

app.get("/category/create?", function(req, res) {
  var name = req.query.name;
  let sqladd = `INSERT INTO Categories(categories_name) VALUES('${name}')`;
  if (
    `${name}` == undefined ||
    `${name}` == "" ||
    `${name}` == null ||
    typeof `'${name}'` !== "string"
  ) {
    res.send({ message: typeof `${name}` });
  } else {
    db.all(sqladd, [], (err, rows) => {
      data = [];
      if (err) {
        throw err;
      }
      rows.forEach(async row => {
        await data.push(row);
        res.send({ Message: "Category Added!" }); //question
      });
    });
  }
});

app.get("/category/delete/:id?", function(req, res) {
  var id = req.params.id;
  let sqldelete = `DELETE FROM Categories where categories_id=${id}`;
  if (`${id}` == undefined || `${id}` == "" || `${id}` == null) {
    res.send({ message: "error" });
  } else {
    db.all(sqldelete, [], (err, rows) => {
      data = [];
      if (err) {
        throw err;
      }
      rows.forEach(async row => {
        await data.push(row);
        res.send({ Message: "Category deleted" }); //question
      });
    });
  }
});

//-------------------------------------------------------------------------------------------------------------------------

//-------------------------------------------------TESTIMONIALS------------------------------------------------------------

app.get("/testimonials/read", function(req, res) {
  let sql = "Select * from Testimonials";

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

app.get("/testimonials/edit/:id?", function(req, res) {
  const ID = req.params.id;

  const TESTIMONIALS_NAME = req.query.name;
  const TESTIMONIALS_CONTENT = req.query.content;
  const TESTIMONIALS_DATE = req.query.date;
  const TESTIMONIALS_POSITION = req.query.position;
  const TESTIMONIALS_COMPANY = req.query.company;
  const TESTIMONIALS_IMAGE = req.query.image;
  db.run(
    `UPDATE Testimonials 
                  SET testimonials_name = coalesce(?,testimonials_name),
                  testimonials_content = coalesce(?,testimonials_content),
                  testimonials_date = coalesce(?,testimonials_date),
                  testimonials_position = coalesce(?,testimonials_position),
                  testimonials_company = coalesce(?,testimonials_company),
                  testimonials_image = coalesce(?,testimonials_image)
  
                  WHERE testimonials_id= ${ID}`,

    [
      TESTIMONIALS_NAME,
      TESTIMONIALS_CONTENT,
      TESTIMONIALS_DATE,
      TESTIMONIALS_POSITION,
      TESTIMONIALS_COMPANY,
      TESTIMONIALS_IMAGE
    ],
    function(err, data) {
      if (err) {
        console.log(err);
      } else {
        res.send("DATA EDITED");
      }
    }
  );
});

app.get("/testimonials/create?", function(req, res) {
  const TESTIMONIALS_NAME = req.query.name;
  const TESTIMONIALS_CONTENT = req.query.content;
  const TESTIMONIALS_DATE = req.query.date;
  const TESTIMONIALS_POSITION = req.query.position;
  const TESTIMONIALS_COMPANY = req.query.company;
  const TESTIMONIALS_IMAGE = req.query.image;

  db.all(
    `INSERT INTO Testimonials
         (testimonials_name, testimonials_content, testimonials_date, testimonials_position, testimonials_company, testimonials_image)
          VALUES (?,?,?,?,?,?)`,
    [
      TESTIMONIALS_NAME,
      TESTIMONIALS_CONTENT,
      TESTIMONIALS_DATE,
      TESTIMONIALS_POSITION,
      TESTIMONIALS_COMPANY,
      TESTIMONIALS_IMAGE
    ],
    function(err) {
      if (err) {
        console.log(err);
      } else {
        res.send("DATA IS ADDED");
      }
    }
  );
});

app.get("/testimonials/delete/:id?", function(req, res) {
  const ID = req.params.id;

  db.run(`DELETE FROM Testimonials WHERE testimonials_id=${ID}`, function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log(`Product ${ID} got deleted!`);
    }
  });
});
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------ORDERS--------------------------------------------------------------------------------------------

app.get("/orders/read", function(req, res) {
  let sql = "Select * from Orders";

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

app.get("/orders/edit/:id?", function(req, res) {
  const ID = req.params.id;

 const ORDERS_NAME = req.query.name;
 const ORDERS_ADDRESS = req.query.address;
 const ORDERS_PHONE_NUMBER = req.query.phone_number;
 const ORDERS_EMAIL= req.query.email;

  db.run(
    `UPDATE Orders 
                  SET name = coalesce(?,name),
                  address = coalesce(?, address),
                  phone_numbe = coalesce(?,phone_numbe),
                  email = coalesce(?,email)
  
                  WHERE orders_id= ${ID}`,

    [
      ORDERS_NAME,
      ORDERS_ADDRESS,
      ORDERS_PHONE_NUMBER,
      ORDERS_EMAIL
    ],
    function(err, data) {
      if (err) {
        console.log(err);
      } else {
        res.send("DATA EDITED");
      }
    }
  );
});

app.get("/orders/create?", function(req, res) {

  const ORDERS_NAME = req.query.name;
 const ORDERS_ADDRESS = req.query.address;
 const ORDERS_PHONE_NUMBER = req.query.phone_number;
 const ORDERS_EMAIL= req.query.email;

  db.all(
    `INSERT INTO Orders
         (name,address,phone_numbe,email)
          VALUES (?,?,?,?)`,
    [
      ORDERS_NAME,
      ORDERS_ADDRESS,
      ORDERS_PHONE_NUMBER,
      ORDERS_EMAIL
    ],
    function(err) {
      if (err) {
        console.log(err);
      } else {
        res.send("DATA IS ADDED");
      }
    }
  );
});

app.get("/orders/delete/:id?", function(req, res) {
  const ID = req.params.id;

  db.run(`DELETE FROM Orders WHERE orders_id=${ID}`, function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log(`Product ${ID} got deleted!`);
    }
  });
});
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------

//------------------------------------------------------------ORDERS_PRODUCTS------------------------------------------------------------
app.get("/orders_products/read", function(req, res) {
  let sql = "Select * from orders_products";

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

app.listen(3001);
