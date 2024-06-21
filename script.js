const burger = document.getElementById('burger');
const list = document.getElementById('list');
const links = document.querySelectorAll('#list a');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    list.classList.toggle('active');
});

links.forEach(link => {
    link.addEventListener('click', () => {
        burger.classList.remove('active');
        list.classList.remove('active');
    });
});
