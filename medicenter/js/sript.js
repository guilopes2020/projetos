    let menuMoblie = document.querySelector('.menuMobile')
    menuMoblie.addEventListener("click", function() {
        let menuNavUl = document.querySelector('.menu nav ul')
        if (menuNavUl.style.display == 'flex') {
            menuNavUl.style.display = 'none' 
        } else {
            menuNavUl.style.display = 'flex'
        }
    })
