if (document.getElementsByTagName('body')[0].classList.contains('contact'))
{
    $(document).ready(function() {
        $('#contact_form_submit_btn').on('click', function() {
            let first_name = $('#contact_form_first_name').val();
            let last_name = $('#contact_form_last_name').val();
            let tel = $('#contact_form_tel').val();
            let email = $('#contact_form_email').val();
            let msg = $('#contact_form_msg').val();

            if ((first_name != "") ||
               (last_name != "") ||
               (tel != "") ||
               (email != "") ||
               (msg != "")) {
                console.log("First Name: " + first_name + "\nLast Name: " + last_name + "\nTel.: " + tel + "\nEmail: " + email + "\nMessage: " + msg);
    
                $('#contact_form').attr('style', 'display: none !important');
                $('.contact-form-success-msg').css("display", "block");
                
                window.setTimeout(function() {
                    window.location.href = '/';
                }, 3000);
            } else {
                alert("Please fill in all the fields in contact form.")
            }
        });
    });
}