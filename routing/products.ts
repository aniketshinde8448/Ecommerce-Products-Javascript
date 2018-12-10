const prodschema= require('../schema/prodschema');
const userschema= require('../schema/userschema');
var Joi=require('joi');

console.log(prodschema);
console.log(userschema);

/*var prodjoischema= {
    product_name: Joi.string().max(20).required(),
    product_desc: Joi.string().max(20).required(),
    product_category: Joi.string().max(20).required(),
    product_price: Joi.number().min(1).max(900000).required(),
    is_Active: Joi.number().min(0).max(1).required(),
    user_email: Joi.string().max(200).required()
};*/


exports.register = function (server, options, next) {

    /*server.ext('onPreResponse', (request, reply) => {
      reply('2');
    });*/

    server.route({
        method: 'POST',
        path: '/addproducts',
        handler: function (request, reply) {
            //var book_detail={book_id: request.payload.book_id, book_name: request.payload.book_name, book_price: request.payload.book_price};
            //console.log(book_detail);
        var productDetails = JSON.parse(JSON.stringify(request.payload));
        /*var adprod={
          product_name:productDetails.product_name,
          product_desc: productDetails.product_desc,
          product_category: productDetails.product_category,
          product_price: productDetails.product_price,
          is_Active: productDetails.is_Active,
          user_email: productDetails.user_email
        }*/

        //Joi.assert(adprod, prodjoischema);
        console.log(productDetails);
        console.log(prodschema.prod);
        var prodsch= prodschema.prod;
        var prod1 = prodsch.build({
          product_name:productDetails.product_name,
          product_desc: productDetails.product_desc,
          product_category: productDetails.product_category,
          product_price: productDetails.product_price,
          is_Active: productDetails.is_Active,
          user_email: productDetails.user_email
        });
  
        prod1.save().then(function (exec) {
          if (exec) {
            console.log('Data successfully inserted');
            return reply('Data successfully inserted');
          } else {
            console.log('Error in Inserting Record');
          }
         });
        },
        config: {
            validate: {
                payload: {
                    product_name: Joi.string().max(20),
                    product_desc: Joi.string().max(20),
                    product_category: Joi.string().max(20),
                    product_price: Joi.number().min(1).max(900000),
                    is_Active: Joi.number().min(0).max(1),
                    user_email: Joi.string().max(200)
                }
            }
        }
      });

    server.route({
        method: 'GET',
        path: '/getproducts',
        handler: function (request, reply) {
            //var book_detail={book_id: request.payload.book_id, book_name: request.payload.book_name, book_price: request.payload.book_price};
            //console.log(book_detail);
        //var bookDetails = JSON.parse(request.payload);
        /*var usertype;
        userschema.usr.findAll({
            where: {
          user_email: request.query.user_email //array
        },
          attributes: ['user_type'], //object
          }).then(function (list) {
            usertype=list;
        })

        if (usertype == "vendor"){
            prodschema.usch.usr.find({
                where:{
                    user_email: request.query.user_email
            }}).then(onebook => {
                console.log(onebook)
                return onebook;
             });
        }
        else{*/
        prodschema.prod.findAll({}).then(allprods => {
            console.log(allprods);
            return reply(allprods);
        });
        }
      });

      server.route({
        method: 'GET',
        path: '/getproduct/{user_email}',
        handler: function (request, reply) {
            //var book_detail={book_id: request.payload.book_id, book_name: request.payload.book_name, book_price: request.payload.book_price};
            //console.log(book_detail);
        //var bookDetails = JSON.parse(request.payload);
        /*var usertype;
        userschema.usr.findAll({
            where: {
          user_email: request.query.user_email //array
        },
          attributes: ['user_type'], //object
          }).then(function (list) {
            usertype=list;
        })

        if (usertype == "vendor"){*/
        prodschema.prod.findAll({
            where:{
                user_email: request.params.user_email
        }}).then(prodt => {
            console.log(prodt)
            return reply(prodt);
        });
        } 
    
      });


    server.route({
        method: 'PUT',
        path: '/updateprod',
          handler: function (request, reply) {

          var uproductDetails = JSON.parse(JSON.stringify(request.payload));
          var uid= uproductDetails.uuid;
          var pname=uproductDetails.product_name;
          var pdesc=uproductDetails.product_desc;
          var pcat=uproductDetails.product_category;
          var pprice=uproductDetails.product_price;
          var isact=uproductDetails.is_Active;

        
          //Joi.assert(upprod,prodjoischema);
          prodschema.prod.update( { product_name: pname, product_desc: pdesc, product_category: pcat, product_price: pprice, is_Active:isact }, 
            { where: {uuid: uid} }
            ).then(() => {
              console.log("updated successfully a customer with name = " + pname)
            return reply("updated successfully a customer with name = " + pname);
          });
          },
          config: {
            validate: {
                params: {
                    product_name: Joi.string().max(20),
                    product_desc: Joi.string().max(20),
                    product_category: Joi.string().max(20),
                    product_price: Joi.number().min(1).max(900000),
                    is_Active: Joi.number().min(0).max(1),
                    user_email: Joi.string().max(200)
                }
            }
        }
    });
    
    server.route({
        method: 'DELETE',
        path: '/deleteprod/{product_name}',
        handler: function (request, reply) {
          var pname= request.params.product_name;
  
  
          prodschema.prod.destroy({
            where: { product_name: pname }
          }).then(() => {
            console.log('deleted successfully a customer with name = ' + pname);
            return reply('deleted successfully a customer with name = ' + pname);
          });
        },
        config: {
            validate: {
                params: {
                    product_name: Joi.string().max(20)
                }
            }
        }
      });

      next();
    }
  exports.register.attributes = {
    name: 'routes-products'
  };


    /*server.route({
        method: 'GET',
        path: '/getproducts',
        handler: function (request, reply) {
            var emailid= request.query.emailid;
        var eid={user_email: emailid};
            connection.connect();
        var get_user_type=connection.query('SELECT user_type from users where?',eid, function (error, results,fields){
            if (error) throw error;
            console.log(results[0].user_type);
            var usertype=results[0].user_type;
            var emalid={vendor_email: emailid};
            if (usertype == "vendor"){
                
                var vendor_products=connection.query('SELECT product_name from products where?',emalid,function(error, venprod, fields){
                /*console.log(venprod);

                for (var i=0;i<venprod.length;i++){
                    console.log(venprod[i].product_name);
                }
                return venprod;
            })       
    
        }
        else{
            var vendor_products=connection.query('SELECT product_name from products' ,function(error, venprod, fields){
                /*console.log(venprod);

                for (var i=0;i<venprod.length;i++){
                    console.log(venprod[i].product_name);
                }
                return venprod;
            })       
            
        }
        //console.log(typeof(usertype));
    });

    return "YES";
    }
});

server.route({
    method: 'POST',
    path:'/addproducts',
    handler: function (request, reply) {
        var product = request.payload;
        
    var id:string= uuidv1(); 
    console.log(id);
    var post  = {product_id: id, product_name: product.name, product_desc : product.desc,product_category : product.categ, product_price : product.price, is_Active : product.isact, vendor_email : product.vemail};
    var qry:string = 'insert into products(product_id,product_name,product_desc,product_category,product_price,is_Active,vendor_email) values('+id+','+product.name+','+product.desc+','+product.categ+','+product.price+','+product.isact+','+product.vemail+');';
    console.log(qry);
    connection.connect();
 
    var query=connection.query('INSERT INTO products SET ?', post, function (error, results, fields) {
        if (error) throw error;
        //console.log('The solution is: ', results[0]);
    }); 
    //console.log(query.sql);

    return "Product added successfully !";
}
});

return next();
};

exports.register.attributes = {  
    name: 'routes-products'
  };
  */