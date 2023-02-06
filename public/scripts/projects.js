if (document.getElementsByTagName('body')[0].classList.contains('projects'))
{
    $(document).ready(function() {
        // $('#exampleModal').modal('show');
        $("[id^=\"btn-modal\"]").click(function(){
            let num = $(this).attr("data-modal-num");
            $('#modal'+num).modal('show');
        });
        $(".modal .modal-dialog .modal-content .modal-header .close").click(function(){
            let num = $(this).attr("data-modal-num");
            $('#modal'+num).modal('hide');
        });
    });
}