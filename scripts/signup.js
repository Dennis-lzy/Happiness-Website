//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

//shows and hides password input
$("#shwPass").click(function(){
    var x = $(".passfield");
    if (x.attr("type") === "password") {
        x.attr("type", "text");
    } else {
        x.attr("type","password");
    }
});

    $(".next").click(function() {
        if (animating) return false;
        animating = true;

        current_fs = $(this).parent();
        next_fs = $(this).parent().next();

        //activate next step on progressbar using the index of next_fs
         $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

        //show the next fieldset
        next_fs.show();
        //hide the current fieldset with style
        current_fs.animate({ opacity: 0 }, {
            step: function(now, mx) {
                //as the opacity of current_fs reduces to 0 - stored in "now"
                //1. scale current_fs down to 80%
                scale = 1 - (1 - now) * 0.2;
                //2. bring next_fs from the right(50%)
                left = (now * 10) + "%";
                //3. increase opacity of next_fs to 1 as it moves in
                opacity = 1 - now;
                current_fs.css({
                    'transform': 'scale(' + scale + ')',
                    'position': 'absolute'
                });
                next_fs.css({ 'left': left, 'opacity': opacity });
            },
            duration: 800,
            complete: function() {
                current_fs.hide();
                animating = false;
            },
            //this comes from the custom easing plugin
            easing: 'easeInOutBack'
        });
    });




$(".previous").click(function() {
    if (animating) return false;
    animating = true;

    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();

    //de-activate current step on progressbar
    $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

    //show the previous fieldset
    previous_fs.show();
    //hide the current fieldset with style
    current_fs.animate({ opacity: 0 }, {
        step: function(now, mx) {
            //as the opacity of current_fs reduces to 0 - stored in "now"
            //1. scale previous_fs from 80% to 100%
            scale = 0.8 + (1 - now) * 0.2;
            //2. take current_fs to the right(50%) - from 0%
            left = ((1 - now) * 10) + "%";
            //3. increase opacity of previous_fs to 1 as it moves in
            opacity = 1 - now;
            current_fs.css({ 'left': left });
            previous_fs.css({ 'transform': 'scale(' + scale + ')', 'opacity': opacity });
        },
        duration: 800,
        complete: function() {
            current_fs.hide();
            animating = false;
        },
        //this comes from the custom easing plugin
        easing: 'easeInOutBack'
    });
});

$(".submit").click(function() {
    return false;
})

$(".color-circle").click(function() {
    $("fieldset").css("background-color", $(this).css("background-color"));
    $('.color-circle').removeClass('color-circle-active'); // remove first
    $(this).addClass('color-circle-active');
});

//Signup storage


$(".submit").click(function() {
    var username = $("#username").val();
    var email = $("#email").val();
    var pass = $("#pass").val();
    var cPass = $("#cPass").val();
    var fname = $("#fname").val();
    var lname = $("#lname").val();
    var gender = $("input[name='gender']:checked").val();
    var bDay = $("#day").find(":selected").val();
    var bMonth = $("#month").find(":selected").val();
    var bYear = $("#year").find(":selected").val();
    var profileImg = $("#profileImg").val();
    var themeColor = $(".color-circle-active").css("background-color")
    var profileD = $("#profile-d").val();
    var TermsChk = $("#TermsChk").val();
    var user1 = {
    	Username: username,
    	Email: email,
    	Password: pass,
    	FirstName: fname,
    	LastName: lname,
    	Gender: gender,
    	Birthday: bDay + "/" + bMonth + "/" + bYear ,
    	profilePic: profileImg,
    	profileThemeColor: themeColor,
    	profileDescription: profileD
    };
    localStorage.setItem("user",JSON.stringify(user1));
    var user = JSON.parse(localStorage.getItem('user'));
    $("#signup-toggle").css("font-family", "Libre Baskerville")
    $("#signup-toggle").html("<h1>Registration Successful</h1>")
});

var user = JSON.parse(localStorage.getItem('user'));