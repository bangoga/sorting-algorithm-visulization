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
    svg_hide();
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



function svg_hide()
{
    if(draw_area.classList.contains("show")){
        draw_area.classList.remove("show");
        draw_area.classList.remove("visible");
        draw_area.classList.add("hide");
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
    if(draw_area.classList.contains("hide")){
        wait_button.classList.remove("visible");
        wait_button.classList.remove("show");
        wait_button.classList.add("hide");


        draw_area.classList.remove("hide");
        draw_area.classList.add("visible");
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
    draw_area.innerHTML=
        '<path d="M35.3535 31.6465C35.1583 31.4512 34.8417 31.4512 34.6464 31.6465L31.4645 34.8284C31.2692 35.0237 31.2692 35.3403 31.4645 35.5355C31.6597 35.7308 31.9763 35.7308 32.1716 35.5355L35 32.7071L37.8284 35.5355C38.0237 35.7308 38.3403 35.7308 38.5355 35.5355C38.7308 35.3403 38.7308 35.0237 38.5355 34.8284L35.3535 31.6465ZM35.5 149L35.5 32L34.5 32L34.5 149L35.5 149Z" fill="black"/>'
        + '<path d="M152.354 149.354C152.549 149.158 152.549 148.842 152.354 148.646L149.172 145.464C148.976 145.269 148.66 145.269 148.464 145.464C148.269 145.66 148.269 145.976 148.464 146.172L151.293 149L148.464 151.828C148.269 152.024 148.269 152.34 148.464 152.536C148.66 152.731 148.976 152.731 149.172 152.536L152.354 149.354ZM35 149.5L152 149.5V148.5L35 148.5V149.5Z" fill="black"/>';
    
        draw_area.classList.add("show");
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

