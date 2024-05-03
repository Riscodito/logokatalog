const container = document.querySelector('.container');
const jumbo = document.querySelector('.two');

container.addEventListener('click', function(e) {
    if(e.target.className == 'one') {
        jumbo.src = e.target.src;

    }


});