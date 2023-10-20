// for page product

// declare variable button closelove
const closelove = document.querySelector('.closelove');
const qr_code = document.querySelector('#qr-code');
const header = document.querySelector('#header');
const vegetable = document.querySelector('#vegetable');
const fruit = document.querySelector('#fruit');
const about = document.querySelector('#about');
const footer = document.querySelector('#footer');

// declare variable for vegetable
const buyv1 = document.querySelector('#buyv1');
const sub_v1 = document.querySelector('#sub-v1');
const add_v1 = document.querySelector('#add-v1');
const v1 = document.querySelector('#v1');

const buyv2 = document.querySelector('#buyv2');
const sub_v2 = document.querySelector('#sub-v2');
const add_v2 = document.querySelector('#add-v2');
const v2 = document.querySelector('#v2');

const buyv3 = document.querySelector('#buyv3');
const sub_v3 = document.querySelector('#sub-v3');
const add_v3 = document.querySelector('#add-v3');
const v3 = document.querySelector('#v3');

const buyv4 = document.querySelector('#buyv4');
const sub_v4 = document.querySelector('#sub-v4');
const add_v4 = document.querySelector('#add-v4');
const v4 = document.querySelector('#v4');

const buyv5 = document.querySelector('#buyv5');
const sub_v5 = document.querySelector('#sub-v5');
const add_v5 = document.querySelector('#add-v5');
const v5 = document.querySelector('#v5');

const buyv6 = document.querySelector('#buyv6');
const sub_v6 = document.querySelector('#sub-v6');
const add_v6 = document.querySelector('#add-v6');
const v6 = document.querySelector('#v6');

const buyv7 = document.querySelector('#buyv7');
const sub_v7 = document.querySelector('#sub-v7');
const add_v7 = document.querySelector('#add-v7');
const v7 = document.querySelector('#v7');

const buyv8 = document.querySelector('#buyv8');
const sub_v8 = document.querySelector('#sub-v8');
const add_v8 = document.querySelector('#add-v8');
const v8 = document.querySelector('#v8');

// declare variable for vegetable
const buyf1 = document.querySelector('#buyf1');
const sub_f1 = document.querySelector('#sub-f1');
const add_f1 = document.querySelector('#add-f1');
const f1 = document.querySelector('#f1');

const buyf2 = document.querySelector('#buyf2');
const sub_f2 = document.querySelector('#sub-f2');
const add_f2 = document.querySelector('#add-f2');
const f2 = document.querySelector('#f2');

const buyf3 = document.querySelector('#buyf3');
const sub_f3 = document.querySelector('#sub-f3');
const add_f3 = document.querySelector('#add-f3');
const f3 = document.querySelector('#f3');

const buyf4 = document.querySelector('#buyf4');
const sub_f4 = document.querySelector('#sub-f4');
const add_f4 = document.querySelector('#add-f4');
const f4 = document.querySelector('#f4');

const buyf5 = document.querySelector('#buyf5');
const sub_f5 = document.querySelector('#sub-f5');
const add_f5 = document.querySelector('#add-f5');
const f5 = document.querySelector('#f5');

const buyf6 = document.querySelector('#buyf6');
const sub_f6 = document.querySelector('#sub-f6');
const add_f6 = document.querySelector('#add-f6');
const f6 = document.querySelector('#f6');

const buyf7 = document.querySelector('#buyf7');
const sub_f7 = document.querySelector('#sub-f7');
const add_f7 = document.querySelector('#add-f7');
const f7 = document.querySelector('#f7');

const buyf8 = document.querySelector('#buyf8');
const sub_f8 = document.querySelector('#sub-f8');
const add_f8 = document.querySelector('#add-f8');
const f8 = document.querySelector('#f8');

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

/*// click buy now vegetables
const vegetableClick = [buyv1, buyv2, buyv3, buyv4, buyv5, buyv6, buyv7, buyv8];
vegetableClick.forEach((element) => {
    element.addEventListener('click', () => {
        qrcode_display();
    });
});

// click buy now fruits
const fruitClick = [buyf1, buyf2, buyf3, buyf4, buyf5, buyf6, buyf7, buyf8];
fruitClick.forEach((element) => {
    element.addEventListener('click', () => {
        qrcode_display();
    });
});*/

function qrcode_display() {
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
  
  sub_v4.addEventListener('click', () => {
    subV4();
  });
  add_v4.addEventListener('click', () => {
    addV4();
  });
  
  sub_v5.addEventListener('click', () => {
    subV5();
  });
  add_v5.addEventListener('click', () => {
    addV5();
  });
  
  sub_v6.addEventListener('click', () => {
    subV6();
  });
  add_v6.addEventListener('click', () => {
    addV6();
  });
  
  sub_v7.addEventListener('click', () => {
    subV7();
  });
  add_v7.addEventListener('click', () => {
    addV7();
  });
  
  sub_v8.addEventListener('click', () => {
    subV8();
  });
  add_v8.addEventListener('click', () => {
    addV8();
  });

let x1 = 0;
let x2 = 0;
let x3 = 0;
let x4 = 0;
let x5 = 0;
let x6 = 0;
let x7 = 0;
let x8 = 0;

// v1
function addV1() {
  if (x1 >= 0 && x1 < 20) {
    x1 += 1;
    v1.value = x1;
  }
}

function subV1() {
  if (x1 > 0) {
    x1 -= 1;
    v1.value = x1;
  }
}

// v2
function addV2() {
  if (x2 >= 0 && x2 < 20) {
    x2 += 1;
    v2.value = x2;
  }
}

function subV2() {
  if (x2 > 0) {
    x2 -= 1;
    v2.value = x2;
  }
}

// v3
function addV3() {
  if (x3 >= 0 && x3 < 20) {
    x3 += 1;
    v3.value = x3;
  }
}

function subV3() {
  if (x3 > 0) {
    x3 -= 1;
    v3.value = x3;
  }
}

// v4
function addV4() {
  if (x4 >= 0 && x4 < 20) {
    x4 += 1;
    v4.value = x4;
  }
}

function subV4() {
  if (x4 > 0) {
    x4 -= 1;
    v4.value = x4;
  }
}

// v5
function addV5() {
  if (x5 >= 0 && x5 < 20) {
    x5 += 1;
    v5.value = x5;
  }
}

function subV5() {
  if (x5 > 0) {
    x5 -= 1;
    v5.value = x5;
  }
}

// v6
function addV6() {
  if (x6 >= 0 && x6 < 20) {
    x6 += 1;
    v6.value = x6;
  }
}

function subV6() {
  if (x6 > 0) {
    x6 -= 1;
    v6.value = x6;
  }
}

// v7
function addV7() {
  if (x7 >= 0 && x7 < 20) {
    x7 += 1;
    v7.value = x7;
  }
}

function subV7() {
  if (x7 > 0) {
    x7 -= 1;
    v7.value = x7;
  }
}

// v8
function addV8() {
  if (x8 >= 0 && x8 < 20) {
    x8 += 1;
    v8.value = x8;
  }
}

function subV8() {
  if (x8 > 0) {
    x8 -= 1;
    v8.value = x8;
  }
}
