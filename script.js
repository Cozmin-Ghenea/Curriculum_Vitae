const navbar = document.querySelector(".navbar");

const navbarOffSetTop = navbar.offsetTop;
const sections = document.querySelectorAll('section');
const navbarLinks = document.querySelectorAll('.navbar-link');
const progress = document.querySelector('.progress-bars-wrapper');
const prorgessBarPercents = [97,89,75,75,50,35,30]

window.addEventListener('scroll', () =>{
    mainFn();
    
})


const mainFn = () =>{
    if(window.pageYOffset >=navbarOffSetTop){
        navbar.classList.add('sticky')
    }else{
        navbar.classList.remove('sticky')
    }


sections.forEach((section,i) => {
    if(window.pageYOffset >=section.offsetTop - 10){
        navbarLinks.forEach(navbarlink => {
            navbarlink.classList.remove('change')
        })
        navbarLinks[i].classList.add('change');
    }
})
    if(window.pageYOffset + window.innerHeight >= progress.offsetTop){
        document.querySelectorAll('.progress-percent').forEach((el, i) =>{
            el.style.width=`${prorgessBarPercents[i]}%`
            el.previousElementSibling.firstElementChild.textContent=prorgessBarPercents[i]
        })
    }
}
mainFn();

window.addEventListener('resize', () =>{
    window.location.reload();
})