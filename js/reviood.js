$(document).ready(function () {
      var click = false;
    $("#cat-search-btn").click(function () {
        if( click == false){
          click = true;
          $("#categ-select-section").removeClass("display-check-hide");
          $("#categ-select-section").addClass("display-check-view");
        }
        else{
            $("#categ-select-section").removeClass("display-check-view");
            $("#categ-select-section").addClass("display-check-hide");
            click = false;
        }
    });


    $("#btn-review").click(function () {
        debugger
          $("#post-review-add").addClass("display-check-view").removeClass("display-check-hide");
          $("#post-review-ask-tab").removeClass("display-check-view").addClass("display-check-hide");
          $("#post-review-ask-view").removeClass("display-check-view").addClass("display-check-hide");
          $("#post-review-announcement").removeClass("display-check-view").addClass("display-check-hide");
    });
    
    $("#btn-ask").click(function () {
        debugger
          $("#post-review-add").addClass("display-check-hide").removeClass("display-check-view");
          $("#post-review-ask-tab").removeClass("display-check-hide").addClass("display-check-view");
          $("#post-review-ask-view").removeClass("display-check-hide").addClass("display-check-view");
          $("#post-review-announcement").removeClass("display-check-view").addClass("display-check-hide");
    });
    
    $("#btn-announcement").click(function () {
        debugger
          $("#post-review-add").addClass("display-check-hide").removeClass("display-check-view");
          $("#post-review-ask-tab").removeClass("display-check-view").addClass("display-check-hide");
          $("#post-review-ask-view").removeClass("display-check-view").addClass("display-check-hide");
          $("#post-review-announcement").removeClass("display-check-hide").addClass("display-check-view");
    });




    $("#btn-review-1").click(function () {
        debugger
          $("#post-review-add-1").addClass("display-check-view").removeClass("display-check-hide");
          $("#post-review-ask-tab-1").removeClass("display-check-view").addClass("display-check-hide");
          $("#post-review-ask-view-1").removeClass("display-check-view").addClass("display-check-hide");
          $("#post-review-announcement-1").removeClass("display-check-view").addClass("display-check-hide");
    });
    
    $("#btn-ask-1").click(function () {
        debugger
          $("#post-review-add-1").addClass("display-check-hide").removeClass("display-check-view");
          $("#post-review-ask-tab-1").removeClass("display-check-hide").addClass("display-check-view");
          $("#post-review-ask-view-1").removeClass("display-check-hide").addClass("display-check-view");
          $("#post-review-announcement-1").removeClass("display-check-view").addClass("display-check-hide");
    });
    
    $("#btn-announcement-1").click(function () {
        debugger
          $("#post-review-add-1").addClass("display-check-hide").removeClass("display-check-view");
          $("#post-review-ask-tab-1").removeClass("display-check-view").addClass("display-check-hide");
          $("#post-review-ask-view-1").removeClass("display-check-view").addClass("display-check-hide");
          $("#post-review-announcement-1").removeClass("display-check-hide").addClass("display-check-view");
    });
    
    $("#img-file-upload-1").click(function () {
        debugger
          $("#img-file-1").addClass("display-check-view").removeClass("display-check-hide");
    });


    $("#img-file-upload-2").click(function () {
        debugger
          $("#img-file-2").addClass("display-check-view").removeClass("display-check-hide");
    });
   
    $("#add-multiple-post").click(function () {
        debugger
        $('#exampleModalCenter').modal('hide');
        $('.bd-example-modal-xl').modal('show')

    });

    $("#add-new-post-more").click(function () {
        debugger
        $('.bd-example-modal-xl').modal('hide');
        $('#exampleModalCenter').modal('show')

    });
  
    

   

});
function showComment(id) {
    $(`#${id}`).addClass("display-check-view").removeClass("display-check-hide");
  }