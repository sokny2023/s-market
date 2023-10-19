// for page product

const closelove = document.querySelector('.closelove');
const qr_code = document.querySelector('#qr-code');
const header = document.querySelector('#header');
const vegetable = document.querySelector('#vegetable')
const fruit = document.querySelector('#fruit')
const about = document.querySelector('#about')
const footer = document.querySelector('#footer')

const buyv1 = document.querySelector('#buyv1');
const sub_v1 = document.querySelector('sub-v1');
const add_v1 = document.querySelector('add-v1');
const v1 = document.querySelector('v1');

const buyv2 = document.querySelector('#buyv2');
const sub_v2 = document.querySelector('sub-v2');
const add_v2 = document.querySelector('add-v2');
const v2 = document.querySelector('v2');

const buyv3 = document.querySelector('#buyv3');
const sub_v3 = document.querySelector('sub-v3');
const add_v3 = document.querySelector('add-v3');
const v3 = document.querySelector('v3');

const buyv4 = document.querySelector('#buyv4');
const sub_v4 = document.querySelector('sub-v4');
const add_v4 = document.querySelector('add-v4');
const v4 = document.querySelector('v4');

const buyv5 = document.querySelector('#buyv5');
const sub_v5 = document.querySelector('sub-v5');
const add_v5 = document.querySelector('add-v5'); 
const v5 = document.querySelector('v5');

const buyv6 = document.querySelector('#buyv6');
const sub_v6 = document.querySelector('sub-v6');
const add_v6 = document.querySelector('add-v6'); 
const v6 = document.querySelector('v6');

const buyv7 = document.querySelector('#buyv7');
const sub_v7 = document.querySelector('sub-v7');
const add_v7 = document.querySelector('add-v7'); 
const v7 = document.querySelector('v7');

const buyv8 = document.querySelector('#buyv8');
const sub_v8 = document.querySelector('sub-v8');
const add_v8 = document.querySelector('add-v8'); 
const v8 = document.querySelector('v8');

buyv1.addEventListener('click', () => {
    qrcode_display();
});
buyv2.addEventListener('click', () => {
    qrcode_display();
});
buyv3.addEventListener('click', () => {
    qrcode_display();
});
buyv4.addEventListener('click', () => {
    qrcode_display();
});
buyv5.addEventListener('click', () => {
    qrcode_display();
});
buyv6.addEventListener('click', () => {
    qrcode_display();
});
buyv7.addEventListener('click', () => {
    qrcode_display();
});
buyv8.addEventListener('click', () => {
    qrcode_display();
});

function qrcode_display(){
    qr_code.style.display = 'block';
    header.style.opacity = '0.4';
    vegetable.style.opacity = '0.4';
    fruit.style.opacity = '0.4';
    footer.style.opacity = '0.4';
    about.style.opacity = '0.4';
}

closelove.addEventListener('click', () => {
    qr_code.style.display = 'none';
    header.style.opacity = '1';
    vegetable.style.opacity = '1';
    fruit.style.opacity = '1';
    footer.style.opacity = '1';
    about.style.opacity = '1';
});

sub_v1.addEventListener('click', () => {
    subV1();
});
add_v1.addEventListener('click', () => {
    addV1();
});

sub_v2.addEventListener('click', () => {
    subV2();
});
add_v2.addEventListener('click', () => {
    addV2();
});

sub_v3.addEventListener('click', () => {
    subV3();
});
add_v3.addEventListener('click', () => {
    addV3();
});


let x1=0,x2=0,x3=0,x4=0,x5=0,x6=0,x7=0;
// v1
function addV1(){
    if(x1>=0 && x1<20){
        x1+=1;
        v1.value = x1;
    }
}
function subV1(){
    if(x1>0){
        x1-=1;
        v1.value = x1;
    }
}

// v2
function addV2(){
    if(x2>=0 && x2<20){
        x2+=1;
        v2.value = x2;
    }
}
function subV2(){
    if(x2>0){
        x2-=1;
        v2.value = x2;
    }
}

// v3
function addV3(){
    if(x3>=0 && x3<20){
        x3+=1;
        v3.value = x3;
    }
}
function subV3(){
    if(x3>0){
        x3-=1;
        v3.value = x3;
    }
}

// v4
function addV4(){
    if(x4>=0 && x4<20){
        x4+=1;
        v4.value = x4;
    }
}
function subV4(){
    if(x4>0){
        x4-=1;
        v4.value = x4;
    }
}