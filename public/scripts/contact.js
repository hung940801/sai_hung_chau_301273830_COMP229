/* --------------------------------------------- */
/* Filename: contact.js                          */
/* Student Name: Sai Hung, Chau                  */
/* Student ID: 301273830                         */
/* Date: 4 Feb 2023                              */
/* Section: Contact                              */
/* --------------------------------------------- */

// Contact form JS function

// Checking the page if the page is Contact page
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

                // Print out the data that user inserted
                console.log("First Name: " + first_name + "\nLast Name: " + last_name + "\nTel.: " + tel + "\nEmail: " + email + "\nMessage: " + msg);
    
                // Hide the contact form and display the success message
                $('#contact_form').attr('style', 'display: none !important');
                $('.contact-form-success-msg').css("display", "block");
                
                // redirect to Homepage
                window.setTimeout(function() {
                    window.location.href = '/';
                }, 3000);
            } else {
                // Alert message if user didn't insert all the fields
                alert("Please fill in all the fields in contact form.")
            }
        });
    });
}