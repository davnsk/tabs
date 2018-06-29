
var allTabs;
var allText;

function tabsLenght(){
    allTabs = document.querySelectorAll('.tab');
    allText = document.querySelectorAll('.text');
}

function removeActive (){
    for(var i = 0; i < allTabs.length; i++){
        allTabs[i].classList.remove('active');
        allText[i].classList.remove('active');
    }
}

function activate(){
    removeActive();
    this.classList.add('active');
    allText[this.dataset.tab-1].classList.add('active');
}

function addEvent(){
    for(var i = 0; i < allTabs.length; i++){
    allTabs[i].addEventListener('click', activate);
    }
}

function createLi(){
    var list = document.querySelector('.tabs');
    var newTab = document.createElement('li');
    newTab.innerHTML = "ТАБ " + (allTabs.length + 1);
    newTab.dataset.tab = allTabs.length + 1;
    newTab.classList.add('tab');
    list.appendChild(newTab);
}

function createText(){
    var wrap = document.querySelector('.wrap');
    var newText = document.createElement('div');
    newText.innerHTML = tabText.value;
    newText.dataset.text = allText.length + 1;
    newText.classList.add('text');
    wrap.appendChild(newText);
    tabText.value = '';
}

tabsLenght();
addEvent();

document.querySelector('#addTab').addEventListener('click', function (ev) {
ev.preventDefault();

    createLi();
    createText();
    tabsLenght();
    addEvent();
});