//const name="sashi";//ES5 way
//name="10";
//console.log(name);//es5
//in es6 2015 two new keywords i.e., let and const


// let age=10.1;
// let otherway= new Number(1);
// let converted=otherway.valueOf();
// // console.log(typeof age);
// console.log(typeof otherway);
// console.log(typeof converted);

// var names= ["santo",30,undefined,true,null];
// console.log(names[0]);
// console.log(names.length);
// console.log(typeof names);
// for(let i=0;i<names.length;i++){
//     console.log(names[i]);
// }

// var lang=["java", "python", "nodejs", "angular"]
// console.log(Array.isArray(lang));

// var employees=[
//     {
//         name: "xyz", 
//         age:21,
//         company :'x'
//     },
//     {
//         name: "xy2", 
//         age:22,
//         company :'abc'
//     }
// ]    
//  console.log(employees);


 //freezing or how to avoid overriding obj properties
 
// var emp= {
//         name: "QWWERR", 
//         age:21,
//         company :"TRER"
//     }
//     Object.freeze(emp);
                         
// emp.name="santosh";
// emp.company="ABC";
// console.log(emp);

//CONSTRUCTOR WAY OF CREATING OBJ
// let data= new Object();


// data.name="santhosh";
// data.salary=30
//NOTE- we can use reserved keyword as obj properties example
//CONCATINATION ODF 2 OBJ

// var obj= {
//     for: "wer",
//     while: "cskk",
//     if :"rcb"
// }

// var obj2 ={
//     name: "soma",
//     about: "waste fellow",
//     salary:"no job"

// }
// var concatination=[obj,obj2 ];
// console.log(concatination)

//MERGING TWO OBJ

    // var obj= {
    //    for: "wer",
    //      while: "cskk",
    //      if :"rcb"
    //  }
    
    //  var obj2 ={
    //      name: "soma",
    //      about: "waste fellow",
    //      salary:"no job"
    //  }

    //  var obj3 ={
    //      ...obj,
    //      ...obj2
    //  }
    //  var obj4 = Object.assign(obj2,obj);
    //  console.log(obj3);
    //  console.log(obj4);

//if data is common its in book...

// let users ={
//     name: "don",
//     salary :30000,
//     skills :[ "java", "nodejs" , "kava"],
//     data: {
//         number:12334,
//         address:"bhovi colony"
//     },
//     getInfo(){
//         console.log(`my name is ${this.name} and gets a salary of ${this.salary} thnak u`);
        
//     }

// }
// console.log(users.getInfo());


// let name=users.name;
// let salary=users.salary;
// let skills=users.skills;
// let number=users.data.number;
// console.log(users.data.address);
// console.log(skills);
// console.log(number);
    
//HOW TO CONVERT OBJECT TO ARRAY
// let data={
//     name:"a",
//     com:'b',
//     sal:200
// }
// console.log(typeof data);
// let arraydata=Object.entries(data);
// console.log(Array.isArray(arraydata));

//HOW TO CONVERT TO ARRAY

// let data={
//     name:"a",
//     com:'b',
//     sal:200
// }

// let keys=Object.keys(data);
// let values=Object.values(data);
// console.log(keys);
// console.log(values);

//FUNCTION -set of instruction

// function demo(){
//   console.log('HEllO this is calling part');
// }//called part

// demo();// calling

// -----------

// let a =prompt("");
// let b =prompt("");
// alert();
// confirm();
// document.write();

//INNER HTMLIN BOOK

//CONNECTING TO HTML PAGE AND TAKING THE VALUES FRON USER

// function add(){
//     let firstno=parseFloat(document.getElementById('firstno').value);
//     let secondno=parseFloat(document.getElementById('secondno').value);
//     document.getElementById('result').value=firstno+secondno;
// }

//NEXT TOPIC IN BOOK
// function username(name){
//     return name;
// }
//      document.write(username("santho"))

//FUNCTION WITH ARGUMENT OBJECT

// function test(){
//     return arguments;
// }

// console.log('shashi','manu','keerthi');
//SHIVRATHRI

// function Users(name="santho" , company ="CGI"){
//     return name + company;
// }
    
