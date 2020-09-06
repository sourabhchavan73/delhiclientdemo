// lightbox
$(document).on('click', '[data-toggle="lightbox"]', function(event){
  event.preventDefault();
  $(this).ekkoLightbox();
})

// navbar
window.addEventListener("scroll", (event) => {
    var scroll = this.scrollY;
    if  (scroll > 600){
      $('#mynav').addClass('nav-colored');
      $('#mynav').removeClass('navbar-padding');
    }else {
      $('#mynav').removeClass('nav-colored');
      $('#mynav').addClass('navbar-padding');
    }
});

// accordion
$(document).ready(function(){
  // Add minus icon for collapse element which is open by default
  $(".collapse.show").each(function(){
    $(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
  });
  
  // Toggle plus minus icon on show hide of collapse element
  $(".collapse").on('show.bs.collapse', function(){
    $(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
  }).on('hide.bs.collapse', function(){
    $(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
  });
});