// //Start jquery Area 
// $(document).ready(function(){
//     //Start Room  Section 
//     $('.roompopup').magnificPopup({type:'image'});

//     //End Room Section
// });
// //End jquery Area 



// //Start Javascript Area
// // Start Header 

// //Start Navbar
// function dropbtn(e){
    
// //   document.getElementById('mydropdown').classList.toggle('show');
   
// // undefined 
// // console.log(this)
// console.log(e);
// // console.log(e.taret)
// // console.log(e.target.nextElementSibling)
// e.target.nextElementSibling.classList.toggle('show');
// }



// function dropfilter(){
//     // console.log('hay')
//     var getsearch,filter,getdropdiv,getlinks,linkvalue;
//     getsearch = document.getElementById('search');
//     filter = getsearch.value.toUpperCase();
//     // getdropdiv = document.getElementById('mydropdown');
//     // getlinks = getdropdiv.getElementsByTagName('a');
//   getlinks = document.querySelectorAll('.mydropdown a')
//     // console.log(getlinks);

//     for(var x = 0 ; x < getlinks.length ; x++){
//         linkvalue = getlinks[x].textContent || getlinks[x].innerText;
//         // console.log(linkvalue);

//         if(linkvalue.toUpperCase().indexOf(filter) > -1){
//             getlinks[x].style.display = "";
//         }else{
//             getlinks[x].style.display = "none";
//         }
//     }
// }

// //End Navbar

// //Start Banner
// //Start Auto Background
// function* genfun(){
//     var index = 8;
//     while(true){
//         yield index++;
//         if(index > 13){
//             index = 8;
//         }
//     }
// };
// var getgen = genfun();
// // console.log(getgen.next().value);
// // console.log(getgen.next().value);
// // console.log(getgen.next().value);
// // console.log(getgen.next().value);
// // console.log(getgen.next().value);
// // console.log(getgen.next().value);
// // console.log(getgen.next().value);
// // console.log(getgen.next().value);

// var getheader = document.querySelector('header');

// getheader.style.backgroundImage = `url(./assests/img/banner/banner${getgen.next().value}.jpg)`;

// function autoload(){
//     // console.log(getgen.next().value);
//     getheader.style.backgroundImage = `url(./assests/img/banner/banner${getgen.next().value}.jpg)`;
// }

// setInterval(autoload,2500);

// //End Auto Background
// //End Banner

// // End Header

// // Start Testimonials Section 
// const getcompanyname = document.querySelector('.companyname')
// const getrole = document.querySelector('.role');
// const gettestimonial = document.querySelector('.testimonial');

// const testimonialdatas = [
//     {
//         name:"Rich Star Restaurant",
//         position:"Our Outlet",
//         text:"lorem"
//     },

//     {
//         name:"48 Sky Bar Cafe",
//         position:"Our Partner",
//         text:"lorem"
//     },

//     {
//         name:"Beach Hotel",
//         position:"Our Outlet",
//         text:"lorem"
//     },

//     {
//         name:"Cold Land Swimming Pool Client",
//         position:"Our Outlet",
//         text:"lorem"
//     },

//     {
//         name:"Rich Star Restaurant",
//         position:"Our Outlet",
//         text:"loremLorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil laboriosam illum, officia autem vero aliquid, consequuntur at enim blanditiis, omnis voluptatum deleniti quia. Quidem distinctio reprehenderit quo corrupti illo ratione!"
        
//     },
// ];

// let idx = 0;
// // console.log(testimonialdatas[idx]);
// function updatetestimonial(){
//     // getcompanyname.textContent = testimonialdatas[idx].name;
//     // getrole.text = testimonialdatas[idx].position;
//     // gettestimonial.textContent = testimonialdatas[idx].text;

//     const {name,position,text} = testimonialdatas[idx];
//     // console.log(name);
//     // console.log(position);
//     // console.log(text);

//         getcompanyname.textContent =name;
//     getrole.text = position;
//     gettestimonial.textContent =text;

//     idx++;

//     if(idx > testimonialdatas.length -1){
//         idx = 0;
//     }
// }

// updatetestimonial();

// setInterval(updatetestimonial,10000);


// // End Testimonials Section 


// // Start Property Section 

// filterby('all');

