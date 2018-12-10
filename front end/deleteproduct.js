var proddetail;
function deleteprod(pn){
    alert("check function");
    var updtprod = new Object();

        updtprod.product_name = $('#prodname').val();


       // console.log(user)
    //alert(useremail);

    //export {useremail};
    $.ajax({

        url: 'http://localhost:8001/deleteprod/'+pn,//updtprod.product_name,

            type: 'DELETE',

            //dataType: 'json',

            //data: updtprod,
            //headers: {
            ContentType: "application/json",

            success: function (data, textStatus, xhr) {

                console.log(data);
                alert("Product deleted successfully!!");
                window.location.href="http://127.0.0.1:8080/userpage.html";

            },

            error: function (xhr, textStatus, errorThrown) {

                console.log('Error in Operation');

            }


//            });

//        });

});



    

}
