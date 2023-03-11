function validate() {
    $('#company').on('change', showHideCompany);

    $('#submit').on('click', function(ev) {
        ev.preventDefault();

        let usernameRegex = /^[a-zA-Z0-9]{3,20}$/;
        let passwordRegex = /^\w{5,15}$/;
        let emailRegex = /@.*\./;
        let companyNumberRegex = /^[1-9]{1}[0-9]{3}$/;
		
        const username = document.getElementById("username");
        const password = document.getElementById("password");
        const email = document.getElementById("email");
        const confirmPassword = document.getElementById("confirm-password");
        const companyNumber = document.getElementById("companyNumber");
        const resetFormBorders = document.getElementById("registerForm").elements;

        for (var i=0; i < resetFormBorders.length; i++) {
            resetFormBorders[i].style.borderColor = '';
        }

        if(!username.value.match(usernameRegex)){
            username.style.borderColor = 'red';
        }
        if(!password.value.match(passwordRegex) || password.value != confirmPassword.value || password.value == "" || confirmPassword.value == ""){
            password.style.borderColor = 'red';
            confirmPassword.style.borderColor = 'red';
        }
        if(!email.value.match(emailRegex)){
            email.style.borderColor = 'red';
        }
        if(!companyNumber.value.match(companyNumberRegex)){
            companyNumber.style.borderColor = 'red';
        }
        
    });

    function showHideCompany() {
        if ($(this).is(':checked')) {
            $('#companyInfo').css('display', 'block');
        } else {
            $('#companyInfo').css('display', 'none')
        }
    }
}