// console.log(Users)
// IIFE
// (function(){
//     alert("iiFe")
// })()

// IIFE ES6 WAY
// {
//     let data="hello"

// }
// {
//     const data2="hello"
// }

// FUNCTION EXPRESSION OR VARIABLE DECLARATION FUNcTION

// var VDF=function(){
//     console.log("hello")
// }
// VDF();

// FUNCTION HOISTING
//  test();
// function test(){
//     console.log("hello");
    
// }
//    note : functional exp wont work
// test();
// var test= function(){
//     console.log("Hello");
// }
// ARROW FUNCTION ***********************************************************
// var test= function(){
//     console.log('normal function here');
    
// };
// var testarrowfunc=()=> {
//     console.log('this is arrow func');
    
// };
// testarrowfunc();

//ES6 way
// note : if the code is oly single line then use this shortcut
// let test= ()=> 'returning single line code';
// console.log(test())
// note: if there are no parameters remove () and replace with _
// let test = _=>'HELLO'
// console.log(test());
//for one parameter and single code
// let user2 = name => name;
// console.log(user2('bposs'));

// for more than one parameter
// let users2= (name,company) => name + company;
// console.log(users2("boss","gif"));

// let data = function(){
//     return[...arguments].toString();
// }
// console.log(data('raju','xyz'));
// // note :u will get error coz AF doesnt hav argument oj

// let mata=() => {
//     return[...arguments].toString();
// }
// console.log(data('raju','xyz'));


// note: AF doesnt bind this keyword instead use obj ref variable

// let user={
//     name:'sanrto',
//     age:22,
//     company:'google',

// }
// // TO CREATE A CLOCk

// let time= document.getElementById('clock');
// function clock() {
    // setInterval(_ =>{
//         let date=new Date();//Date Obj
//     let hours=date.getHours();
//     let minutes=date.getMinutes()
//     let secs=date.getSeconds();
//     let AMORPM = date.getHours() > 12 ? 'PM': "AM";
//     time.innerHTML=`<h1>${hours} : ${minutes} : ${secs} ${AMORPM}</h1>`;
//     },1000)
// }
// clock();
// //starting time //setInterval(_=>{
//     //                                    let date =new date().tolocaleTimeString();document.write(date)},5000)
// clearTimeout();//clearing time



// ARRAY METHODS///IMP
// let array=["java","python","Angular","Javascript","es6","typescript"];
// array.push("react");//to add at last
// array.unshift("swift");//to add at beginning
// array.pop();//removes the last element from array
// array.shift();//removes the first element from array

// splice() *******************v.imp
//splice(position,no of ele to delete,add/Insert)
// array.splice(2,1);//deletes python
// array.splice(2,3);//deletes python,angular and js
// array.splice(2,0,"aws","docker");//adds the element in respective position without deleting any elements
// array.splice(2,2,"aws","docker");//adds the element in respective position by deleting angular and js .
// array.splice(1);
// console.log(array);


// ABSENT
// reverse() 
// only array has the reverse() ,but string doesnt have reverse()
// let str = "typescript";
// let s= str.split("");
// let test=s.reverse().join("");
// console.log(test);
//OR
//  let str="javascript";
//  let test=[...str].reverse().join("");
//  console.log(test);
//OR
// function test (str){
//     return [...str].reverse().join("");
// }
//  console.log(test("javascript"));
// OR
// let test= str => [...str].reverse().join("");
// console.log(test("pokemon"));

// forEach()
//  a function that accepts upto 3 arguments foreach calls the callback fn one time
//   foreach Element in the Array performs the specifieed action for each Element in the Array.
//   note: this method is oly used with Array.
   
//   let lang=["nodejs","java", "python", "react", "ruby", "angular"];

//   lang.forEach((value,index,array) => {
//       console.log(array);
//       console.log(value);
//       console.log(index);
//   });
// note: foreach() will not create new Array it override existing Array.


// Map()
// es6 map method will create new Array.
//  let users=["manju","raju","anil","manu","majnu"];
//  let num=[10,100,1000,40,404]

//  let each= users.forEach(user =>user);
//  let map= users.map(user=>user);
//  console.log(each);
//  console.log(map);

