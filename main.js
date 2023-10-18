const menuBtn = document.querySelector('.menu-btn');
const body = document.querySelector('body');
    let menuOpen = false;
    menuBtn.addEventListener('click', () =>{
        if(!menuOpen ){
            menuBtn.classList.add('open');
            body.classList.add('scroll');
            menuOpen = true;
            document.getElementById('small-menu').style.setProperty('display', 'block');
        }
        else{
            menuBtn.classList.remove('open');
            menuOpen = false;
            document.getElementById('small-menu').style.setProperty('display', 'none');
            body.classList.remove('scroll');
    
        }
    });
