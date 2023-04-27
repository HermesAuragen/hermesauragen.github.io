/*==================================== toggle icon navbar ====================================================*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {

    menuIcon.classList.toggle('fa-close');
    navbar.classList.toggle('active');
};
/*==================================== scroll section active link =============================================*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

    sections.forEach(sec => {

        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {

            navLinks.forEach(links => {

                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });

    /*========================================= sticky navbar =============================================*/

    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*=============== remove toggle icon and navbar when clicking navbar link (scroll) ====================*/

   menuIcon.classList.remove('fa-close');
   navbar.classList.remove('active');
};

/*========================================= scroll reveal =============================================*/

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200 
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*========================================= typed js ===================================================*/

const typed = new Typed('.multiple-text', {
    strings: ['Energy Access Partner', 'Smart Energy Partner', 'Solution Provider'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

/*======================================== Read More ====================================================*/
 
function toggle() {

    
    const hiddenContent = document.getElementById('hidden-content');

    
    if(hiddenContent.style.display === "none") {

        hiddenContent.style.display = "block";

    } else {

        hiddenContent.style.display = "none";
    }


}

function toggle1() {

    
    const hiddenContent1 = document.getElementById('hidden-content1');

    
    if(hiddenContent1.style.display === "none") {

        hiddenContent1.style.display = "block";

    } else {

        hiddenContent1.style.display = "none";
    }


}

function toggle2() {

    
    const hiddenContent2 = document.getElementById('hidden-content2');

    
    if(hiddenContent2.style.display === "none") {

        hiddenContent2.style.display = "block";

    } else {

        hiddenContent2.style.display = "none";
    }


}


function reveal() {

    
    const aboutContent = document.getElementById('aboutContent');

    
    if(aboutContent.style.display === "none") {

        aboutContent.style.display = "block";

    } else {

        aboutContent.style.display = "none";
    }


}





/*======================================== Message ======================================================*/

function sendEmail(){

    var params = {
        from_name : document.querySelector("#fullName").value,
        mobile_number : document.querySelector("#mobileNumber").value,
        email_id : document.querySelector("#email_id").value,
        message : document.querySelector("#message").value

    }

    const serviceID = "service_8vl8qm6";
    const templateID = "template_4svb67q";

    emailjs.send(serviceID, templateID, params)
    .then(
        res =>{
            document.getElementById("#fullName").value = "";
            document.querySelector("#mobileNumber").value = "";
            document.querySelector("#email_id").value = "";
            document.querySelector("#message").value = "";
            console.log(res);
            
            alert("your message has been sent successfully!");
        }
    );
    .catch((err) => console.log(err));

}









