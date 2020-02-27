function init() {
    var button = document.getElementById('submit');

    function Alert() {
        var fname = document.forms["myForm"]["fname_field"].value;
		var lname = document.forms["myForm"]["lname_field"].value;
		var email = document.forms["myForm"]["email_field"].value;
		var phone = document.forms["myForm"]["tel_field"].value;
		var dob = document.forms["myForm"]["date_field"].value;
		var uname = document.forms["myForm"]["username_field"].value;
		var password = document.forms["myForm"]["password_field"].value;
		var repassword = document.forms["myForm"]["rpassword_field"].value;
		
        if (fname == "")
        {
            alert("Please Enter Your First Name");
            return false;
        }
		
		if (lname == "")
        {
            alert("Please Enter Your Last Name");
            return false;
        }
		
		if (email == "")
        {
            alert("Please Enter Your Email");
            return false;
        }
		
		if (phone == "")
        {
            alert("Please Enter Your Phoen Number");
            return false;
        }
		
		if (dob == "")
        {
            alert("Please Enter Your Date Of Birth");
            return false;
        }
		
		if (uname == "")
        {
            alert("Please Enter Your Username");
            return false;
        }
		
		if (password == "")
        {
            alert("Please Enter Your Password");
            return false;
        }
		
		if (repassword == "")
        {
            alert("Please Enter Your Password");
            return false;
        }
    }
    button.addEventListener('click', Alert);
}
window.addEventListener('load', init);