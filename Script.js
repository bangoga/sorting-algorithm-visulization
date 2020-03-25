// JavaScript Function Handling button colors

var canvas;
var wait_button;
var draw_area;
// function at start;

function on_start(){
    draw_area = document.getElementById("draw_area");
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
       // console.log(obj);
        if(obj.classList.contains("active_button")){
            obj.classList.remove("active_button");
        }
    }
    button_element.classList.add("active_button");
    if(button_element.name=="Selection"){
        forced_wait();
    }
}



// esthathic design
function forced_wait(){
    //- If waitbutton is hidden-> show the wait button
    wait_show();
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
        callback(svg_show);
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
    
    wait_button.classList.remove("visible");
    wait_button.classList.remove("show");
    wait_button.classList.add("hide")

    draw_area.classList.add("show");
    setTimeout(function(){
        callback();
    }, 300);
}


function svg_show(){

}

function selection_sort(){
    sort_intantiate();
}



function sort_intantiate(){
    let bars=[];
    let numbers=[];
    var middle= canvas.width / 2 - (60*10) / 2;
    for(var i = 1;i<=10;i++){
        numbers.push(i);
    }

    //randomize 

    numbers.sort(function() { return 0.5 - Math.random() });

    for(var i = 0;i<numbers.length;i++){
        bars.push(new bar_items(50,-35*numbers[i],middle+(i*60),400,numbers[i]));
    }

    console.log();

    svg_draw(bars);
    //sort_start(numbers,middle);
}

function sort_start(arr,middle){
    arr.sort(function(a,b) {
        return (+a) - (+b);
      });
      
    new_bar = [];
    for(var i = 0;i<arr.length;i++){
        new_bar.push(new bar_items(50,-35*arr[i],middle+(i*60),400,arr[i]));
    }

    setTimeout(function(){
        draw(new_bar);
    }, 2000);

    console.log(new_bar);
    console.log(arr);
}



function draw(arrs){
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    var cw  = canvas.width;
    var ch  = canvas.height;

    console.log({ch,cw});
    ctx.clearRect(0,0,cw,ch); // fully clear the rectangle
 

    ctx.fillStyle = 'grey';
    ctx.strokeStyle = 'black';
    
    for (var i = 0;i<arrs.length;i++){
        var box = arrs[i];
        ctx.rect(box.x,box.y,box.width,box.height);
        ctx.fill();
    }
    ctx.stroke();

}


// Changing from normal draw to svg draw as svg draw retains references. 
function svg_draw(arr)
{

}

