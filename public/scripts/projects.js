/* --------------------------------------------- */
/* Filename: projects.js                         */
/* Student Name: Sai Hung, Chau                  */
/* Student ID: 301273830                         */
/* Date: 4 Feb 2023                              */
/* Section: Projects                             */
/* --------------------------------------------- */

// JS functions for Projects page

// Checking the page if the page is Projects page
if (document.getElementsByTagName('body')[0].classList.contains('projects'))
{
    $(document).ready(function() {
        // Modal open function
        $("[id^=\"btn-modal\"]").click(function(){
            let num = $(this).attr("data-modal-num");
            $('#modal'+num).modal('show');
        });
        // Modal close function
        $(".modal .modal-dialog .modal-content .modal-header .close").click(function(){
            let num = $(this).attr("data-modal-num");
            $('#modal'+num).modal('hide');
        });
    });
}