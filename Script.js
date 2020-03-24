// JavaScript Function Handling button colors

var canvas;
var wait_button;

// function at start;

function on_start(){
    canvas = document.getElementById("animation-canvas");
    wait_button = document.getElementById("wait");
    console.log("Page has started");
}



function bar_items(width,height,x,y,value){
    this.value=value
    this.y=y;
    this.x=x;
    this.width=width;
    this.height=height;
}



function button_click(button_element){
    // get all elements and turn them not active:
    var all_buttons = document.getElementsByClassName("brk-btn");  

    for (let obj of all_buttons){
        console.log(obj);
        if(obj.classList.contains("active_button")){
            obj.classList.remove("active_button");
        }
    }
    button_element.classList.add("active_button");
    if(button_element.name=="Selection"){
        forced_wait();
    }
}



function selection_sort(){
    selection_sort_animation();
}



function selection_sort_animation(){
    let bars=[];
    var middle= canvas.width / 2 - (50*11) / 2;
    for(var i = 1;i<=10;i++){
        bars.push(new bar_items(50,-10*i,middle+(i*50),200,i));
    }
    //console.log(bars);
    draw(bars);
}


// esthathic design
function forced_wait(){
    //- If waitbutton is hidden-> show the wait button
    canvas_hide();
}



function canvas_hide()
{
    if(canvas.classList.contains("show")){
        canvas.classList.remove("show");
        canvas.classList.remove("visible");
        canvas.classList.add("hide");
    }
    wait_show(wait_hide);
}



function wait_show(callback)
{
    if(wait_button.classList.contains("hide")){
        wait_button.classList.remove("hide");
        wait_button.classList.add("visible");
    }
    // -- [ Adds fade in effect] -- //
    setTimeout(function(){
        wait_button.classList.add("show");
    }, 300);

    setTimeout(function(){
        callback(canvas_show);
    }, 3000);
}


function wait_hide(callback)
{
    if(canvas.classList.contains("hide")){
        wait_button.classList.remove("visible");
        wait_button.classList.remove("show");
        wait_button.classList.add("hide");


        canvas.classList.remove("hide");
        canvas.classList.add("visible");
    }
    setTimeout(function(){
        callback(selection_sort);
    }, 300);

}



function canvas_show(callback){
    canvas.classList.add("show");
    setTimeout(function(){
        callback();
    }, 300);
}



function draw(bars){
    var canvas = document.getElementById("animation-canvas");
    var ctx = canvas.getContext("2d");
    var cw  = canvas.width;
    var ch  = canvas.height;

    ctx.clearRect(0,0,cw,ch); // fully clear the rectangle

    for (var i = 0;i<bars.length;i++){
        var box = bars[i];
        ctx.strokeRect(box.x,box.y,box.width,box.height);
    }
}

