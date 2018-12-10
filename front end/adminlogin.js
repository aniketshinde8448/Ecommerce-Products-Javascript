var proddetail;
function adminpage(){
    //alert("in function");
    var adminemail=document.getElementById("adminemail").value;
    var adminpass=document.getElementById("password").value;
    //alert(useremail);

    //export {useremail};
    $.ajax({

        url: 'http://localhost:8001/getpassword/'+adminemail+','+adminpass,

        type: 'GET',

        //dataType: 'text',

        //data: { user_email: useremail},
        //headers: {
        //ContentType: "application/json",

        success: function (pdata, textStatus, xhr) {

            console.log(pdata);
            if (pdata == "True"){
                
                localStorage.setItem("useremailid", adminemail);
                window.location.href="http://127.0.0.1:8080/adminpage.html";


            }
            else{
                alert("Please enter correct password");
                //window.location.href="/media/aniket/2B508CB150AFD7C5/IAURO/E-commerce Assignment/front end/login.html";
            }
            //console.log(pdata);
            //alert("user added successfully!!");
            //window.location.href="/media/aniket/2B508CB150AFD7C5/IAURO/E-commerce Assignment/front end/userpage.html";

        },

        error: function (xhr, textStatus, errorThrown) {

            console.log('Error in Operation');

        }

//            });

//        });

});



    

}
