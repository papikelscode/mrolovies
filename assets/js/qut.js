$(function() {
    let $card = $(".post--card footer");
    let $reply = $(".post-reply");
    var val;
    let count = 0;
    let $data_count = $("[data-count]");
    let $data_post = $("[data-post]");
    let $reply_div = $("#reply-div");
    let $reply_box = $("#reply-box");
    var $reply_post = $("#post1");
    var $post_count = $reply_post.find("li").length;
    
    //check display count
    //on loaded script
    if ($("#post1")) {
       $data_count.text($post_count + " ");
    }
    
    // click reply
    $reply.on("click", function() {
      if ($reply_div.hasClass("hidden")) {
              $("#reply-div").removeClass("hidden");
        $("#reply-box").focus();
      } else {
        $("#reply-div").addClass("hidden");
      }
    });
  
    $reply_box.blur(function() {
      $("#reply-div").addClass("hidden");
      $("#reply-box").val("");
    });
  
    // keyboard keys
    $reply_box.on("keyup", function(e) {
      e.preventDefault();
      if (e.which === 13 && $(this).val() != "") {
        val = $(this).val();
        this.blur();
        doPost();
        $post_count = $reply_post.find("li").length;
        $data_count.text($post_count + " ");
        $post_count > 0 ? $data_count.attr('href','#') : null;
        console.log($post_count);
      }
      // escape key
      if (e.which === 27) {
        $("#reply-div").addClass("hidden");
        $("#reply-box").val("");
      }
    });
    
    // postting
    function doPost(){
      // clone post text
      var dt = new Date();
      var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      var time = 
          // days[dt.getDay()] + ' ' + months[dt.getMonth()] + ' ' + dt.getFullYear() +
          '<br> ' + dt.getDate() + '/' + dt.getMonth() + '/' + dt.getFullYear() + ' ' +
          dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
      let $data_comment = $("#dummy-element").find("[name=data-post]").clone();
      $data_comment.text(val);
      $reply_post.append($data_comment);
      console.log($data_comment);
      $data_comment.append('<small>'+time+'</small>');   
    }
  });
  