// ********IMP difference b/w map and foreach
// let's first
// foreach()-> executes a provided function once for array Element.
// map() -> creates a new array with the result of of calling a provided function on every element in the calling array.
// what exactly does this mean?
// well, the forEach() doesnt actually return anything (undefined) .it simply calls a provided fn on each element in your array . This callback is .....in shafi notes

 



// ABSENT

// let array1 =["nodejs","java", "python", "react", "ruby", "angular"];
// let sortedarray= array1.sort();

// console.log(sortedarray);

// ****************v imp 
// ascending
// let num=[100,4,70,20,50,40,600,240];
//   num.sort ((a,b)=> {
// //    console.log(a);
// //    console.log(b);
//    return a-b;
// });
// console.log(num);
// descending
// let sort2=num.sort((a,b) => a+b);
// console.log(sort2);

// let array3= ["nodejs","java", "python", "react", "ruby", "angular"];

// let test=[...array3,"java","nodejs1", ["python","ruby"]];

// let data=test.flat();//OUTDATED way
// console.log(data);
 

// find()
// let ages=[10,40,60,30,32,52,90];
// let index= ages.find(age => age>50);

// console.log(index);
// defn of find() 
// it returns the value of the first ele in the provided array that satisfies the provided testing func
// syntax : arr.find(callback(element[,index[,array]])[,this arg])

// the find method executes the callback func once for each index of thr array until the 
// callback returns a truthy value.If so, find immediately returns the value of that element.Otherwise....continues in som notes
// findIndex: instead of value it shows the index 
// note: indexOf and lastindexOf works both for array and STRING
// note: indexOf-    returns position of first occurence od substring.
    //  lastindexOf- returns position of last occurence od substring
// let ages=[10,40,60,30,32,52,90];
// let index= ages.findIndex(age => age>50);
// console.log(index);
 

// let str="javascript and nodejs are part of nodejs etc";
//  let lastindex= str.lastIndexOf("nodejs");
//  console.log(lastindex);
 


// slice()-***********imp
// the slice() returns a shallow copy of a portion of an array into a new array object selected from begin to end(end not included)
//  where begin and end represent the index value of items in the array.The original array will not be modified
// syntax: slice(start(index value),end(index value));
// let names=["soma", "teja", "ravi", "safi", "santio"];
// let slicemeth=names.slice(0,3);
// console.log(slicemeth);


// task to reverse

// let str="javascriptwithstudents";
//  let str2= [...str];
//  let str3= str2.slice(0,10);
//  let str4= str3.reverse();
//  let str5= str2.slice(10,23);
//  console.log([...str4,...str5].join("/"));

// includes()
// it is used to check the value is present and return a boolean value
// it determines whether an array includes a certain value among its entries, returning true or false as appropriate.
// A boolean which is true if the value valueToFind is found within the array (or the part of the array indicated by 
// the index from index, if specified).
// Values of zero are all considered 
// let users=["anu", "manu", "siri", "alexa"];
// if (users.includes("siri")){
//     console.log("siri exists");
// }
// else{
//     console.log("siri doesnt exist");
// }


// String methods

// let str="javascript";
//  let uc=str.toUpperCase();
//  let lc=str.tolowerCase();
// console.log(uc);
// console.log(lc);

// charAt()
// returns the charecter at specified index
// let str= "javascript";
// console.log(str.charAt(0));

// charCodeAt()
// returns the charecters ASCII values of specified index in a string
// let str="javascript";
// console.log(str.charCodeAt(1));
// the method returns a UTF-16 code(an integer between 0 and 65535)


// replace()
// let str="jspiders is in btm 1st stage,btm 2nd stage,btm 3rd stage"
// let test= str.replace("btm","BSK");//replaces only the first occurence
// let test2= str.replace(/btm/g,"BSK");//replaces globally (/btm/g is regular Expression where g=globally)
// console.log(test2);
// The replace() returns a new String with some or all matches of a pattern replaced by a replacement.
// the pattern can be a String or a RegExp, and the replacement can be a String or a function to be called for each match.
//  if pattern is a String,
// only the first occurence will be replaced.
// syntax: var newstr=str.replace(/regexp/,substr,newsubstr)


