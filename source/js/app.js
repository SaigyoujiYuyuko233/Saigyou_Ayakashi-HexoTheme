$("table")
  .has("img")
  .addClass("nexmoe-album");

$("#nexmoe-content img").each(function() {
  $(this).attr("data-src", $(this).attr("src"));
  $(this).attr("src", "");
  $(this).addClass("lazyload");
  $(this).attr("referrerPolicy", "no-referrer");
});

$("article:not(.nexmoe-py) img").each(function() {
  var element = document.createElement("a");
  $(element).attr("data-fancybox", "gallery");
  $(element).attr("href", $(this).attr("data-src"));
  $(element).attr("title", $(this).attr("alt"));
  $(this).wrap(element);
});

$("#nexmoe-sidebar a").addClass("mdui-ripple");
mdui.mutation();

/*
  sidebar 跟随滚动条
  */
$(window).scroll(function(){
  let yy = $(this).scrollTop();//获得滚动条top值
  let already = false;

  //console.log($(this).scrollTop() + " | " + (Math.round((yy/10).toFixed(0))*10%300));
  if (Math.round((yy/10).toFixed(0))*10%300 === 0 && $(this).scrollTop() >= 400 && already === false) {

    // 如果将要置底
    if (yy + 10 >= $(document).scrollTop()){
      $("#drawer").css({"top": $(document).scrollTop() - 300});
      return;
    }

    $("#drawer").css({"top": yy + 10});
    already = true;

    setTimeout(function () {
      already = false;
    },3000);
  }else{
    $("#drawer").css({"position":"absolute"});
  }

  // 顶部自动置顶
  if (yy <= 10){
    already = false;
    $("#drawer").css({"top": 0});
  }

  // 底部自动置底
  if ($(document).scrollTop() >= $(document).height() - $(window).height()) {
    $("#drawer").css({"top": $(document).scrollTop() - 300});
    already = false;
  }

});


/*
 随机封面图
 */

let covers = $(".post-rand-cover");

for (let i = 0; i < covers.length; i++){
  covers[i].src = "https://uuz-blog.oss-cn-hangzhou.aliyuncs.com/images/post-covers/" + Math.round(Math.random() * (7-1)) + ".jpg";
}
