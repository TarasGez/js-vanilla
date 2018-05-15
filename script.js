// 1
/* function fun1() {

    var chbox;
    chbox = document.getElementById("one");

    if (chbox.checked) {
        alert("checked");
    }
    else {
        alert("non");
    }
}

function fun2() {
    var radi = document.getElementsByName("r1");

    for (var i = 0; i < radi.length; i++) {
        if (radi[i].checked) {
            alert(radi[i].value);
        }
    }
}

function fun3() {
    var sel = document.getElementById("mySelect").selectedIndex;
    var opt = document.getElementById("mySelect").options;
    alert(opt[sel].text);
} */

// 2
/* function fun4() {
    var rng = document.getElementById("rg");
    var pp = document.getElementById("p1");
    var inp = document.getElementById("i1");
    var div = document.getElementById("div1");

    pp.innerHTML = rng.value;
    inp.value = rng.value;

    div.style.width = rng.value + "px";
    div.style.height = 1.5*rng.value + "px";
}

function fun5() {
    var rng = document.getElementById("rg");
    var inp = document.getElementById("i1");
    var div = document.getElementById("div1");

    rng.value = inp.value;
    div.style.width = rng.value + "px";
    div.style.height = 1.5*rng.value + "px";
} */

// 3 dropdown menu
/* document.getElementById('nav').onmouseover = function(event) {
    var target = event.target;
    if (target.className == 'menu-item') {
        var subsArray = target.getElementsByClassName('submenu');
        closeMenu();
        for (let i = 0; i < subsArray.length; i++) {    
            subsArray[i].style.display = 'block';
        }
    }
}

document.onmouseover = function(event) {
    var target = event.target;
    console.log(event.target); // Виводить в консоль на що наведена мишка /потрібно для перевірки коду/
    if (target.className!='menu-item' && target.className!='submenu'){
        closeMenu();
    }
}

function closeMenu() {
    var subm = document.getElementsByClassName('submenu');
    for (let i = 0; i < subm.length; i++) {
        subm[i].style.display = 'none';
        
    }
} */

// 4
/* var tab;
var tabContent;

window.onload = function(){
    tab = document.getElementsByClassName('tab');
    tabContent = document.getElementsByClassName('tabContent');
    hideTabsContent(1);
}

function hideTabsContent(a) {
    for (let i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
        tab[i].classList.remove('whiteborder');
    }
}

document.getElementById('tabs').onclick = function(event){
    var target = event.target;
    if (target.className == 'tab') {
        for (let i = 0; i < tab.length; i++) {
            if (target == tab[i]) {
                showTabContent(i);
                break;
            }
        }
    }
}

function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')) {
        hideTabsContent(0);
        tab[b].classList.add('whiteborder');
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }
} */

// Конструктор класу + вивід масиву з перетворенням об'єктів в стрінг
/* class Cat {

    constructor(options) {

        if (options.name == undefined) {
            this.name = 'UnNamed';
        }
        else {
            this.name = options.name;
        }

        if (options.color == undefined) {
            this.color = 'None';
        }
        else {
            this.color = options.color;
        }

        if (options.weight == undefined) {
            this.weight = '1';
        }
        else {
            this.weight = options.weight;
        }
    }

    toString() {
        return `${this.name} ${this.color} ${this.weight}`;
      }
}
var cat = new Cat({});  //Порожній кіт
var cat1 = new Cat({
    'name' : 'Murka',
    'color' : 'black',
    'weight' : 5
});
var cat2 = new Cat({
    'name' : 'Vaska',
    'color': 'red',
    //'weight' : 6         //Не повні данні про кота кота2
});
var cat3 = new Cat({
    // 'name' : 'Lolo',     //Не повні данні про кота кота3
    'color': 'grey',
    'weight' : 3
});
var cats = [];
cats.splice(0, 0, cat, cat1, cat2, cat3);
function toPrintAlert(array) {
    var element = '';
    for (let i = 0; i < array.length; i++) {
        element = element + array[i] + "\n";
    }
    return element;
}
alert(toPrintAlert(cats));
function toPrintName(array){

    var listName = '';
    for (let i = 0; i < array.length; i++) {
        listName = listName + 'Ім\'я ' + sWitch(i) + ': ' + array[i].name + '\n';
    }
    return listName;
}
function sWitch(number) {
    var nName = '';
    switch (number) {
        case 0: nName = 'першого кота'
            break;
        case 1: nName = 'другого кота'
            break;
        case 2: nName = 'третього кота'
            break;
        //case 3: nName = 'четвертого кота'
        //    break;
        default: nName = 'якогось там кота'
            break;
    }
    return nName;
}

alert(toPrintName(cats)); */

// 5 modal
/* function myModal() {
    var modal = document.getElementById('myModalWindow');
    var btn = document.getElementById('myBtn');
    var span = document.getElementsByClassName('close')[0];

    // btn.onclick = function () {
        modal.style.display = 'block';
    // }
    span.onclick = function () {
        modal.style.display = 'none';
    }
    window.onclick = function () {
        if (this.event.target == modal) {
            modal.style.display = 'none';
        }
    }
}
function saveModalTxt() {
    var modalCont = document.getElementsByClassName('modal-content')[0];  // Шукаємо всі елементи з класом 'modal-content' та беремо перший з них
    var modalInpt = modalCont.getElementsByTagName('input')[0];           // в блоці 'modal-content' шукаємо перший input

    var jsFilePath = modalInpt.value + '.txt'; // зчитує назву файлу з якого виводити текст
    var js = document.createElement('script');
    js.type = 'text/javascript';
    js.src = jsFilePath;
    document.body.appendChild(js); // добавляє блок <script src=jsFilePath></script>

    var btn = document.getElementById('myBtn');
    btn.innerText = modalInpt.value + '.txt'; // Заміна тексту між тегами <button>...</button> на значення з input
    
    var divContent = document.createElement('div'); // Створюємо <div id="content"></div>
    divContent.id = 'content';                      // куди запишемо текст з файлу jsFilePath
    modalCont.appendChild(divContent);              // Додаємо <div id="content"></div> в <div class="modal-content">...</div> в самий кінець

    var content = document.getElementById('content');
    js.onload = function () {           // загружає контент з файлу зразу з загрузкою сторінки
        content.innerText = contents;
    }
   
    var modalContP = modalCont.getElementsByTagName('p')[0];
    modalCont.removeChild(modalContP); // Видаляємо input разом з <p> з модального вікна
} */