// repeat()
// it constructs and returns a new string which contains the specified number of copies of the string on which 
// it was called,concatinated together.
// syntax: str.repeat(count);
// let str="javascript😃";
// document.write(str.repeat(1000));

// match()
// retrieves the result of matching a string against a regular expression
// syntax: str.match(regExp);
// var str= "JAVASCRIPT and nodejs, angular, react, AWS";
// let regEx=/[A-Z]/g;
// let total=str.match(regEx).join("");
// console.log(total);


// substring()
// note: substring() and slice() are almost same but slice accepts -ve values
// let str="javascript and nodejs";
// let test=str.substring(4,0);
// note : in substring() start and end values are automically swapped by engine
// let slice= str.slice(0,4);
// console.log(test);
// console.log(slice);
// the substring() extracts the charecters from a string , b/w two specified numbervalues ,and returns the new substring.
// this method extracts the charecters in a string between start and end ,not included end .
// if start is greater than end , this method will swap thw two arguments, meaning str.substring(1,4) == str.substring(4,1).
// if either start or end is less than 0,it is treated as if it were 0.
// note:The substring() method doesnot change the original string.

// slice()
// it extracts parts of a string and returns the extracted parts in a new string.use the start and end parameters to specify the part of the string you want to extract.
// The first charecter has the position 0, the seconfd has position 1, and so on.
// tip: use a negative number toselect from the end of the string.

// substr()
// note: some browser doesnt support substr();
// extracts parts of a string , begining at the charecter at the specified position, and returns the specified no of charecters.
// Tip:To extract charecters from the end of the string, use a -ve start Number(this does not work in IE 8 and earlier).
// note: the substr() method does not change the original string.


// trim()
// it removes the white space 
// let str="         💯javascript and nodejs       ";
// let test= str.trim();// removes both start and end spaces
// let test= str.trimStart();removes starting spaces 
// let test= str.trimEnd();removes ending spaces
// string includes method-> Returns true if searchString appears as a substring of the result of converting this object to a String, at one or more positions that are greater than or equal to position; otherwise, returns false.
// if(str.includes('javascript')){
//     console.log("javascript here");
// }
// else{
//     console.log("no javascript here");
    
// }

// startwith() & endsWith()
// returns a boolean value if the string has the specified starting elements.
// startWith()->determined whether the string begins with the charecters of a specified string, returning true or false as appropriate.
// endsWith()->determined whether the string ends with the charecters of a specified string, returning true or false as appropriate.

// let str="javascript and nodejs";
//     if(str.startsWith("j")){
//         console.log("javascript here");
//     }
//     else{
//         console.log("no javascript here");
//     }

    // let str="javascript and nodejs";
    // if(str.endsWith("s")){
    //     console.log("javascript here");
    // }
    // else{
    //     console.log("no javascript here");
    // }


    // let test = window.screen.width;
    // let test1 = window.screen.height;
    // let test2 = window.screen.colorDepth;
    // let test3= window.screen.orientation;
    // let test4= window.screen.pixelDepth;
    // let test5= window.screen.availHeight;
    // let test6= window.screen.availWidth;
    // console.log(test + test1 + test2 + " "+test3 +" "+ test4 +" "+ test5 +" "+ test6);

    // The window property screen returns a reference to the screen object associated with the window.The screen object, implementing the screen interface, is a special object for inspecting properties of the screen on whch the current window is being rendered.
    
//     let test= window.navigator.geolocation;
//     let test1= window.navigator.language;
//     let test2= window.navigator.appCodeName;
//     let test3= window.navigator.appName;
//     let test4= window.navigator.userAgent;
//     let test5= window.navigator.platform;
//     let test6= window.navigator.appVersion;
//     let test7= window.navigator.cookieEnabled;
//     let test8= window.navigator.javaEnabled;
//     let test9= window.navigator.mediaDevices;
//     let test10= window.navigator.onLine;
//     let test11= window.navigator.oscpu;
//     let test12= window.navigator.vendor;
//     let test13= window.navigator.storage;
    

