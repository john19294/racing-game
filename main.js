var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
var car1_width=120;
var car1_height=70;
var car1_image="car1.png";
var car1_x=10;
var car1_y=10;
var car2_width=120;
var car2_height=70;
var car2_image="download.jpg";
var car2_x=10;
var car2_y=10;
var bg="Img1.jpg";

function add(){
car1_imgTag= new Image();
car1_imgTag.onload = uploadcar1;
car1_imgTag.src=car1_image;
 
bg_imgTag= new Image();
bg_imgTag.onload = uploadbg;
bg_imgTag.src=bg;

}
function uploadcar1(){
    ctx.drawImage(car1_imgTag,car1_x,car1_y,car1_width,car1_height);

    
    
    
    
    
    }
    function uploadbg(){
        ctx.drawImage(bg_imgTag,0,0,canvas.width,canvas.height);
    
        
        
        
        
        
        }
        function add2(){
            car2_imgTag= new Image();
            car2_imgTag.onload = uploadcar2;
            car2_imgTag.src=car2_image;
             
            bg_imgTag= new Image();
            bg_imgTag.onload = uploadbg;
            bg_imgTag.src=bg;
            
            }
            function uploadcar2(){
                ctx.drawImage(car2_imgTag,car2_x,car2_y,car2_width,car2_height);
            
                
                
                
                
                
                }
                function uploadbg(){
                    ctx.drawImage(bg_imgTag,0,0,canvas.width,canvas.height);
                
                    
                    
                    
                    
                    
                    }
    window.addEventListener("keydown",my_keydown);
    function my_keydown(e){
        var keypressed=e.keyCode;
if(keypressed=='38'){
    car1_up();
    car2_up();


}
if(keypressed=='40'){
    car1_down();
    car2_down();


}
if(keypressed=='37'){
    car1_left();
    car2_left();




}
if(keypressed=='39'){
    car1_right();
    car2_right();


}




    }
    function car1_up(){
    car1_y=car1_y-10;
    uploadbg();
    uploadcar1();
   
    }
    function car1_down(){
        car1_y=car1_y+10;
        uploadbg();
        uploadcar1();
       
        }
        function car1_left(){
            car1_x=car1_x-10;
            uploadbg();
            uploadcar1();
            
            }
            function car1_right(){
                car1_x=car1_x+10;
                uploadbg();
                uploadcar1();
                
                }
                function car2_up(){
                    car2_y=car2_y-10;
                    uploadbg();
                    uploadcar1();
                   
                    }
                    function car2_down(){
                        car2_y=car2_y+10;
                        uploadbg();
                        uploadcar1();
                       
                        }
                        function car2_left(){
                            car2_x=car2_x-10;
                            uploadbg();
                            uploadcar1();
                            
                            }
                            function car2_right(){
                                car2_x=car2_x+10;
                                uploadbg();
                                uploadcar1();
                                
                                }