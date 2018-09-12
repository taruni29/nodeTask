$(document).ready(function(){
    $flag=1;
      $("#firstName").focusout(function(){

        if($(this).val()==''){
            $(this).css("border-color", "#FF0000");
              $('#submit').attr('disabled',true);
               $("#error_name").text("* You have to enter your first name!");
          }
          else if($(this).val().length<3){
            $(this).css("border-color", "#FF0000");
              $('#submit').attr('disabled',true);
               $("#error_name").text("*You have to enter minimum 3 characters of your first name!");
          }
          else
          {
            $(this).css("border-color", "#2eb82e");
            $('#submit').attr('disabled',false);
            $("#error_name").text("");

          }
       });
        $("#lastName").focusout(function(){
        if($(this).val()==''){
            $(this).css("border-color", "#FF0000");
              $('#submit').attr('disabled',true);
              $("#error_lname").text("* You have to enter your Last name!");
          }
           else if($(this).val().length<3){

              $(this).css("border-color", "#FF0000");
               $('#submit').attr('disabled',true);
               $("#error_lname").text("*You have to enter minimum 3 characters of your last name!");
          }
          else
          {
            $(this).css("border-color", "#2eb82e");
            $('#submit').attr('disabled',false);
            $("#error_lname").text("");
          }
       });
       $("#phone").focusout(function(){
        if($(this).val()==''){
            $(this).css("border-color", "#FF0000");
              $('#submit').attr('disabled',true);
              $("#error_phone").text("* You have to enter your Last name!");
          }
           else if($(this).val().length<10){

              $(this).css("border-color", "#FF0000");
               $('#submit').attr('disabled',true);
               $("#error_phone").text("*You have to enter 10 digit phone number ");
          }
          else
          {
            $(this).css("border-color", "#2eb82e");
            $('#submit').attr('disabled',false);
            $("#error_phone").text("");
          }
       });
       
       
        $("#email").focusout(function(){
        var email =$("#email").val();
        var pattern = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/

        if($(this).val()==""){
              $(this).css("border-color", "#FF0000");
              $('#submit').attr('disabled',true);
              $("#error_email").text("* You have to enter your email!");
          }
          else if(!pattern.test(email))
          {  
              $(this).css("border-color", "#FF0000");
              $('#submit').attr('disabled',true);
              $("#error_email").text("* Please enter valid email");
          }
          else
          {
            console.log("success");
            $(this).css({"border-color":"#2eb82e"});
            $('#submit').attr('disabled',false);
            $("#error_email").text("");

          }
          });
          $("#userName").focusout(function(){
            if($(this).val()==''){
                $(this).css("border-color", "#FF0000");
                  $('#submit').attr('disabled',true);
                  $("#error_username").text("* You have to enter your Last name!");
              }
               else if($(this).val().length<3){
    
                  $(this).css("border-color", "#FF0000");
                   $('#submit').attr('disabled',true);
                   $("#error_username").text("*You have to enter minimum 3 characters of your last name!");
              }
              else
              {
                $(this).css("border-color", "#2eb82e");
                $('#submit').attr('disabled',false);
                $("#error_username").text("");
              }
           });
           
        $("#password").focusout(function(){
            var pass =$("#password").val();
            var strength=0;
            if (pass.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/))  strength += 1
 
            if (pass.match(/([a-zA-Z])/) && pass.match(/([0-9])/))  strength += 1 
  
            if (pass.match(/([!,%,&,@,#,$,^,*,?,_,~])/))  strength += 1
  
            if (pass.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1
            
        if(pass==''){
           //console.log("test" + strength)
            $(this).css("border-color","#FF0000");
              $('#submit').attr('disabled',true);
              $("#error_password").text("* You have to enter your password !");
          }
          else if($("#password").val().length < 8)
          {
            $(this).css("border-color","#FF0000");
              $('#submit').attr('disabled',true);
              $("#error_password").text("*You have to enter minimum 8 characters of your password !");
          }
          else if (strength < 1 )
          {
             $(this).css("border-color","#FF0000");
             $('#submit').attr('disabled',true);
             $("#error_password").text("*your password is weak!please use letters,special symbols and numbers");   
          }
          else
          {  
                  $(this).css({"border-color":"#2eb82e"});
                  $('#submit').attr('disabled',false);
                  $("#error_password").text("");  
          }
            });  
             $("#cpassword").focusout(function(){
             cpass =$("#cpassword").val();
             pass =$("#password").val();
             if(cpass==''){
              $(this).css("border-color","#FF0000");
              $('#submit').attr('disabled',true);
              $("#error_cpassword").text("* You have to re-enter your password !");
          }
           else if(cpass.length < 8)
          {
            console.log(cpass);
            $(this).css("border-color","#FF0000");
              $('#submit').attr('disabled',true);
              $("#error_cpassword").text("*You have to enter minimum 8 characters of your password !");
          }
          else if(pass!=cpass)
          {
              console.log(pass);
              $(this).css("border-color","#FF0000");
              $('#submit').attr('disabled',true);
              $("#error_cpassword").text("* Password mismatched !");
          }
          else{
            $(this).css({"border-color":"#2eb82e"});
            $('#submit').attr('disabled',false);
            $("#error_cpassword").text("");
          }

      });

      $("#submit").click(function() {
        var passedValidation = true;
        if ($("#firstName").val() == '') {
            $("#firstName").css("border-color", "#FF0000");
            $("#error_name").text("* You have to enter your first name!");
            passedValidation = false;
        }
        else if($("#firstName").val().length<3){
            $("#firstName").css("border-color", "#FF0000");
            $("#error_name").text("*You have to enter minimum 3 characters of your first name!");
            passedValidation = false;
         }
         else
         {
            passedValidation = true;      
         }
        if ($("#lastName").val() == '') {
            $("#lastName").css("border-color", "#FF0000");
            
            $("#error_lname").text("* You have to enter your Last name!");
            passedValidation = false;
        }
        else if($("#lastName").val().length<3){
            $("#lname").css("border-color", "#FF0000");
             
               $("#error_lname").text("*You have to enter minimum 3 characters of your last name!");
               passedValidation = false;
        }
        else
       {
          passedValidation = true;      
       }
        if ($("#phone").val() == '') {
            $("#phone").css("border-color", "#FF0000");
           
            $("#error_phone").text("* You have to enter your phone number!");
            passedValidation = false;
        }
        var email =$("#email").val();
        var pattern = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
        if ($("#email").val() == '') {
            $("#email").css("border-color", "#FF0000");
           
            $("#error_email").text("* You have to enter your email!");
            passedValidation = false;
        }
        else if(!pattern.test(email))
        {  
            $("#email").css("border-color", "#FF0000");
           
            $("#error_email").text("* Please enter valid email");
            passedValidation = false;
        }
        else
        {
            passedValidation = true;      
        }
        var strength=0;
        pass =$("#password").val()
        if (pass.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/))  strength += 1

        if (pass.match(/([a-zA-Z])/) && pass.match(/([0-9])/))  strength += 1 

        if (pass.match(/([!,%,&,@,#,$,^,*,?,_,~])/))  strength += 1

        if (pass.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1
        if ($("#password").val() == '') {
            $("#password").css("border-color", "#FF0000");
            
            $("#error_password").text("* You have to enter your password!");
            passedValidation = false;
        }
        else if($("#password").val().length < 8)
        {
              $("#password").css("border-color", "#FF0000");
             
              $("#error_password").text("*You have to enter minimum 8 characters of your password !");
              passedValidation = false;
       }
       else if (strength < 1 )
       {
             $("#password").css("border-color", "#FF0000");
            
             $("#error_password").text("*your password is weak!please use letters,special symbols and numbers"); 
             passedValidation = false;
       }
       else
       {
           passedValidation = true;
       }
      if ($("#cpassword").val() == '') {
          $("#cpassword").css("border-color", "#FF0000");
        
          $("#error_cpassword").text("* You have to re-enter your password!");
          passedValidation = false;
      }
      else if($("#password").val()!=$("#cpassword").val())
      {
          $("#cpassword").css("border-color", "#FF0000");
         
          $("#error_cpassword").text("* Password mismatched !");
          passedValidation = false;
      }
      else
      {
         passedValidation = true;
      }

        return passedValidation;
    });
  });
