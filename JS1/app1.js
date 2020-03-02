$('#q8-btn').on('click', function () {
  $(this)
    .siblings()
    .slideToggle();
});






$('.pagetop').on('click', function () {
  $('main, html').animate({ scrollTop: 0 }, 500);
});