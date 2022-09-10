// reference: https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-custom-properties#creating-themes-with-custom-properties
const button = document.querySelector('.toggle-button');
const root = document.documentElement;
button.addEventListener('click', e => {
    const newTheme = root.className === 'dark' ? 'light' : 'dark';
    root.className = newTheme;
});
