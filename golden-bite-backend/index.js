const express = require('express');
const app = express();

const cors = require('cors');

const bodyParser = require('body-parser');

const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./goldenBites-db');

app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization'
  );
  next();
});

//--------------------------------------PRODUCTS-------------------------------------------------------------------------
app.get('/products/read', function(req, res) {
  let sql = `Select * from Products JOIN Categories ON Products.category_id = Categories.categories_id`;

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

app.patch('/products/edit/:id?', function(req, res) {
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

app.post('/products/create?', function(req, res) {
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
        console.log('data added');
      }
    }
  );
});

app.delete('/products/delete/:id?', function(req, res) {
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

app.get('/category/read', function(req, res) {
  let sqlread = 'Select * from Categories';

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

app.post('/category/create?', function(req, res) {
  var name = req.query.name;
  let sqladd = `INSERT INTO Categories(categories_name) VALUES('${name}')`;
  if (
    `${name}` == undefined ||
    `${name}` == '' ||
    `${name}` == null ||
    typeof `'${name}'` !== 'string'
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
        res.send({ Message: 'Category Added!' }); //question
      });
    });
  }
});

app.delete('/category/delete/:id?', function(req, res) {
  var id = req.params.id;
  let sqldelete = `DELETE FROM Categories where categories_id=${id}`;
  if (`${id}` == undefined || `${id}` == '' || `${id}` == null) {
    res.send({ message: 'error' });
  } else {
    db.all(sqldelete, [], (err, rows) => {
      data = [];
      if (err) {
        throw err;
      }
      rows.forEach(async row => {
        await data.push(row);
        res.send({ Message: 'Category deleted' }); //question
      });
    });
  }
});

app.patch('/category/edit/:id?', function(req, res) {
  var id = parseInt(req.params.id);
  var cname = req.query.cname;

  db.run(
    `UPDATE Categories 
          SET categories_name = coalesce(?,categories_name)
          WHERE categories_id= ? `,

    [cname, id],
    function(err) {
      if (`${cname}` == undefined || `${cname}` == '' || `'${cname}'` == null) {
        res.send({ message: 'error' });
      } else {
        res.send(' category edited');
      }
    }
  );
});

//-------------------------------------------------------------------------------------------------------------------------

//-------------------------------------------------TESTIMONIALS------------------------------------------------------------

app.get('/testimonials/read', function(req, res) {
  let sql = 'Select * from Testimonials';

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

app.patch('/testimonials/edit/:id?', function(req, res) {
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
        res.send('DATA EDITED');
      }
    }
  );
});

app.post('/testimonials/create?', function(req, res) {
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
        res.send('DATA IS ADDED');
      }
    }
  );
});

app.delete('/testimonials/delete/:id?', function(req, res) {
  const ID = req.params.id;

  db.run(`DELETE FROM Testimonials WHERE testimonials_id=${ID}`, function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log(`Product ${ID} got deleted!`);
    }
  });
});

//----------------------------------------------Blogs---------------------------------------------------

