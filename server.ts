'use strict';

const dbcon=require('./db_connection/dbconnection');
const pschema= require('./schema/prodschema');
const uschema= require('./schema/userschema');
const proute= require('./routing/products');
const uroute= require('./routing/users');

import Hapi from 'hapi';

// Create a server with a host and port
const server = new Hapi.Server({ port: 8001, host: 'localhost' });   //, load: { sampleInterval: 1000 }


console.log(server);



/*server.register([
    proute, uroute
    ], (err) => {

    if (err) {
        throw err;
    }

    // Start the server
    server.start((err) => {
        console.log('Server running at:', server.info.uri);
    });    

});

*/


/* 


server.register([{
                register:require('./test'),
                pluginOptions : {routes : {prefix: '/test'}}
                }/*, {
                register:require('./users')
                }], (err) => {
            if (err){
                throw err;
            }
            
        server.start((err) => {
       
        console.log('Server running at:', server.info.uri);
        });
    }
);
*/


// Add the route

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
        usertype=results[0].user_type;
        var emalid={vendor_email: emailid};
        if (usertype == "vendor"){
            
            var vendor_products=connection.query('SELECT product_name from products where?',emalid,function(error, venprod, fields){
                console.log(venprod);

                for (var i=0;i<venprod.length;i++){
                    console.log(venprod[i].product_name);
                }
            })       
    
        }
        else{
            var vendor_products=connection.query('SELECT product_name from products' ,function(error, venprod, fields){
                console.log(venprod);

                for (var i=0;i<venprod.length;i++){
                    console.log(venprod[i].product_name);
                }
            })       
            
        }
        //console.log(typeof(usertype));
    });




    return "YES";
    }
}); 
*/
/*
server.route({
    method: 'POST',
    path:'/addusers',
    handler: function (request, reply) {
        var user = request.payload;
        
    var id:string= uuidv1(); 
    console.log(id);
    var userdetail = {user_id: id, user_type: user.type, user_name : user.name,user_pass : user.pass, user_email : user.email};
    connection.connect();
 
    var query=connection.query('INSERT INTO users SET ?', userdetail, function (error, results, fields) {
        if (error) throw error;
        //console.log('The solution is: ', results[0]);
    }); 
    //console.log(query.sql);

    return "User added successfully !";
}
}); 
*/

/*
server.route({
    method: 'POST',
    path:'/addproducts',
    handler: function (request, reply) {
        var product = request.payload;
        
    var id:string= uuidv1(); 
    console.log(id);
    var post  = {product_id: id, product_name: product.name, product_desc : product.desc,product_category : product.categ, product_price : product.price, is_Active : product.isact, vendor_email : product.vemail};
    var qry:string = insertinto+'products(product_id,product_name,product_desc,product_category,product_price,is_Active,vendor_email) values('+id+','+product.name+','+product.desc+','+product.categ+','+product.price+','+product.isact+','+product.vemail+');';
    console.log(qry);
    connection.connect();
 
    var query=connection.query('INSERT INTO products SET ?', post, function (error, results, fields) {
        if (error) throw error;
        //console.log('The solution is: ', results[0]);
    }); 
    //console.log(query.sql);

    return "Product added successfully !";
}
}); */

/*server.route({
    method: 'GET',
    path:'/welcome/{num}',
    handler: function (request, reply) {
        var headers=request.params.num;
    return 'hello world' + headers;
}

}); */

