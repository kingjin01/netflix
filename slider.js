const Slide = document.querySelector('#slide');
const imgBox = document.querySelectorAll('#imgbox img');
const preBtn = document.querySelector('#pre-btn');
const nextBtn = document.querySelector('#next-btn');

let Count = 1;

window.addEventListener('load', function(){
    imgBox.length[Random];
})

nextBtn.addEventListener('click', function(){
    if (Count > imgBox.length -7) {
        Count = 0;
    }
    Slide.style.transform = `translateX(${-Count * 320}px)`

    Count++
});

preBtn.addEventListener('click', function(){
    if (Count < 0) {
        Count = imgBox.length -7;
    }
    Slide.style.transform = `translateX(${-Count * 320}px)`

    Count--
});

function Random() {
    return Math.floor(Math.random() * imgBox.length);
};

console.log(Random);


 //---------------------slide1-------------------------------

const Slide2 = document.querySelector('#slide2');
const imgBox2 = document.querySelectorAll('#imgbox2 img');
const preBtn2 = document.querySelector('#pre-btn2');
const nextBtn2 = document.querySelector('#next-btn2');

let Count2 = 1;

nextBtn2.addEventListener('click', function(){
    if (Count2 > imgBox2.length -6) {
        Count2 = 0;
    }
    Slide2.style.transform = `translateX(${-Count2 * 320}px)`

    Count2++
});

preBtn2.addEventListener('click', function(){
    if (Count2 < 0) {
        Count2 = imgBox2.length -5;
    }
    Slide2.style.transform = `translateX(${-Count2 * 320}px)`

    Count2--
});

 //---------------------slide2-------------------------------

const Slide3 = document.querySelector('#slide3');
const imgBox3 = document.querySelectorAll('#imgbox3 img');
const preBtn3 = document.querySelector('#pre-btn3');
const nextBtn3 = document.querySelector('#next-btn3');

let Count3 = 1;

nextBtn3.addEventListener('click', function(){
    if (Count3 > imgBox3.length -6) {
        Count3 = 0;
    }
    Slide3.style.transform = `translateX(${-Count3 * 320}px)`

    Count3++
});

preBtn3.addEventListener('click', function(){
    if (Count3 < 0) {
        Count3 = imgBox3.length -5;
    }
    Slide3.style.transform = `translateX(${-Count3 * 320}px)`

    Count3--
});

//  ---------------------slide3-------------------------------

const Slide4 = document.querySelector('#slide4');
const imgBox4 = document.querySelectorAll('#imgbox4 img');
const preBtn4 = document.querySelector('#pre-btn4');
const nextBtn4 = document.querySelector('#next-btn4');

let Count4 = 1;

nextBtn4.addEventListener('click', function(){
    if (Count4 > imgBox4.length -6) {
        Count4 = 0;
    }
    Slide4.style.transform = `translateX(${-Count4 * 320}px)`

    Count4++
});

preBtn4.addEventListener('click', function(){
    if (Count4 < 0) {
        Count4 = imgBox4.length -5;
    }
    Slide4.style.transform = `translateX(${-Count4 * 320}px)`

    Count4--
});

 //---------------------slide4-------------------------------

const Slide5 = document.querySelector('#slide5');
const imgBox5 = document.querySelectorAll('#imgbox5 img');
const preBtn5 = document.querySelector('#pre-btn5');
const nextBtn5 = document.querySelector('#next-btn5');

let Count5 = 1;

nextBtn5.addEventListener('click', function(){
    if (Count5 > imgBox5.length -6) {
        Count5 = 0;
    }
    Slide5.style.transform = `translateX(${-Count5 * 320}px)`

    Count5++
});

preBtn5.addEventListener('click', function(){
    if (Count5 < 0) {
        Count5 = imgBox5.length -5;
    }
    Slide5.style.transform = `translateX(${-Count5 * 320}px)`

    Count5--
});

 //---------------------slide5-------------------------------

 const Slide6 = document.querySelector('#slide6');
 const imgBox6 = document.querySelectorAll('#imgbox6 img');
 const preBtn6 = document.querySelector('#pre-btn6');
 const nextBtn6 = document.querySelector('#next-btn6');
 
 let Count6 = 1;
 
 nextBtn6.addEventListener('click', function(){
     if (Count6 > imgBox6.length -6) {
         Count6 = 0;
     }
     Slide6.style.transform = `translateX(${-Count6 * 320}px)`
 
     Count6++
 });
 
 preBtn6.addEventListener('click', function(){
     if (Count6 < 0) {
         Count6 = imgBox6.length -5;
     }
     Slide6.style.transform = `translateX(${-Count6 * 320}px)`
 
     Count6--
 });

//---------------------slide6-------------------------------

 const Slide7 = document.querySelector('#slide7');
 const imgBox7 = document.querySelectorAll('#imgbox7 img');
 const preBtn7 = document.querySelector('#pre-btn7');
 const nextBtn7 = document.querySelector('#next-btn7');
 
 let Count7 = 1;
 
 nextBtn7.addEventListener('click', function(){
     if (Count7 > imgBox7.length -6) {
         Count7 = 0;
     }
     Slide7.style.transform = `translateX(${-Count7 * 320}px)`
 
     Count7++
 });
 
 preBtn7.addEventListener('click', function(){
     if (Count7 < 0) {
         Count7 = imgBox7.length -5;
     }
     Slide7.style.transform = `translateX(${-Count7 * 320}px)`
 
     Count7--
 });

//---------------------slide7-------------------------------

const Slide8 = document.querySelector('#slide8');
const imgBox8 = document.querySelectorAll('#imgbox8 img');
const preBtn8 = document.querySelector('#pre-btn8');
const nextBtn8 = document.querySelector('#next-btn8');

let Count8 = 1;

