import $ from 'jquery'; 
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>

$(document).ready(function(){
    $("#gotoregister").click(function(){
        $("#login").fadeOut("fast",function(){
            $("#register").fadeIn("fast");
            $("#register").css("display","block");
            $("#login").css("display","none");
          });
    
      
    });
    $("#gotologin").click(function(){
        $("#register").fadeOut("fast",function(){
            $("#login").fadeIn("fast");
            $("#login").css("display","block");
            $("#register").css("display","none");
          });

      
    });
});
