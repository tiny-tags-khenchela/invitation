/*==================================================
=
=   Wedding Invitation
=   File : script.js
=   Version : 3.1
=
===================================================*/


/*=========================================
=          إعدادات سهلة التعديل
=========================================*/


// تاريخ الحفل

const weddingDate = new Date(

    2026,

    7,

    1,

    14,

    0,

    0

);



// رابط موقع الحفل

const locationURL =

"https://maps.app.goo.gl/yqR9sqWaeRHFHkaK8";





/*=========================================
=          عناصر الصفحة
=========================================*/


const envelope =

document.getElementById("envelope");



const coverContainer =

document.getElementById("cover-container");



const welcomeScreen =

document.getElementById("welcome-screen");



const invitation =

document.getElementById("invitation");



const transitionOverlay =

document.getElementById("transitionOverlay");



const locationLink =

document.getElementById("locationLink");





/*=========================================
=          رابط الموقع
=========================================*/


locationLink.href = locationURL;





/*=========================================
=          حالة الفتح
=========================================*/


let invitationOpened = false;





/*=========================================
=          فتح الظرف
=========================================*/


envelope.addEventListener(

    "click",

    openInvitation

);



function openInvitation(){


    if(invitationOpened){

        return;

    }


    invitationOpened = true;



    // إيقاف حركة التنفس

    envelope.style.animation = "none";



    // فتح الغطاء

    envelope.classList.add("open");



    /*
       إظهار الكوفر مرة واحدة فقط
       أثناء اختفاء الظرف
    */


// ظهور الكوفر مباشرة مع بداية فتح الظرف

coverContainer.classList.add("show");



/*
   بدء الانتقال النهائي
*/


setTimeout(()=>{

    transitionOverlay.classList.add("show");

},900);



/*
   إخفاء الظرف وإظهار الدعوة
*/


setTimeout(()=>{


    welcomeScreen.classList.add("hide");


    invitation.classList.add("show");


    document.body.style.overflow = "auto";


    transitionOverlay.classList.remove("show");


    startCardAnimation();


},1600);

}/*=========================================
=          العداد التنازلي
=========================================*/


const daysElement =

document.getElementById("days");


const hoursElement =

document.getElementById("hours");


const minutesElement =

document.getElementById("minutes");


const secondsElement =

document.getElementById("seconds");





function updateCountdown(){


    const now = new Date();



    const difference =

        weddingDate - now;



    if(difference <= 0){


        daysElement.textContent = "00";

        hoursElement.textContent = "00";

        minutesElement.textContent = "00";

        secondsElement.textContent = "00";


        return;


    }



    const totalSeconds =

        Math.floor(

            difference / 1000

        );



    const days =

        Math.floor(

            totalSeconds /

            (24 * 60 * 60)

        );



    const hours =

        Math.floor(

            (totalSeconds %

            (24 * 60 * 60))

            /

            (60 * 60)

        );



    const minutes =

        Math.floor(

            (totalSeconds %

            (60 * 60))

            /

            60

        );



    const seconds =

        totalSeconds % 60;



    daysElement.textContent =

        formatNumber(days);



    hoursElement.textContent =

        formatNumber(hours);



    minutesElement.textContent =

        formatNumber(minutes);



    secondsElement.textContent =

        formatNumber(seconds);


}




function formatNumber(number){


    return String(number)

        .padStart(2,"0");


}




// تشغيل العداد

updateCountdown();


setInterval(

    updateCountdown,

    1000

);





/*=========================================
=          ظهور البطاقات أثناء التمرير
=========================================*/


function startCardAnimation(){


    const cards =

    document.querySelectorAll(".card");



    cards.forEach(card=>{


        card.classList.add("animate");


    });




    const observer =

    new IntersectionObserver(


        entries=>{


            entries.forEach(entry=>{


                if(entry.isIntersecting){


                    entry.target

                    .classList

                    .add("visible");


                }


            });


        },


        {

            threshold:.15

        }


    );




    cards.forEach(card=>{


        observer.observe(card);


    });


}
/*=========================================
=          تأثير الضغط على الظرف
=========================================*/


envelope.addEventListener(

    "mousedown",

    ()=>{


        if(!invitationOpened){


            envelope.style.transform =

                "scale(.97)";


        }


    }

);



envelope.addEventListener(

    "mouseup",

    ()=>{


        envelope.style.transform = "";


    }

);



envelope.addEventListener(

    "mouseleave",

    ()=>{


        envelope.style.transform = "";


    }

);





/*=========================================
=          دعم الهاتف
=========================================*/


envelope.addEventListener(

    "touchstart",

    ()=>{


        if(!invitationOpened){


            envelope.style.transform =

                "scale(.97)";


        }


    },

    {

        passive:true

    }

);



envelope.addEventListener(

    "touchend",

    ()=>{


        envelope.style.transform = "";


    }

);





/*=========================================
=          منع سحب الصور
=========================================*/


document

.querySelectorAll("img")

.forEach(image=>{


    image.addEventListener(

        "dragstart",

        event=>{


            event.preventDefault();


        }

    );


});





/*=========================================
=          حماية فتح الدعوة
=========================================*/


window.addEventListener(

    "DOMContentLoaded",

    ()=>{

        document.body.style.overflow = "hidden";

    }

);




/*=========================================
=          نهاية الملف
=========================================*/
