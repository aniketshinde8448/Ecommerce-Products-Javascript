var proddetail;


function updtproduct(){

    var a= decodeURIComponent(window.location.search);
    var arv=a.substring(1);
    var p= JSON.parse(arv);
    console.log(p);
    //alert("in function");
    var updtprod = new Object();

        updtprod.uuid= p.uuid;

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

        url: 'http://localhost:8001/updateprod',

            type: 'PUT',

            //dataType: 'json',

            data: updtprod,
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
