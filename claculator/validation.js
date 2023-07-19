$(document).ready(function(){
    $("#sign-form").validate({
        rules:{
                fname :{
                required:true,
                minlength:4,
            },
            

        }


    })

})