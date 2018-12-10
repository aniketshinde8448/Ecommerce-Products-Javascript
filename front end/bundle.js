(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var proddetail;
var proddd= require('./userpage');

function updtproduct(){

    document.getElementById("oldprod").innerHTML=proddd.prodd;
    //alert("in function");
    var updtprod = new Object();

        updtprod.product_name = $('#prodname').val();

        updtprod.product_desc = $('#proddesc').val();

        updtprod.product_category = $('#prodcat').val();

        updtprod.product_price = $('#prodprice').val();

        updtprod.is_Active = 1;

        updtprod.user_email = localStorage.getItem("useremailid");

       // console.log(user)
    //alert(useremail);

    //export {useremail};
    $.ajax({

        url: 'http://localhost:8001/updateprod/'+updtprod.product_name+','+updtprod.product_desc+','+updtprod.product_category+','+updtprod.product_price+','+updtprod.is_Active+','+updtprod.user_email,

            type: 'PUT',

            //dataType: 'json',

            //data: updtprod,
            //headers: {
            ContentType: "application/json",

            success: function (data, textStatus, xhr) {

                console.log(data);
                alert("Product updated successfully!!");
                window.location.href="http://127.0.0.1:8080/userpage.html";

            },

            error: function (xhr, textStatus, errorThrown) {

                console.log('Error in Operation');

            }


//            });

//        });

});



    

}

},{"./userpage":2}],2:[function(require,module,exports){
function dynamicElem(arr){
    
}
},{}]},{},[1]);