// The javscript navigator object is used for browser detection. it can beused to get browser information such as appname, appCodeName,userAgent Etc.
// The navigator object is the window property, so it can be accessed by: window.


// window.navigator.geolocation

// let template= document.getElementById('template')

// function getLocation(){
//     if(window.navigator.geolocation){
//         window.navigator.geolocation.getCurrentPosition(showPosition);
//     }
//     else{
//         template.innerHTML= `geolocation is not working here`
//     }
// }

// function showPosition(position) {
//     template.innerHTML= `Latitude<h1>${position.coords.latitude}</h1>
//                          Longitude <h1>${position.coords.longitude}</h1.`

// }


// window.navigator.platform
// to get the operating  info
//   let test= window.navigator.platform;
//   let test= window.navigator.userAgent;
//   let test= window.navigator.language;
//   let test= window.navigator.storage;
//   let test= window.navigator.appVersion;
//   let test= window.navigator.appName;
//   let test= window.navigator.appCodeName;
 // let test= window.navigator.onLine;//while live chat online
 // let test= window.navigator.cookieEnabled;//checks wheater cookie enabled or not
// cookie is local storage it captures user info while interacting with web
//   let test= window.navigator.vendor;
//   let test= window.navigator.javaEnabled;
//   let test= window.navigator.mimeTypes;//checks the file type ex:pdf, utf-16 .js etc..,
  //  console.log(test);


//   HISTORY OBJECT

// window History forward
// The History forward() method in HTML is used to load the next URL in the history list. It has the same practical application
// as the forward button in the web browsers. This method will not work if the next page will not exist in the history list. 
// // window History back
// The back() loads the previous URL in the history list
// This is the same as clicking the 'back button' in your BhxBrowser.
// Note:This method will not work if the previous page does not exist in the history

// let test = window.history.length;//no of history pages
// let test= window.history.forward;// to forward history
// let test= window.history.back;//to go backward in history
// let test=window.history.go;
//loads a specific page from the session history. you can use it to move forward and backward through the history depending on the value of the parameter.
// console.log(test);


// LOCATION OBJECT

// The location.assign() method causes the window to load and display the document at the URL specified.
// The port property sets or returns the port number the server uses for a URL.
// The location.reload() method reloads the current URL, like the refresh button.
// The protocol property sets or returns the protocol of current URL,including colon;

// let test= window.location.protocol;
// let test= window.location.href;
// let test= window.location.host;
// let test= window.location.hostname;
// let test= window.location.origin;
// let test= window.location.pathname;
// let test= window.location.port;
//vvIMP*****
// let test= window.location.assign("https://google.com/login");redirects to the login page
// let test= window.location.reload;//used to reload page

// console.log(test);


// for of loop ES6
// for/of lets you loop over data structures that are iterable such as Arrays, Strings, Maps, NodeLists, and more.
//  variable- For every iteration the value of the next properly is assigned to the variable.Variable can be declared with const, let, or var
// let arr=["nodejs","java", "python", "react", "ruby", "angular"]

// for(let x of arr){
//     console.log(x);
    
// }

// for object use for in loop
// a for in loop iterates over the properties of an object in an arbitrary order 
// The for/in statement loops through the properties of an object.
// The block of code inside the loop will bee executed once for each property

// let users={
//     name:"raju",
//     age: 20,
//     company:"ABC"
// }
// for(x in users){
//     console.log(`${x}:${users[x]}`);
//     console.log(`${x}`);
// }
// -------------------------------------------------------------------------------------------------------------------------
// DOM(Document Object Model) is a programming interface for HTML and XML documents. 
// it represents the page so that programs can change the document structure,style and content. ...
//  The Document Object Model represents that same document so it can be manipulated.
// note: with the help of DOM u can modify HTML, CSS,attributes etc and you can change however u want.

// Why dom is used->(google it) The DOM is a W3C(world Wide Web Consortium) standard.The DOM...

// let test= document.all; //  shows all root elements i.e contents of html

// let images= document.images;// add some 10 images in html
// Array.from(images).forEach(e => console.log(e));
// OR
// [...images].forEach(element => console.log(element));
// OR
//  for (let img of images) {
//      console.log(img);
//  }
// OR
// [...images].map(x => console.log(x));