// function filterby(keyword){
//     //  console.log(keyword); 
//     var getfilters = document.getElementsByClassName('filters');

//     console.log(getfilters);

//     if(keyword === 'all'){
//       keyword = ''
//     }

//     for(var x = 0; x < getfilters.length; x++){
//         // console.log(getfilters[x])
//         // console.log(getfilters[x].className.indexOf(keyword) > -1);

//         removeshowclass(getfilters[x],'show');

//         if(getfilters[x].className.indexOf(keyword) > -1){
//             addshowclass(getfilters[x],'show');
//         }

//     }
// }


// function addshowclass(ele,opt){
// //    console.log(ele)
// var getfilters = ele.className.split(" "); 
// // console.log(getfilters);

// var getopt = opt.split(" ");
// console.log(getopt);
// // console.log(getopt.length);
// // console.log(opt.length);

// for(var y = 0; y < getopt.length; y++){
//     console.log(getopt[y]);
//     // console.log(getfilters.indexOf(getopt[y]) === -1); 

//     if(getfilters.indexOf(getopt[y]) === -1){
//         // ele.classList.add(getopt[y]);
//         ele.classList += " "+getopt[y];
//     };
// };

// };

// function removeshowclass(ele,opt){
// //    console.log(ele)
// var getfilters = ele.className.split(" "); 
// // console.log(getfilters);

// var getopt = opt.split(" ");
// // console.log(getopt);
// // console.log(getopt.length);
// // console.log(opt.length);


// for(var  k =0; k < getopt.length; k++){
// //    console.log(getfilters)
// //    console.log(getfilters[0])
// //    console.log(getfilters[1])

//    while(getfilters.indexof(getopt[k]) > -1){
//     getfilters.splice(getfilters.indexOf(getopt[k]),1);
//    };


// //    console.log(getfilters);
// //    console.log(getfilters.join(' '));  //to string  

//    ele.className = getfilters.join(' ');
//    console.log(ele.className)
// };

// var getfiltercontrol = document.getElementById('filtercontrol');
// var getlis = getfiltercontrol.getElementsByClassName('list-inline-item');

// for(var i =0; i < getlis.length;i++){
//     getlis[i].addEventListener('click',function(){
//        var curractive = document.querySelector('.activeitems');
//        curractive.className = curractive.className.replace(' activeitems','');
//        this.className += ' activeitems'
//     })
// }
// }
// // End property Section 

// //End Javascript Area


// // const x = ['filter','room','show']
// // const y = x.splice(1,3);
// // console.log(y)


// // console.log(x.index('show') > -1);
// // console.log(x.splice('show'),1);
// //         //    show to next one place 








// Start Jquery Area
$(document).ready(function(){
	// console.log('hi');

	// Start Room Section

	$('.roompopup').magnificPopup({type: 'image'});
	// End Room Section
})
// End Jquery Area



 // Start Javascript Area

// Start Header Section

// start nav bar
    function dropbtn(e){
    	// document.getElementById('mydropdown').classList.toggle('show');

        // undefined
        // console.log(this);
        // console.log(e);

        // console.log(e.target);
        // console.log(e.target.nextElementSibling);

        e.target.nextElementSibling.classList.toggle('show');
    }


    function dropfilter(){
    	// console.log('hey');
    	var getsearch,filter,getdropdiv,getlinks,linkvalue;
    	getsearch.document.getElementById('search');
    	filter = getsearch.value.toUpperCase();
    	// getdropdiv = document.getElementById("mydropdown");
    	// getlinks = getdropdiv.getElementByTagName('a');
        getlinks = document.querySelectorAll('.mydropdowns a');
    	// console.log(getlinks);

    	for(var x = 0 ; x < getlinks.length ; x++){
    		// linkvalue = getlinks[x].textContent;
    		linkvalue = getlinks[x].textContent || getlinks[x].innerText;
    		// console.log(linkvalue);

    		if(linkvalue.toUpperCase().indexOf(filter) > -1){
    			getlinks[x].style.display = "block";
    		}else{
    			getlinks[x].style.display = "none";
    		}
    	}

    	// console.log(filter);
    }
// end nav bar


// start auto background

