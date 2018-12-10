import { resolvePtr } from "dns";

const prodschem= require('../schema/prodschema');
const userschem= require('../schema/userschema');
//cd ro const signupform= require('../frontend/signupval');

var Joi=require('joi');

var userjoischema= {
  user_type: Joi.string().max(20).required(),
  user_name: Joi.string().max(30).required(),
  user_pass: Joi.string().max(20).required(),
  user_email: Joi.string().max(200).required()
}



exports.register = function (server, options, next) {

    /*server.ext('onPreResponse', (request, reply) => {
      reply('2');
    });*/

    server.route({
        method: 'POST',
        path: '/addusers',
        handler: function (request, reply) {
        var userDetails = JSON.parse(JSON.stringify(request.payload));
        
        //Joi.assert(aduser, userjoischema);
        console.log(userDetails);
        //console.log(userschem.usr);
        var usrschm=userschem.usr;
        var user1 = usrschm.build({
          user_type: userDetails.user_type,
          user_name: userDetails.user_name,
          user_pass: userDetails.user_pass,
          user_email: userDetails.user_email
        });
  
        
        //console.log(user1);
        user1.save().then(function (exec) {
          console.log('in save');
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
              payload:
                Joi.object({
                  user_type: Joi.string().max(20),
                  user_name: Joi.string().max(30),
                  user_pass: Joi.string().max(20),
                  user_email: Joi.string().max(200)
                }).required().min(1)
                
          }
      }
      });

    server.route({
        method: 'GET',
        path: '/getusers',
        handler: function (request, reply) {
            //var book_detail={book_id: request.payload.book_id, book_name: request.payload.book_name, book_price: request.payload.book_price};
            //console.log(book_detail);
        //var bookDetails = JSON.parse(request.payload);
        userschem.usr.findAll({ where:{user_type: "vendor"} }).then(allusers => {
            console.log(allusers);
            return reply(allusers);
        });
        }
      });


    server.route({
        method: 'GET',
        path: '/getpassword/{user_email},{user_pass}',
        handler: function (request, reply) {
            
            userschem.usr.findAll({
            where:{
                user_email: request.params.user_email
        },
          attributes: ['user_pass'],  
      }).then(upass => {
            
            if (upass[0].user_pass==request.params.user_pass){
              return reply("True");
            }
            else{
              return reply("False");
            }
            
        });
        } 
    
      });


    server.route({
        method: 'PUT',
        path: '/updateuser/{user_email},{user_name},{user_pass}',
          handler: function (request, reply) {

          //var utype=request.params.user_type;
          var umail=request.params.user_email;
          var uname=request.params.user_name;
          var upass=request.params.user_pass;

          //Joi.assert(upuser, userjoischema);
          console.log(umail,uname,upass); 
          userschem.usr.update( { user_name: uname, user_pass: upass }, 
            { where: {user_email: umail} }
            ).then(() => {
              console.log("updated successfully a customer with email id = " + umail)
            return reply("updated successfully a customer with email id = " + umail);
          });
          },
          config: {
            validate: {
                params: {
                    user_email: Joi.string().max(200),
                    user_name: Joi.string().max(30),
                    user_pass: Joi.string().max(20)
                }
            }
        }
    });
    
    server.route({
        method: 'DELETE',
        path: '/deleteuser/{uemail}',
        handler: function (request, reply) {
          var uemail= request.params.uemail;
  
  
          userschem.usr.destroy({
            where: { user_email: uemail }
          }).then(() => {
            console.log('deleted successfully a customer with email id = ' + uemail);
            return reply('deleted successfully a customer with email id = ' + uemail);
          });
        },
        config: {
          validate: {
              params: {
                  uemail: Joi.string().max(200).required()
              }
          }
      }
      });

      next();
    }
  exports.register.attributes = {
    name: 'routes-users'
  };



/*'use strict';

const uuidv1 = require('uuid/v1');

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'a',
  database : 'ecommerce'
});

exports.register = function(server, options, next) {

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

    return next();
};

exports.register.attributes = {  
    name: 'routes-books'
  };

*/
