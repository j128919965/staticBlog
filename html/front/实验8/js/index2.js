
$(init);
let timer;
let pointlist;
let imglist;
function init(){
    imglist = $(".img-container").children();
    pointlist = $(".point-container").children();
    imglist.eq(0).show();
    timer = setInterval(silde,2000);
}
function silde(){
    let index = parseInt($(".light").index());
    pointlist.eq(index).removeClass("light");
    imglist.eq(index).hide();

    index = index+1>2?0:index+1;
    pointlist.eq(index).addClass("light");
    imglist.eq(index).fadeIn("fast");
    
}