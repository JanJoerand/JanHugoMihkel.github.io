$(document).ready(function() {
  // Function to handle menu clicks
  $('.main-menu a').click(function(event) {
      event.preventDefault(); // Prevent the default anchor behavior

      var $this = $(this);

      // Get the target id from the link
      var target = $this.attr('href');

      // Hide all content regions and show the target content
      $('.content-region').removeClass('show').addClass('hide');
      $(target).removeClass('hide').addClass('show');

      // Update the active menu item
      $('.main-menu a').removeClass('active');
      $this.addClass('active');
  });

  // Function to update the active menu item based on the URL hash
  function updateActiveMenuItem() {
      var region = location.hash.toString() || $('.main-menu a:first').attr('href');
      $('.main-menu a').removeClass('active');
      $('.main-menu a[href="' + region + '"]').addClass('active');
  }

  // Call updateActiveMenuItem initially and whenever the hash changes
  $(window).on('load hashchange', function() {
      updateActiveMenuItem();
  });
});
