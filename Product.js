new Swiper('.card-wrapper', {
  loop: true,
  spaceBetween: 30,

  // pagination bullets
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
      0:{
          slidesPerView: 1
      },
      768:{
          slidesPerView: 2
      },
      1024:{
          slidesPerView: 3
      }
  }
});

document.addEventListener('DOMContentLoaded', function() {
  // Handle dropdown toggle for all cards
  document.querySelectorAll('.dropdown-toggle').forEach(button => {
      button.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          
          // Close all other dropdowns first
          document.querySelectorAll('.dropdown-container').forEach(container => {
              if (container !== this.closest('.dropdown-container')) {
                  container.classList.remove('active');
              }
          });
          
          // Toggle current dropdown
          this.closest('.dropdown-container').classList.toggle('active');
      });
  });
  
  // Close dropdowns when clicking outside
  document.addEventListener('click', function(e) {
      if (!e.target.closest('.dropdown-container')) {
          document.querySelectorAll('.dropdown-container').forEach(container => {
              container.classList.remove('active');
          });
      }
  });
  
  // Initialize swiper (if not already initialized)
  if (typeof Swiper !== 'undefined') {
      new Swiper('.swiper', {
          // Your swiper configuration options
          slidesPerView: 'auto',
          spaceBetween: 20,
          freeMode: true
      });
  }
});