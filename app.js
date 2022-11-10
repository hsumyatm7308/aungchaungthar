//Start jquery Area 
$(document).ready(function(){
    //Start Room  Section 
    $('.roompopup').magnificPopup({type:'image'});

    //End Room Section
});
//End jquery Area 



//Start Javascript Area
// Start Header 

//Start Navbar
function dropbtn(e){
    
//   document.getElementById('mydropdown').classList.toggle('show');
   
// undefined 
// console.log(this)
console.log(e);
// console.log(e.taret)
// console.log(e.target.nextElementSibling)
e.target.nextElementSibling.classList.toggle('show');
}



function dropfilter(){
    // console.log('hay')
    var getsearch,filter,getdropdiv,getlinks,linkvalue;
    getsearch = document.getElementById('search');
    filter = getsearch.value.toUpperCase();
    // getdropdiv = document.getElementById('mydropdown');
    // getlinks = getdropdiv.getElementsByTagName('a');
  getlinks = document.querySelectorAll('.mydropdown a')
    // console.log(getlinks);

    for(var x = 0 ; x < getlinks.length ; x++){
        linkvalue = getlinks[x].textContent || getlinks[x].innerText;
        // console.log(linkvalue);

        if(linkvalue.toUpperCase().indexOf(filter) > -1){
            getlinks[x].style.display = "";
        }else{
            getlinks[x].style.display = "none";
        }
    }
}

//End Navbar

//Start Banner
//Start Auto Background
function* genfun(){
    var index = 8;
    while(true){
        yield index++;
        if(index > 13){
            index = 8;
        }
    }
};
var getgen = genfun();
// console.log(getgen.next().value);
// console.log(getgen.next().value);
// console.log(getgen.next().value);
// console.log(getgen.next().value);
// console.log(getgen.next().value);
// console.log(getgen.next().value);
// console.log(getgen.next().value);
// console.log(getgen.next().value);

var getheader = document.querySelector('header');

getheader.style.backgroundImage = `url(./assests/img/banner/banner${getgen.next().value}.jpg)`;

function autoload(){
    // console.log(getgen.next().value);
    getheader.style.backgroundImage = `url(./assests/img/banner/banner${getgen.next().value}.jpg)`;
}

setInterval(autoload,2500);

//End Auto Background
//End Banner

// End Header

// Start Testimonials Section 
const getcompanyname = document.querySelector('.companyname')
const getrole = document.querySelector('.role');
const gettestimonial = document.querySelector('.testimonial');

const testimonialdatas = [
    {
        name:"Rich Star Restaurant",
        position:"Our Outlet",
        text:"lorem"
    },

    {
        name:"48 Sky Bar Cafe",
        position:"Our Partner",
        text:"lorem"
    },

    {
        name:"Beach Hotel",
        position:"Our Outlet",
        text:"lorem"
    },

    {
        name:"Cold Land Swimming Pool Client",
        position:"Our Outlet",
        text:"lorem"
    },

    {
        name:"Rich Star Restaurant",
        position:"Our Outlet",
        text:"loremLorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil laboriosam illum, officia autem vero aliquid, consequuntur at enim blanditiis, omnis voluptatum deleniti quia. Quidem distinctio reprehenderit quo corrupti illo ratione!"
        
    },
];

let idx = 0;
// console.log(testimonialdatas[idx]);
function updatetestimonial(){
    // getcompanyname.textContent = testimonialdatas[idx].name;
    // getrole.text = testimonialdatas[idx].position;
    // gettestimonial.textContent = testimonialdatas[idx].text;

    const {name,position,text} = testimonialdatas[idx];
    // console.log(name);
    // console.log(position);
    // console.log(text);

        getcompanyname.textContent =name;
    getrole.text = position;
    gettestimonial.textContent =text;

    idx++;

    if(idx > testimonialdatas.length -1){
        idx = 0;
    }
}

updatetestimonial();

setInterval(updatetestimonial,10000);


// End Testimonials Section 


//End Javascript Area

//21PP

// 3TM 