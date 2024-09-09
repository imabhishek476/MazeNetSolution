var inpt = document.getElementById('input');
var placeholder = document.getElementById('placeholder');
var inpt2 = document.getElementById('input2');
var placeholder2 = document.getElementById('placeholder2');

//when clicked inside of textbox
inpt.addEventListener('focus',function(){
    newPosition();
})
inpt2.addEventListener('focus',function(){
    newPosition2();
})

//when clicking out of the text box
inpt.addEventListener('blur',function(){
    //check if there is text
    if(inpt.value.length==0){
        defaultPosition();
    }
    
});
inpt2.addEventListener('blur',function(){
    //check if there is text
    if(inpt2.value.length==0){
        defaultPosition2();
    }
    
});
//Function for resetting text
function defaultPosition(){
    placeholder.style.color = "rgba(0,0,0,0.7)";
    inpt.style.border = "1px solid rgba(0,0,0,0.2)";
    placeholder.style.fontSize = "1em";
    placeholder.style.marginTop = "0px"
    placeholder.style.backgroundColor = "transparent";
    placeholder.style.padding = "0px 0px";

}
function defaultPosition2(){
    placeholder2.style.color = "rgba(0,0,0,0.7)";
    inpt2.style.border = "1px solid rgba(0,0,0,0.2)";
    placeholder2.style.fontSize = "1em";
    placeholder2.style.marginTop = "0px"
    placeholder2.style.backgroundColor = "transparent";
    placeholder2.style.padding = "0px 0px";

}

// Function for moving text
function newPosition(){
    placeholder.style.color = "#1a73e8";
    inpt.style.border = "2px solid #1a73e8";
    placeholder.style.transition = "0.1s ease";//add smooth transition
    placeholder.style.fontSize = "0.7em";//change size
    placeholder.style.marginTop = "-25px"//Move up
    placeholder.style.backgroundColor = "white";//add color to background
    placeholder.style.padding = "0px 10px";//add white space on each side
}


function newPosition2(){
    placeholder2.style.color = "#1a73e8";
    inpt2.style.border = "2px solid #1a73e8";
    placeholder2.style.transition = "0.1s ease";//add smooth transition
    placeholder2.style.fontSize = "0.7em";//change size
    placeholder2.style.marginTop = "-25px"//Move up
    placeholder2.style.backgroundColor = "white";//add color to background
    placeholder2.style.padding = "0px 10px";//add white space on each side
}