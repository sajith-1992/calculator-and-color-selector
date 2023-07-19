$(document).ready(function(){
    $("#sign-form").validate({
        rules:{
                fname :{
                required:true,
                minlength:4,
                maxlength:9
            },
            email:{
                required:true,
                email:true


            },

            day:{
                required:true
            }

        }


    })

})