var proddetail;
function addnewproduct(){
    //alert("in function");
    var newprod = new Object();

        newprod.product_name = $('#prodname').val();

        newprod.product_desc = $('#proddesc').val();

        newprod.product_category = $('#prodcat').val();

        newprod.product_price = $('#prodprice').val();

        newprod.is_Active = 1;

        newprod.user_email = localStorage.getItem("useremailid");

       // console.log(user)
    //alert(useremail);

    //export {useremail};
    $.ajax({

        url: 'http://localhost:8001/addproducts',

            type: 'POST',

            //dataType: 'json',

            data: newprod,
            //headers: {
            ContentType: "application/json",

            success: function (data, textStatus, xhr) {

                console.log(data);
                alert("Product added successfully!!");
                window.location.href="http://127.0.0.1:8080/userpage.html";

            },

            error: function (xhr, textStatus, errorThrown) {

                console.log('Error in Operation');

            }


//            });

//        });

});



    

}