// to get oly src attribute value
// Array.from(images).forEach(e => console.log(e.src));


// document.body.style.background="red";
// document.body.style.padding= "40px";
// document.body.style.border = "10px solid #111";
// document.body.style.margin = "50px";

// class
// document.body.className="newclass";//for single class name use class name and overrides the existing class
// for multiple
// document.body.classList.add("bodyclass", "container");// how to add class through JS
// document.body.classList.add("container");//adding bootstrap class
// document.body.classList.remove("bg-primary");
// ID
// document.body.id="idadd";//to add id

// to access each and individual element
// imp
// document.getElementById();
// getElementById() returns an element object representing the element whose id property matches the specified string .
// Since element IDs are required to be unique if specified,
//  they are a useful way to get access to a specific element quickly.
// // document.getElementsByTagName();
// document.getElementsByClassName();


// let block= document.getElementById("mainBlock");
// console.log(block);

// block.style.background="black";
// block.style.color="white";
// block.style.padding="10px";
// block.style.width="1200px";
// block.style.margin="10px auto";
// block.style.textAlign="center";
// block.style.fontSize="20px";
// // add class
// block.classList.add("raju", "hisgf");
// block.innerHTML="this is innerHtml";

// let block = document.getElementById("mainBlock");
// let test = block.getAttribute("id");
// let title=block.getAttribute("title");
// console.log(test);
// console.log(title);

// let setAttribute = block.setAttribute("class", "bg-danger")
// let getAttribute=block.getAttribute("class");
// console.log(setAttribute);
// console.log(getAttribute);

// DOM get and set attributes..in photo

// function remove(){
//     let demo= document.getElementById("demo");
//     demo.remove();
// }
// let demo= document.getElementsByClassName("demo")
// // console.log(typeof demo);//Array like object

// // how to add class name through JS

// let classdata=[...demo].forEach(element => element.classList.add("classname"));
// console.log(classdata);


// HOW TO ADD DYNAMIC CLASS NAMES

// let links= document.getElementsByTagName("a");

// for(let i=0;i<links.length;i++){
//     links[i].className="link-"+i;
// }


// ************v IMP
// querySelector()--used oly for one element
// let links=document.querySelector('a');


// // querySelectorAll()--returns NodeList************* whereas jsselectors returns HTML collection
// let odd=document.querySelectorAll('a:nth-child(odd)');
// let even=document.querySelectorAll('a:nth-child(even)');

// odd.forEach(x=>x.classList.add('odd'));
// even.forEach(x=>x.classList.add('even'));//then u can style it in css individually



// DOM EVENTS
// addEventListner
// let demo=document.getElementById('demo')

// demo.addEventListener('click',()=>{
//     console.log("Listner is working");
//     alert("hello");
        
// })
// let btn= document.getElementById('demo');

// btn.addEventListener("click",()=>{
//     let list =document.querySelectorAll('li');
//     list.forEach(li=>li.classList.add('addcolor'))

// })

// let odd=document.getElementById("odd");
// let even=document.getElementById("even");
// let listOdd=document.querySelectorAll("li:nth-child(odd)");
// let listEven=document.querySelectorAll("li:nth-child(even)");

// odd.addEventListener("click",()=>{
//     listOdd.forEach(odd=> odd.classList.add("danger"));
//     listEven.forEach(even=> even.classList.remove("success"));

// });
// Even.addEventListener("click",()=>{
//     listEven.forEach(even=> even.classList.add("success"));

//     listOdd.forEach(odd=> odd.classList.remove("danger"));

// })


// ------------------------------------------------------------------


// let ul= document.querySelector("#menulist");
// // ul= ul.nodeName;
// // ul=ul.nodeType;

// let test=ul.getAttribute("id");
// let test1=ul.nodeType;//gives the type of node
// let test2=ul.nodeName;//gives node name i.e., nadename=ul
// let test3=ul.parentElement;//gives the parent element
// let test4=ul.childNodes;//o/p-->Nodelist//includes line break as text and gives child element
// let test5=ul.children;//o/p-->HTML collections// doesn't includes line break as text and gives child element

