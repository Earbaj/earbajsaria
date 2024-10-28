// // script.js

// document.getElementById('theme-toggle').addEventListener('click', () => {
//     document.body.classList.toggle('dark-theme');
//     document.body.classList.toggle('light-theme');
// });

// // Set the initial theme
// document.body.classList.add('light-theme');


// script.js

const themeToggleButton = document.getElementById('theme-toggle');
const icon = document.createElement('span');
icon.id = 'icon';
icon.innerHTML = '&#x1F31E;'; // Moon icon for light theme
themeToggleButton.appendChild(icon);

// Set the initial theme
document.body.classList.add('light-theme');

themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');

    // Toggle icon based on theme
    icon.innerHTML = document.body.classList.contains('dark-theme') ? '&#x2600;' : '&#x1F31E;'; // Sun for dark theme, Moon for light theme
});
