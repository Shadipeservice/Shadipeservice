// ===== Shadi Pe Service V2 =====

// Smooth Scroll
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e){
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if(target){
            target.scrollIntoView({
                behavior:'smooth'
            });
        }
    });
});


// Header Shadow on Scroll

window.addEventListener('scroll',()=>{

const header=document.querySelector('.header');

if(window.scrollY>50){

header.style.boxShadow="0 8px 25px rgba(255,215,0,.35)";

}else{

header.style.boxShadow="none";

}

});


// Scroll Animation

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0px)";

}

});

},{
threshold:.20
});

document.querySelectorAll(".card,.machine").forEach(el=>{

el.style.opacity="0";
el.style.transform="translateY(80px)";
el.style.transition="all .8s ease";

observer.observe(el);

});


// Floating WhatsApp Button

const whatsapp=document.createElement("a");

whatsapp.href="https://wa.me/919630609127";

whatsapp.innerHTML="💬";

whatsapp.className="floating-whatsapp";

document.body.appendChild(whatsapp);


// Floating Call Button

const call=document.createElement("a");

call.href="tel:+918735975456";

call.innerHTML="📞";

call.className="floating-call";

document.body.appendChild(call);


// Back To Top Button

const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.className="top-btn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};


// Machine Hover Effect

document.querySelectorAll(".machine").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="scale(1.05)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="scale(1)";

});

});