nextBtn8.addEventListener('click', function(){
    if (Count8 > imgBox8.length -6) {
        Count8 = 0;
    }
    Slide8.style.transform = `translateX(${-Count8 * 320}px)`

    Count8++
});

preBtn8.addEventListener('click', function(){
    if (Count8 < 0) {
        Count8 = imgBox8.length -5;
    }
    Slide8.style.transform = `translateX(${-Count8 * 320}px)`

    Count8--
});
//---------------------slide8-------------------------------

const Slide9 = document.querySelector('#slide9');
const imgBox9 = document.querySelectorAll('#imgbox9 img');
const preBtn9 = document.querySelector('#pre-btn9');
const nextBtn9 = document.querySelector('#next-btn9');

let Count9 = 1;

nextBtn9.addEventListener('click', function(){
    if (Count9 > imgBox9.length -6) {
        Count9 = 0;
    }
    Slide9.style.transform = `translateX(${-Count9 * 320}px)`

    Count9++
});

preBtn9.addEventListener('click', function(){
    if (Count9 < 0) {
        Count9 = imgBox9.length -5;
    }
    Slide9.style.transform = `translateX(${-Count9 * 320}px)`

    Count9--
});

//---------------------slide9-------------------------------

const Slide10 = document.querySelector('#slide10');
const imgBox10 = document.querySelectorAll('#imgbox10 img');
const preBtn10 = document.querySelector('#pre-btn10');
const nextBtn10 = document.querySelector('#next-btn10');

let Count10 = 1;

nextBtn10.addEventListener('click', function(){
    if (Count10 > imgBox10.length -7) {
        Count10 = 0;
    }
    Slide10.style.transform = `translateX(${-Count10 * 320}px)`

    Count10++
});

preBtn10.addEventListener('click', function(){
    if (Count10 < 0) {
        Count10 = imgBox10.length -7;
    }
    Slide10.style.transform = `translateX(${-Count10 * 320}px)`

    Count10--
});

//---------------------slide10-------------------------------


const Slide11 = document.querySelector('#slide11');
const imgBox11 = document.querySelectorAll('#imgbox11 img');
const preBtn11 = document.querySelector('#pre-btn11');
const nextBtn11 = document.querySelector('#next-btn11');

let Count11 = 1;

nextBtn11.addEventListener('click', function(){
    if (Count11 > imgBox11.length -6) {
        Count11 = 0;
    }
    Slide11.style.transform = `translateX(${-Count11 * 320}px)`

    Count11++
});

preBtn11.addEventListener('click', function(){
    if (Count11 < 0) {
        Count11 = imgBox11.length -5;
    }
    Slide11.style.transform = `translateX(${-Count11 * 320}px)`

    Count11--
});

//---------------------slide11-------------------------------

const Slide12 = document.querySelector('#slide12');
const imgBox12 = document.querySelectorAll('#imgbox12 img');
const preBtn12 = document.querySelector('#pre-btn12');
const nextBtn12 = document.querySelector('#next-btn12');

let Count12 = 1;

nextBtn12.addEventListener('click', function(){
    if (Count12 > imgBox12.length -6) {
        Count12 = 0;
    }
    Slide12.style.transform = `translateX(${-Count12 * 320}px)`

    Count12++
});

preBtn12.addEventListener('click', function(){
    if (Count12 < 0) {
        Count12 = imgBox12.length -5;
    }
    Slide12.style.transform = `translateX(${-Count12 * 320}px)`

    Count12--
});

//---------------------slide12-------------------------------

const Slide13 = document.querySelector('#slide13');
const imgBox13 = document.querySelectorAll('#imgbox13 img');
const preBtn13 = document.querySelector('#pre-btn13');
const nextBtn13 = document.querySelector('#next-btn13');

let Count13 = 1;

nextBtn13.addEventListener('click', function(){
    if (Count13 > imgBox13.length -6) {
        Count13 = 0;
    }
    Slide13.style.transform = `translateX(${-Count13 * 320}px)`

    Count13++
});

preBtn13.addEventListener('click', function(){
    if (Count13 < 0) {
        Count13 = imgBox13.length -5;
    }
    Slide13.style.transform = `translateX(${-Count13 * 320}px)`

    Count13--
});

//---------------------slide13-------------------------------

const Slide14 = document.querySelector('#slide14');
const imgBox14 = document.querySelectorAll('#imgbox14 img');
const preBtn14 = document.querySelector('#pre-btn14');
const nextBtn14 = document.querySelector('#next-btn14');

let Count14 = 1;

nextBtn14.addEventListener('click', function(){
    if (Count14 > imgBox14.length -6) {
        Count14 = 0;
    }
    Slide14.style.transform = `translateX(${-Count14 * 320}px)`

    Count14++
});

preBtn14.addEventListener('click', function(){
    if (Count14 < 0) {
        Count14 = imgBox14.length -5;
    }
    Slide14.style.transform = `translateX(${-Count14 * 320}px)`

    Count14--
});

// ---------------------slide14-------------------------------

const Slide15 = document.querySelector('#slide15');
const imgBox15 = document.querySelectorAll('#imgbox15 img');
const preBtn15 = document.querySelector('#pre-btn15');
const nextBtn15 = document.querySelector('#next-btn15');

let Count15 = 1;

nextBtn15.addEventListener('click', function(){
    if (Count15 > imgBox15.length -6) {
        Count15 = 0;
    }
    Slide15.style.transform = `translateX(${-Count15 * 320}px)`

    Count15++
});

preBtn15.addEventListener('click', function(){
    if (Count15 < 0) {
        Count15 = imgBox15.length -5;
    }
    Slide15.style.transform = `translateX(${-Count15 * 320}px)`

    Count15--
});

// ---------------------slide15-------------------------------