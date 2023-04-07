let myImage = document.querySelector('img')
myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/huohu.webp') {
        myImage.setAttribute('src', 'images/huohu1.webp')
    } else {
        myImage.setAttribute('src', 'images/huohu.webp')
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('请输入你的名字。');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla 酷毙了，' + myName;
    }

}
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storeName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了,' + storeName;
}
myButton.onclick = function () {
    setUserName();
}