/* === if you find this source code helpul,Feel free to support our channel
 on Buymecoffee page and get access to more login forms and web projects.
link below! 
  https://buymeacoffee.com/mrsmartchoice === 
  
  Check out more design :https://dribbble.com/mrsmartchoice

  LEarn MOre video Toturial: hptps://youtube.com/@mr-smartchoice
  
  My resource & Tips : https://boilink.com/mrsmartchoice  

  
=== */

































































































// == Add event listener for sidebar toggle button
const toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.addEventListener('click', function() {
    const sidebar = document.querySelector('.sidebar');
    const dropdownMenus = document.querySelectorAll('.dropdown-menu.active-dropdown'); //Do it later

    // Toggle the sidebar
    sidebar.classList.toggle('active');

    // Close any open dropdown menus (Do it later)
    dropdownMenus.forEach(menu => {
        menu.classList.remove('active-dropdown');
        menu.parentNode.classList.remove('active-dropdown');
        menu.parentNode.style.paddingBottom = '0'; // Reset padding
    });
});

// Add event listeners for dropdown toggle
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', function(e) {
        e.preventDefault();
        const sidebar = document.querySelector('.sidebar');
        // Check if sidebar is active
        if (sidebar.classList.contains('active')) {
            const dropdownMenu = this.nextElementSibling;
            dropdownMenu.classList.toggle('active-dropdown');
            // Toggle active class for the list-item
            const listItem = this.parentNode;
            listItem.classList.toggle('active-dropdown');
            // Adjust padding for active dropdown list item
            if (dropdownMenu.classList.contains('active-dropdown')) {
                const dropdownItems = dropdownMenu.querySelectorAll('li');
                let totalHeight = 0;
                dropdownItems.forEach(item => {
                    totalHeight += item.offsetHeight;
                });
                listItem.style.paddingBottom = `${totalHeight + 60}px`;
            } else {
                listItem.style.paddingBottom = '0'; // Reset padding
            }
        }
    });
});