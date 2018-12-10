

function  validatesignup() {


/*var signup_utype= document.getElementById("usertype");
var signup_uname=document.forms["signupform"]["username"].value;  
if(signup_uname==null || signup_uname=="" )
{
    alert("user name can't be left blank");
    //return false;
}

var signup_pwd=document.forms["signupform"]["password"].value;
if(signup_pwd==null || signup_pwd=="")
{
    alert("password is mandatory");
    //return false;
}

var signup_uemail=document.forms["signupform"]["useremail"].value;
if(signup_uemail==null || signup_uemail=="")
{
    alert("user email id is mandatory");
    //return false;
}
else
{*/
alert("in function!!");
//$(document).ready(function () {

//        $("#submit").click(function () {

        var user = new Object();

        user.user_name = $('#username').val();

        user.user_pass = $('#password').val();

        user.user_email = $('#useremail').val();

        user.user_type = "vendor";
        console.log(user)


        $.ajax({

            url: 'http://localhost:8001/addusers',

            type: 'POST',

            //dataType: 'json',

            data: user,
            //headers: {
            ContentType: "application/json",

            success: function (data, textStatus, xhr) {

                console.log(data);
                alert("user added successfully!!");
                window.location.href="http://127.0.0.1:8080/login.html";

            },

            error: function (xhr, textStatus, errorThrown) {

                console.log('Error in Operation');

            }

//            });

//        });

});
    
    
    //return true;

}