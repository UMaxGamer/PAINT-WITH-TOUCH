canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "Pink";
width_of_line = 5;
    var last_position_of_touch_x,last_position_of_touch_y;
    var width = screen.width;
    var new_width = screen.width - 70;
    var new_height = screen.height - 300;
    if(width < 992){
        document.getElementById("myCanvas").width = new_width;
        document.getElementById("myCanvas").height = new_height;
        document.body.style.touches[0].overflow = "hidden";
    }
    canvas.addEventListener("touchstart", my_touchstart);
    function my_touchstart(e)
    {
        console.touches[0].log("My_Touchstart");
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("Width_of_line").value;

        last_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
        last_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
    }
    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {
        console.touches[0].log("My Touchmove")
        current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
        current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.touches[0].log("Last position of x and y coordinates = ");
        console.touches[0].log("x = " + last_position_of_touch_x + ",y = " + last_position_of_touch_y);
        ctx.moveTo(last_position_of_touch_x, last_position_of_touch_y);

        console.touches[0].log("Current position of x and y coordinates = ");
        console.touches[0].log("x  = " + current_position_of_touch_x + ",y = " + current_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();

        last_position_of_touch_x = current_position_of_touch_x; 
        last_position_of_touch_y = current_position_of_touch_y;
    }
    var last_position_x, last_position_y;
    var touchEvent = "empty";


    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e) {
        current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
        current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
 
            ctx.beginPath();
            ctx.strokeStyle = color;
            ctx.lineWidth = Width_of_line;


            ctx.moveTo(last_position_x, last_position_y);


            ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
            ctx.stroke();

        last_position_x = current_position_of_touch_x; 
        last_position_y = current_position_of_touch_y;
    }

    function Clear_drawing() {
        ctx.clearRect(0,0,canvas.width,canvas.height);
    }