//read blogs table
app.get('/blogs/read', function(req, res) {
  let sqlreadblog =
    'select Blogs.blogs_author, Blogs.blogs_content, Blogs.blogs_date, Blogs.blogs_id, Blogs.blogs_title, Blogs.images_link_id, Images_blogs.images_link from Blogs join Images_blogs on Blogs.images_link_id = Images_blogs.images_link_id';

  db.all(sqlreadblog, [], (err, rows) => {
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



//read last blog in blogs table
app.get('/blogs/readlast', function(req, res) {
  let sqlreadbloglast =
    'SELECT * FROM Blogs ORDER BY blogs_id DESC LIMIT 1';

  db.all(sqlreadbloglast, [], (err, rows) => {
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



//delete from blogs table
app.get('/blogs/delete/:id?', function(req, res) {
  var id = req.params.id;
  let sqldelete = `DELETE FROM Blogs where blogs_id=${id}`;

  db.all(sqldelete, [], (err, rows) => {
    data = [];
    if (`${id}` == undefined || `${id}` == '' || `${id}` == null) {
      throw err;
    }
    rows.forEach(async row => {
      await data.push(row);
      res.send({ Message: 'Blog deleted' }); //question
    });
  });
});

//edit blogs table

app.get('/blogs/edit/:id?', function(req, res) {
  var id = parseInt(req.params.id);
  var bcontent = req.query.bcontent;

  db.run(
    `UPDATE Blogs 
              SET blogs_content = coalesce(?,blogs_content)
              WHERE blogs_id= ? `,

    [bcontent, id],
    function(err) {
      if (
        `${bcontent}` == undefined ||
        `${bcontent}` == '' ||
        `'${bcontent}'` == null
      ) {
        res.send({ message: 'error' });
      } else {
        res.send(' blog edited');
      }
    }
  );
});

//update (add) for blogs table

app.get('/blogs/add?', function(req, res) {
  var btitle = req.query.btitle;
  var bdate = req.query.bdate;
  var bcontent = req.query.bcontent;
  // console.log(input)
  let sqladd = `INSERT into Blogs(blogs_title,blogs_date,blogs_content) Values('${btitle}','${bdate}','${bcontent}')`;

  db.all(sqladd, [], (err, rows) => {
    data = [];
    if (err) {
      throw err;
    }
    rows.forEach(async row => {
      await data.push(row);
      res.send({ Message: 'blog added' });
    });
  });
});

//-------------------------------------------images blogs----------------------------------------------

//read from images_blogs table
app.get('/images_blogs/read', function(req, res) {
  let sqlreadiblog = 'Select images_link,blogs_author,blogs_date,blogs_content from Images_blogs JOIN Blogs on Images_blogs.images_link_id=Blogs.images_link_id';

  db.all(sqlreadiblog, [], (err, rows) => {
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


//read from images_blogs table
app.get('/images_blogs/readlast', function(req, res) {
  let sqlreadiblog = 'SELECT * FROM Images_blogs ORDER BY blogs_id DESC LIMIT 1';

  db.all(sqlreadiblog, [], (err, rows) => {
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


//read from imagblogs_id
app.get('/images_blogs/read/:id', function(req, res) {
  let sqlreadiblog = `Select blogs_author,blogs_date,blogs_content,images_link from Blogs join Images_blogs on Blogs.images_link_id=Images_blogs.images_link_id where Blogs.images_link_id=${req.params.id}`;

  db.all(sqlreadiblog, [], (err, rows) => {
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



//read from imagblogs_id_nameofimage
app.get('/images_blogs_imagename/read/:idname', function(req, res) {
  let sqlreadiblog = `Select images_link from Images_blogs where images_link_id=${req.params.idname}`;

  db.all(sqlreadiblog, [], (err, rows) => {
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



//delete from images_blogs table
app.get('/images_blogs/delete/:id?', function(req, res) {
  var id = req.params.id;
  let sqldelete = `DELETE FROM Images_blogs where images_id=${id}`;

  db.all(sqldelete, [], (err, rows) => {
    data = [];
    if (`${id}` == undefined || `${id}` == '' || `${id}` == null) {
      throw err;
    }
    rows.forEach(async row => {
      await data.push(row);
      res.send({ Message: 'Blog deleted' }); //question
    });
  });
});

//update (add) for images_blogs table

app.get('/images_blogs/add?', function(req, res) {
  var ilink = req.query.ilink;
  var bid = req.query.bid;
  // console.log(input)
  let sqladd = `INSERT into Images_blogs(blogs_id,images_link) Values('${bid}','${ilink}')`;

  db.all(sqladd, [], (err, rows) => {
    data = [];
    if (err) {
      throw err;
    }
    rows.forEach(async row => {
      await data.push(row);
      res.send({ Message: 'image added' });
    });
  });
});

//edit images_blogs table

app.get('/images_blogs/edit/:id?', function(req, res) {
  var id = parseInt(req.params.id);
  var ilink = req.query.ilink;

  db.run(
    `UPDATE Iamges_blogs 
              SET images_link = coalesce(?,images_link)
              WHERE blogs_id= ? `,

    [ilink, id],
    function(err) {
      if (`${ilink}` == undefined || `${ilink}` == '' || `'${ilink}'` == null) {
        res.send({ message: 'error' });
      } else {
        res.send(' image blog edited');
      }
    }
  );
});

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------ORDERS--------------------------------------------------------------------------------------------

app.get('/orders/read', function(req, res) {
  let sql = 'Select * from Orders';

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

app.patch('/orders/edit/:id?', function(req, res) {
  const ID = req.params.id;

  const ORDERS_NAME = req.query.name;
  const ORDERS_ADDRESS = req.query.address;
  const ORDERS_PHONE_NUMBER = req.query.phone_number;
  const ORDERS_EMAIL = req.query.email;

  db.run(
    `UPDATE Orders 
                  SET name = coalesce(?,name),
                  address = coalesce(?, address),
                  phone_numbe = coalesce(?,phone_numbe),
                  email = coalesce(?,email)
  
                  WHERE orders_id= ${ID}`,

    [ORDERS_NAME, ORDERS_ADDRESS, ORDERS_PHONE_NUMBER, ORDERS_EMAIL],
    function(err, data) {
      if (err) {
        console.log(err);
      } else {
        res.send('DATA EDITED');
      }
    }
  );
});

// app.post('/orders/create?', function(req, res) {
//   const ORDERS_NAME = req.query.name;
//   const ORDERS_ADDRESS = req.query.address;
//   const ORDERS_PHONE_NUMBER = req.query.phone_number;
//   const ORDERS_EMAIL = req.query.email;

//   db.all(
//     `INSERT INTO Orders
//          (name,address,phone_numbe,email)
//           VALUES (?,?,?,?)`,
//     [ORDERS_NAME, ORDERS_ADDRESS, ORDERS_PHONE_NUMBER, ORDERS_EMAIL],
//     function(err) {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send('DATA IS ADDED');
//       }
//     }
//   );
// });
app.post('/orders/create', async function(req, res) {
  const ORDERS_NAME = req.body.name;
  const ORDERS_ADDRESS = req.body.address;
  const ORDERS_PHONE_NUMBER = req.body.phone;
  const ORDERS_EMAIL = req.body.email;
console.log(ORDERS_ADDRESS,ORDERS_NAME, ORDERS_EMAIL, ORDERS_PHONE_NUMBER)
 console.log("hellooo")
 await db.run(
    `INSERT INTO Orders
         (name,address,phone_numbe,email)
          VALUES (?,?,?,?)`,
    [ORDERS_NAME, ORDERS_ADDRESS, ORDERS_PHONE_NUMBER, ORDERS_EMAIL],
    function(rows, err) {
      if (err) {
        console.log("err",err);
      } else {
        res.json({id:this.lastID});
      }
    }
  );
});

app.delete('/orders/delete/:id?', function(req, res) {
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
app.get('/orders_products/read', function(req, res) {
  let sql = `Select * FROM ((Orders_products INNER JOIN Orders ON Orders_products.orders_id = Orders.orders_id)
                                          INNER JOIN Products ON Orders_products.orders_products_id = Products.products_id);`;

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

app.post('/orders_products/create?', function(req, res) {
 //const row = db.all(`Select * FROM Orders_products INNER JOIN Orders ON Orders_products.orders_id = Orders.orders_id`)

// const result2 = db.all(``)//insert into orders_product with orders id, quantity, .....
 const {orders_id} = req.query
  const PRODUCTS_ID = req.body.products_id;
  const quantity = req.body.quantity;

  console.log("ORDER ===>",req.body)

  db.all(
    `INSERT INTO Orders_products
         (orders_id, orders_products_id, quantity)
          VALUES (?,?,?)
           `,

     [orders_id, PRODUCTS_ID, quantity],
    function(err) {
      if (err) {
        console.log(err);
      } else {
        res.send('DATA IS ADDED');
      }
    }
  );
});

app.patch('/orders_products/edit/:id?', function(req, res) {
  const ID = req.params.id;

  const ORDERS_ID = req.query.orders_id;
  const PRODUCTS_ID = req.query.products_id;
  const quantity = req.query.products;

  db.run(
    `UPDATE Orders_products 
                  SET orders_id = coalesce(?,orders_id),
                  orders_products_id = coalesce(?, orders_products_id),
                  quantity = coalesce(?,quantity)
  
                  WHERE orders_id= ${ID}`,

    [ORDERS_ID, PRODUCTS_ID, quantity],
    function(err, data) {
      if (err) {
        console.log(err);
      } else {
        res.send('DATA EDITED');
      }
    }
  );
});

app.delete('/orders_products/delete/:id?', function(req, res) {
  const ID = req.params.id;

  db.run(`DELETE FROM Orders_products WHERE orders_id=${ID}`, function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log(`Product ${ID} got deleted!`);
    }
  });
});

app.listen(3001);
