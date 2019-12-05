let music = document.getElementById("music");
let audio = document.getElementsByTagName("audio")[0];
let page1 = document.getElementById("page1");
let page2 = document.getElementById("page2");
let page = document.getElementById("page3");


//点击音乐图标，控制音乐播放效果
// music.addEventListener('click',function()  {
//     if(audio.paused){
//         audio.play();
//         //这种也可以
//         // music.setAttribute("class","play");
//         //兼容性差
//         music.style.animationPlayState = "running";
//         //this的指向
//         //这里可以做一个媒体查询，高版本的可以使用这个，低版本可以使用js

//     }else{
//         audio.pause();
//         // music.setAttribute("class","");
//         music.style.animationPlayState = "paused";
//     }  

// });

//手机端
music.style.animationPlayState = "paused";
music.addEventListener("touchstart",() => {
    if(audio.paused){
        audio.play();
        music.style.animationPlayState = "running";
    }else{
        audio.pause();
        music.style.animationPlayState = "paused";
    }  

})

//音乐播完后，图标停止
 audio.addEventListener("ended",() => {
    //  music.addAttribute("class","")
    music.style.animationPlayState = "paused";
 },false)


 //翻转
 page1.addEventListener("touchstart",() => {
     page1.style.display = "none";
     page2.style.display = "block";
     page3.style.display = "block";
     page3.style.top = "100%";

     setTimeout(function() {
         page2.setAttribute("class","page fadeOut");
         page3.setAttribute("class","page fadeIn");
     },5000);
 },false);




