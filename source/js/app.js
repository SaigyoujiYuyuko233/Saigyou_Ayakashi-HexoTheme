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
 随机封面图
 */

let covers = $(".post-rand-cover");

for (let i = 0; i < covers.length; i++){
  covers[i].src = "https://uuz-blog.oss-cn-hangzhou.aliyuncs.com/images/post-covers/" + Math.round(Math.random() * (7-1)) + ".jpg";
}

/*
侧边栏跟随
 */

let drawer = $(".nexmoe-drawer")[0];

let scroll_hight_provous = 0;

document.onscroll = function (){
  let scroll_hight_now = document.body.scrollTop + document.documentElement.scrollTop;

  //console.log("pvs: " + scroll_hight_provous + " ||| now: " + scroll_hight_now)

  // 自动往下
  if (scroll_hight_now > scroll_hight_provous && scroll_hight_now > $(".nexmoe-primary")[0].scrollHeight*0.2){
    drawer.style.position = "fixed";
    $(drawer).css("top", "auto");

    scroll_hight_provous = scroll_hight_now;
  }
  
  if (scroll_hight_now < scroll_hight_provous) {
    drawer.style.position = "absolute";
    $(drawer).css("top", scroll_hight_now);
    //$(drawer).css("top", document.body.scrollTop);
    //$(drawer).css("top", document.body.scrollTop + document.documentElement.scrollTop);

    scroll_hight_provous = scroll_hight_now;
  }



};

