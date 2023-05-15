// https://www.3schools.in/2021/09/how-to-open-new-html-page-button-javascript.html

// Code for cat html page button
document.getElementById("button1").onclick = function() {myFunction()};
function myFunction() {
    window.location.href = "index2.html";
};

// Code for horse html page button
document.getElementById("button2").onclick = function() {function2()};
function function2() {
    window.location.href = 'index3.html';
};

// Code for other photos html page button
document.getElementById("button3").onclick = function() {function3()};
function function3(){
    window.location.href = 'index4.html';

};