// 6 Cats Map
var catsMap = new Map();
catsMap.set('1', cat1);
catsMap.set('2', cat2);
catsMap.set('3', cat3);
var catsIndex = catsMap.size;

var catsList = document.getElementById('catsDiv');
var catsListUl = document.createElement('ul');
catsList.appendChild(catsListUl);

for (let i = 1; i <= catsMap.size; i++) {
    addCatLi(i);
}

function addCat() {
    let name = prompt("Enter Cat's Name", '');
    let color = prompt("Enter Cat's Color", '');
    let weight = setWeight();
    function setWeight() {
        let wgh = prompt("Enter Cat's Weight", '');
        if (wgh > 0 && wgh < 20){
            return wgh;
        }
        else if (wgh <= 0) {
            alert("Неправильна вага, вага повинна бути > 0");
            return setWeight();
        }
        else if (wgh >= 20) {
            alert("Неправильна вага, дуже жирний кіт");
            return setWeight();
        }
        else {
            alert("Введіть цифри");
            return setWeight();
        }
    }
    let cat = new Cat({
        'name' : name,
        'color' : color,
        'weight' : weight    
    });
    catsIndex++;
    catsMap.set(catsIndex + '', cat);
    addCatLi(catsIndex);
}

function addCatLi(par) {
    var cat2print = document.createElement('li');
    cat2print.id = 'cat' + par; 
    cat2print.innerText = catsMap.get(par + '');
    catsListUl.appendChild(cat2print);
}

function openCats() {
    window.open('cats.js');
}

var fileTXT = "Empty";
function readFile() {
    var selectedFile = document.getElementById("openFile");
    
    selectedFile.addEventListener("change", function runReading(event) {
        var reader = new FileReader();
        files = selectedFile.files;
        console.log("Filename: " + files[0].name);
        reader.readAsText(files[0]);
        reader.onload = function(evt) {
            fileTXT = evt.target.result;
            
            function getFileTXT() {
                //console.log("getFileTXT:\n" + fileTXT);
                return fileTXT;
            }
            getFileTXT();
            addCatsFromFile();
        };
    }, false);
}

var catsList = ""; // Список котів для запису в файл cats2.txt
function addCatsFromFile (){
    let txt = fileTXT.replace(/{|};/g,'');
    //console.log("txt:\n" + txt);
    var arr = txt.split(/},/g); // Парсимо текст з файлу в масив об'єктів-котів
    //console.log("arr:\n" + arr);

    for(let zzz of arr){
        zzz = zzz.replace(/\n|\s/g,''); /* \n - перехід на новий рядок, \s - порожній простір (пробіл і т.і.)*/
        console.log("zzz: " + zzz);
        let array = zzz.split(/'\W+(?!:)/g);
        console.log("array: " + array);

        let cat = new Cat({
            'name' : array[1],     //Вибір з масиву потрібного елементу !!!!!!
            'color' : array[3],    //Вибір з масиву потрібного елементу !!!!!!
            'weight' : array[5]    //Вибір з масиву потрібного елементу !!!!!!  
        });
        catsIndex++;
        catsMap.set(catsIndex + '', cat);
        console.log(cat);
    }
}

function saveCatsMap2File() {
    
    for (let cat of catsMap) {
        catsList = catsList + cat.toString() + "\n";
        console.log("cats: " + cat);
    }
    console.log("catsList:\n" + catsList);
    saveTextAsFile(catsList);
}

function saveTextAsFile(textToWrite)
{
    //var textToWrite = "text";
    var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
    var fileNameToSaveAs ="cats2.txt";
 
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    if (window.webkitURL != null)
    {
        // Chrome allows the link to be clicked
        // without actually adding it to the DOM.
        downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    }
    else
    {
        // Firefox requires the link to be added to the DOM
        // before it can be clicked.
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        downloadLink.onclick = destroyClickedElement;
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
    }
    downloadLink.click();
}



// 7 JSON
/* function ready() {
    var jsonDiv = document.getElementById('json');
    var jsonUl = document.createElement('ul');
    jsonUl.id = "jsonUl";
    jsonDiv.appendChild(jsonUl);
}
document.addEventListener("DOMContentLoaded", ready);
var createList = false;
function addJSON(){
    if (!createList) {
        var json = jsonData;
        for (let i = 0; i < json.length; i++) {
            var jsonPersons = document.getElementById('jsonUl');
            var person = json[i];
            var personLi = document.createElement('li');
            personLi.id = 'person' + i; 
            // personLi.innerText = JSON.stringify(person); // JSON.stringify() Переводить об'єкт js в рядок значень JSON
            personLi.innerText = document.createElement('strong') + person.firstName + ' ' + person.lastName + "</strong>" + '\n' + JSON.stringify(person.address, ["city", "street"], 5);
            jsonPersons.appendChild(personLi);
        }
        createList = true;
    } else {
        alert("All Persons are added");
    }
} */

// 8 