// console.log(test4);
// NOTES FOR ABOVE
// IN WHATSAPP GROUP


// let menuList=document.querySelector("#menulist").children[3];
// // console.log(menulist);

// menuList.addEventListener("click", e =>{
//    e.preventDefault();
//  menuList.children[1].classList.toggle('show');
  
//  })
 

//  preventDefault method tells the user agent that if the event does not get explicitly
// handled, its default action should not be taken as it normally would be. The event continues
// to propogate as usual, unless one of its event listners calls stopPropagation() or
// stopImmediatePropagation(), either of which terminates propagtion at once
// syntax: event.preventDefault();

// ------------------------------------------------------------------------------
//  CREATING FORM WITHOUT HTML


// let form=document.createElement('form');
// form.setAttribute("method","get");
// form.setAttribute("action","");
// let input =document.createElement("input");
// input.setAttribute("type","text");
// input.setAttribute("placeholder","username");
// let button=document.createElement("button");
// button.textContent="SUBMIT";

// form.appendChild(input);
// form.appendChild(button);
// document.body.appendChild(form);

// ----------------------------------------------------------------
// SATURDAY
// mouse and keyboard events
// let username= document.getElementById("username");
// let btn= document.getElementById("btn");

// btn.addEventListener("mouseenter",(e)=>{
//     e.preventDefault();
//     console.log("mouse enter😀");
//     btn.style.background="red";
//     // keep adding all css styles that u want
    

// })

// btn.addEventListener("mouseleave", (e)=>{
//     e.preventDefault();
//     console.log("mouse leave😍");
//     btn.style.background="green";
//     // keep adding all the css styles that u want
// })

// keyboard event

// let input = document.getElementById("username");

// input.addEventListener("keyup", (e)=>{
//     console.log(e.target.value);
// })

// // how to achieve the above using jquery

// jQuery(document).ready(function(){
//     jQuery("#username").on("keyup",(e)=>{
//         // console.log(e.target.value);
//         let test= jQuery(this).val();
//         console.log(test);
//    })
// })

// // LOGIN FORM
// let form= document.getElementById("form");
// let errors = document.getElementById("errors");
// let username1 = document.getElementById("username");
// let password = document.getElementById("password");



// form.addEventListener("submit",(e)=>{
//     let messages =[];

//     if(username1.value === "" || username1.value === null) {
//         messages.push(`<p class="alert alert-danger">USERNAME REQUIRED!!!</p>`)
//     }
//     if(password.value === "" || password.value === null) {
//         messages.push(`<p class="alert alert-danger">password REQUIRED!!!</p>`)
//     }
    
//     if(messages.length >0){
//        e.preventDefault();//preventing default only at the time of errors
//        errors.innerHTML = messages.join("")
//     }
//     if(password.value.length < 5){
//         e.preventDefault();
//         messages.push(`<p class="alert alert-danger">min length REQUIRED!!!</p>`)
//     }
    

// })//FORM SUBMITTING

// --------------------------------------------------------------------------------

// JAVASCRIPT PROMISES--***********vvvvimp
// defn google-promises are used to handle..........
// 3 states of promises
// 1.pending-result:undefined 2.resolved/fullfilled-result:value 3.rejected-result:error
// imp-

// let promises= new Promise((resolve,reject)=>{
//     console.log(resolve);
//     console.log(reject);
// });
// console.log(promises);
// o/p- Promise__proto__: Promise[[PromiseStatus]]: "pending"[[PromiseValue]]: undefined  (index):224 Live reload enabled.


// // resolve and reject can also be x and y
// let promises = new Promise((resolve,reject) =>{
//     let carclean=true;
//     if(carclean)
//     resolve("car cleaned");
//     else
//     reject("car not cleaned");
// });
// promise are executed by then and catch
// promises
// .then(data =>{
//     console.log(data);
    
// })
// .catch(err=> console.log(err));
// // console.log("test");//executes first coz of asynchronous

// The promise object represent sthe  eventual completion (or failure) os an asynchronous oncompassneedscalibration, and its resulting IDBCursorWithValue.
// A promise is in one these states:
// pending: initial state, neither fullfilled nor rejected.
// fullfiled: meaning that the operation completed successfullly .
// rejected:meaning that the operation failed.

