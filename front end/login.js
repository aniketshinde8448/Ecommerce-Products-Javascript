var proddetail;
function userpage(){
    //alert("in function");
    var useremail=document.getElementById("useremail").value;
    var userpass=document.getElementById("password").value;
    //alert(useremail);

    document.cookie= "useremail="+useremail;
    //alert(document.cookie);

    //export {useremail};
    $.ajax({

        url: 'http://localhost:8001/getpassword/'+useremail+','+userpass,

        type: 'GET',

        //dataType: 'text',

        //data: { user_email: useremail},
        //headers: {
        //ContentType: "application/json",

        success: function (pdata, textStatus, xhr) {

            console.log(pdata);
            if (pdata == "True"){
                //alert(pdata);
                localStorage.setItem("useremailid", useremail);

                window.location.href="http://127.0.0.1:8080/userpage.html";

            

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


});



    

}
