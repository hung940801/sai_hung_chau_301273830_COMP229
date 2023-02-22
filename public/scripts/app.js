/* --------------------------------------------- */
/* Filename: app.js                              */
/* Student Name: Sai Hung, Chau                  */
/* Student ID: 301273830                         */
/* Date: 4 Feb 2023                              */
/* --------------------------------------------- */

// A browser console message printed for testing
// (function () 
// {
    function start() 
    {
        console.log("App Started");
        // Confirmation alert box before confirm delete the record of business contact
        let deleteButton = document.querySelectorAll('.btn-delete-business-contact');
        for (button of deleteButton) {
            button.addEventListener('click', (event)=>{
                if (!confirm("Are you sure?")) {
                    event.preventDefault();
                    window.location.assign('/business_contacts');
                }
            });
        }
    }

    window.addEventListener("load", start());
// })
