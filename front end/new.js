function  validatesignup() {
    alert("in function");
    var signup_utype= document.getElementById("usertype");
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
    {
        alert("User Added Successfully !!");
        var usrschm = userschem.usr;
        var user1 = usrschm.build({
            user_type: userDetails.user_type,
            user_name: userDetails.user_name,
            user_pass: userDetails.user_pass,
            user_email: userDetails.user_email
        });
            //console.log(user1);
        user1.save().then(function (exec) {
            alert('in save');
            if (exec) {
                alert('Data successfully inserted');
                return reply('Data successfully inserted');
            }
            else {
                alert('Error in Inserting Record');
            }
        });
        window.location.href="/media/aniket/2B508CB150AFD7C5/IAURO/E-commerce Assignment/front end/login.html";
        //return true;
    }
    

}