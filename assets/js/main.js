// nav script 
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', () => {
    //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});
// nav script end



// recommendations button script
    // function plans(pricePlans) {
    //     var i;
    //     var x = document.getElementsByClassName("plan");
    //     for (i = 0; i < x.length; i++) {
    //         x[i].style.display = "none";
    //     }
    //     document.getElementById(pricePlans).style.display = "block";
    // }


    function aniManga(recommendations) {
        var i;
        var x = document.getElementsByClassName("animanga-recommendations");
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";
        }
        document.getElementById(recommendations).style.display = "block";
      }

    const planBtnOne = document.querySelector(".anime-btn");
    const planBtnTwo = document.querySelector(".manga-btn");

    //btn one 
    planBtnOne.addEventListener('click', () => {
        planBtnOne.classList.add('active-btn');

        //deactive btns
        planBtnTwo.classList.remove('active-btn');
    });

    //btn two 
    planBtnTwo.addEventListener('click', () => {
        planBtnTwo.classList.add('active-btn');

        //deactive btns
        planBtnOne.classList.remove('active-btn');
    });


// recommendations button script end