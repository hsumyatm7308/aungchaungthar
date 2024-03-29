// Start jQuery Area 

$(document).ready(function(){
    // Start Room Section

    $(".roompopup").magnificPopup({
        type: 'image'
        // other options
    });

    // End Room Section
});

// End jQuery Area

// Start JS Area

// Start Header

// start nav bar

function dropbtn(e){
    // document.getElementById('mydropdown').classList.toggle('show');

    // undefined
    // console.log(this.nextElementSibling);

    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.nextElementSibling);

    e.target.nextElementSibling.classList.toggle("show");
}

function dropfilter(){
    var getsearch, filter, getdropdiv, getlinks, linkvalue;
    getsearch = document.getElementById("search");
    filter = getsearch.value.toUpperCase();
    // getdropdiv = document.getElementById("mydropdown");
    // getlinks = getdropdiv.getElementsByTagName("a");
    getlinks = document.querySelectorAll(".mydropdowns a");
    // console.log(getlinks);

    for(var x = 0; x < getlinks.length; x++){
        // linkvalue = getlinks[x].textContent;
        linkvalue = getlinks[x].textContent || getlinks[x].innerText;
        // console.log(linkvalue);

        // console.log(getlinks[x].textContent);
        // console.log(getlinks[x].innerText)

        if(linkvalue.toUpperCase().indexOf(filter) > -1){
            getlinks[x].style.display = "block";
        }else{
            getlinks[x].style.display = "none";
        }
    }
}

// end nav bar

// start auto background

function* genfun(){
    var index = 8;

    while(true){
        yield index++;

        if(index > 13){
            index = 8;
        }
    }
}

var getgen = genfun();
// console.log(getgen.next().value);
// console.log(getgen.next().value);
// console.log(getgen.next().value);
// console.log(getgen.next().value);
// console.log(getgen.next().value);
// console.log(getgen.next().value);
// console.log(getgen.next().value);

// var idx = getgen.next().value;
// console.log(idx)
// console.log(idx)
// console.log(idx)

var getheader = document.querySelector("header");
getheader.style.backgroundImage = `url("./assets/img/banner/banner${getgen.next().value}.jpg")`;

function autoload(){
    // console.log(getgen.next().value);
    getheader.style.backgroundImage = `url("./assets/img/banner/banner${getgen.next().value}.jpg")`;
}

setInterval(autoload,2500);

// end auto background

// End Header

// Start Testimonials Section

const getcompanyname = document.querySelector(".companyname");
const getrole = document.querySelector(".role");
const gettestimonial = document.querySelector(".testimonial");

const testimonialdatas  = [
    {
        name: "Rich Start Resturant",
        position: "Our Outlet",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },

    {
        name: "48 Sky Bar Cafe",
        position: "Partner",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },

    {
        name: "Cool Land Swimming Pool",
        position: "Our Client",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },

    {
        name: "52 Beach Hotel",
        position: "Our Branch",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },

    {
        name: "Chaung Thar SPA",
        position: "Our Business",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
]

let idx = 0;
function updatetestimonial(){
    // getcompanyname.textContent = testimonialdatas[idx].name;
    // getrole.textContent = testimonialdatas[idx].position;
    // gettestimonial.textContent = testimonialdatas[idx].text;

    const {name,position,text} = testimonialdatas[idx];

    getcompanyname.textContent = name;
    getrole.textContent = position;
    gettestimonial.textContent = text;

    idx++;

    if(idx > testimonialdatas.length - 1){
        idx = 0;
    }
}

updatetestimonial();
setInterval(updatetestimonial,10000);

// End Testimonials Section

// Start Property Section 

filterby("all");
function filterby(keyword){
    // console.log(keyword);

    var getfilters = document.getElementsByClassName('filters');
    // console.log(getfilters);

    if(keyword === "all"){
        keyword = '';
    }
    
    for(var x = 0; x < getfilters.length; x++){
        // console.log(getfilters[x]);
        // console.log(getfilters[x].className.indexOf(keyword) > -1);

        removeshowclass(getfilters[x], 'show');
        if(getfilters[x].className.indexOf(keyword) > -1){
            addshowclass(getfilters[x], 'show');
        }  
    }
}

function addshowclass(ele,opt){
    // console.log(ele);
    var getfilters = ele.className.split(" ");
    // console.log(getfilters);

    var getopt = opt.split(" ");
    // console.log(getopt);
    // console.log(getopt.length);
    // console.log(opt.length);

    for(var y = 0; y < getopt.length; y++){
        // console.log(getopt[y]);
        // console.log(getfilters.indexOf(getopt[y]) === -1);

        if(getfilters.indexOf(getopt[y]) === -1){
            // ele.classList.add(getopt[y]);
            ele.className += " " + getopt[y];
        }
    }
}

function removeshowclass(ele, opt){
    // console.log(ele);
    
    var getfilters = ele.className.split(" ");
    // console.log(getfilters);

    var getopt = opt.split(" ");
    // console.log(getopt);
    // console.log(getopt.length);

    for(var k = 0; k < getfilters.length; k++){
        // console.log(getfilters);
        // console.log(getfilters[0]);
        // console.log(getfilters[1]);

        // console.log(getfilters[k]);
        
        while(getfilters.indexOf(getopt[k]) > -1){
            getfilters.splice(getfilters.indexOf(getopt[k]), 1);
        }
    }

    // console.log(getfilters);
    // console.log(getfilters.join(' '));

    ele.className = getfilters.join(' ');
    // console.log(ele.className);
}

var getftcontrol = document.getElementById('filtercontrol');
var getlis = getftcontrol.getElementsByClassName('list-inline-item');

for(var i = 0; i < getlis.length; i++){
    getlis[i].addEventListener("click", function(){
        var curractives = document.querySelector('.activeitems');
        curractives.className = curractives.className.replace(' activeitems', '');

        this.className += ' activeitems';
    });
}

// End Property Section

// End JS Area

// const x = ['red', 'green', 'blue', 'yellow', 'pink'];
// const y = x.splice(1,2);
// console.log(x, y);

// const x = ['filter', 'room', 'show'];
// const y = x.splice(1,1);
// console.log(x, y);

// console.log(x.indexOf('show') > -1);
// console.log(x.splice(x.indexOf('show'), 1));
// console.log(x);

// while(x.indexOf('show') > -1){
//     console.log(x.splice(x.indexOf('show'), 1));
// }

// console.log("happy sad".indexOf(""));

// Start Contact Section 

function tabbox(link, evn, btncolor){
    // console.log(link, evn, btncolor);

    var gettabcontents = document.getElementsByClassName('tabcontents');
    var getbtntabs = document.getElementsByClassName('btn-tabs');
    for(var i = 0; i < gettabcontents.length; i++){
        gettabcontents[i].style.display = "none";
        getbtntabs[i].style.backgroundColor = "";
    }

    document.getElementById(link).style.display = 'block';
    evn.style.backgroundColor = btncolor;
}

// tabbox('phone');
document.getElementById("autoclick").click();

// End Contact Section

// Start Footer Section

const getyear = document.getElementById("getyear");
getyear.innerText = new Date().getFullYear();

// End Footer Section

// Start Chat Box

const getmychat = document.getElementById("mychat");

function openchatbox(){
    getmychat.style.display = "block";
}

function closechatbox(){
    getmychat.style.display = "none";
}

// End Chat Box