function* genfun(){
	var index = 8;

	while(true){
		yield index++;

		if(index > 13){
			index=8;
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

     var getheader = document.querySelector('header');
     getheader.style.backgroundImage = `url("./assets/img/banner/banner8.jpg")`;


     function autoload(){
     	// console.log(getgen.next().value);

     	getheader.style.backgroundImage = `url("./assets/img/banner/banner${getgen.next().value}.jpg")`;
     }

     setInterval(autoload,2500);

// end auto background

// End Header Section



// Start Testimonials Section
    const getcompanyname = document.querySelector('.companyname');
    const getrole = document.querySelector('.role');
    const gettestimonial = document.querySelector('.testimonial');

    const testimonialdatas = [
       {
        name:"Rich Start Restaurant",
        position:"Our Outlet",
        text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
       },
       {
        name:"48 Sky Bar Cafe",
        position:"Our Partner",
        text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
       },
       {
        name:"52 Beach Hotel",
        position:"our Branch",
        text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
       },
       {
        name:"Cool Land Swimming Pool",
        position:"Our Clinet",
        text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
       },
       {
        name:"Chaung Thar SPA",
        position:"Our Business",
        text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
       }
    ];


 let idx = 0;

 // console.log(testimonialdatas[idx]);
 // console.log(testimonialdatas[idx].name);
 // console.log(testimonialdatas[idx].position);
 // console.log(testimonialdatas[idx].text);

 function updatetestimonial(){

    // getcompanyname.textContent = testimonialdatas[idx].name;
    // getrole.textContent = testimonialdatas[idx].position;
    // gettestimonial.textContent = testimonialdatas[idx].text;

    const {name,position,text} = testimonialdatas[idx];

    // console.log(name);
    // console.log(position);
    // console.log(text);


    getcompanyname.textContent = name;
    getrole.textContent = position;
    gettestimonial.textContent = text;

    idx++;

    if(idx > testimonialdatas.length - 1){
        idx = 0;
    }

 }
 
 updatetestimonial();  // 0 
 setInterval(updatetestimonial,10000);  // 1 2 3 4

// End Testimonials Section



// Start Properties Section

  filterby('all');
   
   function filterby(keyword){

     // console.log(keyword);

     var getfilters = document.getElementsByClassName('filters');

     // console.log(getfilters);


     if(keyword === 'all'){
         keyword = '';
     }

     for(var x = 0 ; x < getfilters.length ; x++){
        // console.log(getfilters[x]);

        // console.log(getfilters[x].className.indexOf(keyword));
        
         removeshowclass(getfilters[x],'show');


        if(getfilters[x].className.indexOf(keyword) > -1){
            addshowclass(getfilters[x],'show');
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

        for(var y = 0 ; y < getopt.length ; y++){

            // console.log(getopt[y]);

            console.log(getfilters.indexOf(getopt[y]) === -1);

            if(getfilters.indexOf(getopt[y]) === -1){
                // ele.classList.add(getopt[y]);
                ele.className += " "+getopt[y];
            }
        }
   }

   function removeshowclass(ele,opt){

       var getfilters = ele.className.split(" ");
       // console.log(getfilters);


        var getopt = opt.split(" ");
        // console.log(getopt);
        // console.log(getopt.length);

        for(var k = 0 ; k < getopt.length ; k++){

            // console.log(getfilters);
            // console.log(getfilters[k]);
            // console.log(getfilters[0]);
            // console.log(getfilters[1]);
            
           // console.log(getfilters.indexOf(getopt[k]) > -1);

            
            while(getfilters.indexOf(getopt[k]) > -1 ){
                getfilters.splice(getfilters.indexOf(getopt[k]),1);
            }
        }

        // console.log(getfilters);
        // console.log(getfilters.join(' '));

        ele.className = getfilters.join(' ');
        console.log(ele.className);
   }


   var getftcontrol = document.getElementById('filtercontrol');
   var getlis = getftcontrol.getElementsByClassName('list-inline-item');

   for(var i = 0 ; i < getlis.length ; i++){
     getlis[i].addEventListener('click',function(){
        var curractives = document.querySelector('.activeitems');
        curractives.className = curractives.className.replace(' activeitems','');
        this.className += " activeitems";
     })
   }

// End Properties Section



// End Javascript Area




// 20AB
// 3TM