// promise resolved() method:
// if the value is a promise then promise is returned. if the value has a "then" attached to the promise , then the returned promise will follow that "then" to till the final state.
// The promise fullfilled with its value will be returned.
// The  promises reject() method returns a promise obj that is rejected with a given reason.

// example2
// let promises= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("successfully rendered")
//     },10000);
//     setTimeout(()=>{
//         reject(" not successfully rendered")
//     },5000);
// });
// promises.then(data => console.log(data)).catch(err => console.log(err));

// let raju = new Promise((resolve, reject)=>{
//     resolve("raju is working");
// });
// let pari = new Promise((resolve, reject)=>{
//     resolve("pari is working");
// });
// let teja = new Promise((resolve, reject)=>{
//     // resolve("teja is working");//try this->// 
//     // reject("teja is not working")
// });
// // note in promise.all if one param is rejected oly reject part executes
// note in promise.race it is opp to promise.all even if there are many reject and resolve oly one first faster(resolve) works
// Promise.all([raju,pari,teja]).then(data=>console.log(data)).catch(err=>console.log(err));


// let raju = new Promise((resolve, reject)=>{
//     resolve("raju is working");
// });
// let pari = new Promise((resolve, reject)=>{
//     reject("pari is working");
// });
// let teja = new Promise((resolve, reject)=>{
//     reject("teja is working");//try 2resolve// 
    
// });
// Promise.all([raju,pari,teja]).then(data=>console.log(data)).catch(err=>console.log(err));


// ES6 SETS
// let users=["manu","santhu","santhu", "anu","shashi"];
// let mySet=new Set(users)
// mySet.add("raja");
// mySet.delete("shashi");
// mySet.clear();
// let data=mySet.entries();
// let keys=mySet.keys();
// let values=mySet.values();
// let has=myset.has("shashi");
// console.log(data);
// console.log(keys);
// console.log(values);
// console.log(has);
// notes in photo

// map
// let myMap= new Map([["name","santhu"],["salary","30000"],["company","testyantra"]]);
// myMap.set("age","60");
// // let has= myMap.has("name");
// let y= myMap.delete("name");
// let x=myMap.
// console.log(myMap);
// console.log(y);

// let data=mySet.forEach(x=>console.log(x));
// console.log(mySet);
// let totalSets=[...mySet];
// console.log(totalSets);

// WeakSet and WeakMap
// let weakRaju= new WeakSet();

// let Raju={
//     name:"Raju",
//     age:20,
//     company:"ABC",
//     salary:1000
// };
// let Raju2={
//     name:"Raju2",
//     age:21,
//     company:"ABC5",
//     salary:10000
// };
// weakRaju.add(Raju);
// weakRaju.add(Raju2);


// -------------------------------------------------


// DESTRUCTURING

// ARRAY destructuring
// example1
// let arry=["umesh","shashi","soma","teja","shafi"]
// let [umesh,shashi,gandu,teja,shafi]=arry;
// or
// let [,,,,shafi]=arry
// let [x,y,z]=arry;
// let [x]=arry;console.log(x);//o/p->umesh
// console.log(x,y,z);
// console.log(shafi);

// example2 (rest)
// let arr2=["shashi","soma","rest","teja","shafi",];
// let [x,y,...rest]=arr2;
// console.log(x,y,rest);
// console.log(rest);
// rest.map((x)=>console.log(x));
// NOTE:instead of ...rest any variable ex: ...var is accepted by compiler
 
// Example3
// let languages=["nodejs","express","python"]
// let [x,y,z,defaultValue="JS"]=languages;//adding value to above array i.e defaultvalue 
// console.log(defaultValue);

// OBJECT  destructuring
// let emp = {
//     name:"santhosh",
//     sal:2000,
//     designation:"developer",
//     comp:"abc"
// }
// // we can destructure an object same as an ARRAY but the keys and values should be same in an obj
// let {name,sal}=emp;
// // note in obj destructuring name should be same as above declared
// console.log(sal);


























    



 


 










                            








