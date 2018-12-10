var proddetail;
function userpage(){
    //alert("in function");
    var useremail=document.getElementById("useremail").value;
    var userpass=document.getElementById("password").value;
    
    document.cookie= "useremail="+useremail;
    alert(document.cookie);
    //document.cookie= "login=True";
    window.location.href="http://127.0.0.1:8080/testuserpage.html";
    

}
