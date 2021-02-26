const nav = document.querySelectorAll('.nav');
const content = document.querySelectorAll('.content');
const scroll = document.querySelector('.scroll');


console.log();

nav.forEach(navs => {
    navs.addEventListener('click', function(e){
        console.log(e.target.id, document.querySelector(`.content.${e.target.id}`));
        var tt = document.querySelector(`.content.${e.target.id}`)
        console.log(tt.offsetTop);
        window.scrollTo({
            top: tt.offsetTop,
            behavior: "smooth"
        });
    })
})

scroll.addEventListener('click', function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})