<?php
function auto_version($file)
{
  if(strpos($file, '/') !== 0 || !file_exists($_SERVER['DOCUMENT_ROOT'] . $file))
    return $file;

  $mtime = filemtime($_SERVER['DOCUMENT_ROOT'] . $file);
  return preg_replace('{\\.([^./]+)$}', ".$mtime.\$1", $file);
}
?>

<!DOCTYPE html>
<html class="no-js">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<title>Tony Li</title>
		<meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1">
		<link type="image/x-icon" rel="shortcut icon" href="favicon.ico">
		<style>
article,figure,footer,header,main,nav,section,input,div,ul,li{display:block;-moz-box-sizing:border-box;-ms-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}[hidden]{display:none}html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}a:focus{outline:0}a:active,a:hover{outline:0}img{border:0;-webkit-perspective:1000}svg:not(:root){overflow:hidden}figure{margin:0}nav>ul{-moz-animation:nav-in 750ms ease-in-out 1s forwards;-ms-animation:nav-in 750ms ease-in-out 1s forwards;-webkit-animation:nav-in 750ms ease-in-out 1s forwards;animation:nav-in 750ms ease-in-out 1s forwards}@keyframes nav-in{0%{transform:translate3d(0, -400px, 0) scale(0.5)}70%{transform:translate3d(0, 20px, 0) scale(1.1)}100%{transform:translate3d(0, 0, 0) scale(1)}}@-webkit-keyframes nav-in{0%{-webkit-transform:translate3d(0, -400px, 0) scale(0.5)}70%{-webkit-transform:translate3d(0, 20px, 0) scale(1.1)}100%{-webkit-transform:translate3d(0, 0, 0) scale(1)}}@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg)}}@keyframes delayed-opacity{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@-webkit-keyframes delayed-opacity{0%{opacity:0}10%{opacity:1}50%{opacity:1}90%{opacity:1}100%{opacity:0}}.small-entrance{-moz-animation:small-entrance 750ms ease-out 1s forwards;-ms-animation:small-entrance 750ms ease-out 1s forwards;-webkit-animation:small-entrance 750ms ease-out 1s forwards;animation:small-entrance 750ms ease-out 1s forwards}@keyframes small-entrance{0%{transform:translate3d(30%, 30%, 0) rotate(-6deg) scale(0.5);opacity:1}70%{transform:translate3d(2%, 2%, 0) rotate(3deg) scale(1.1);opacity:1}100%{transform:translate3d(0%, 0%, 0) rotate(0) scale(1);opacity:1}}@-webkit-keyframes small-entrance{0%{-webkit-transform:translate3d(30%, 30%, 0) rotate(-6deg) scale(0.5);opacity:1}70%{-webkit-transform:translate3d(2%, 2%, 0) rotate(3deg) scale(1.1);opacity:1}100%{-webkit-transform:translate3d(0%, 0%, 0) rotate(0) scale(1);opacity:1}}.hatch.active{-moz-animation:hatch 2s ease-in-out;-ms-animation:hatch 2s ease-in-out;-webkit-animation:hatch 2s ease-in-out;animation:hatch 2s ease-in-out;-moz-transform-origin:90% 100%;-ms-transform-origin:90% 100%;-webkit-transform-origin:90% 100%;transform-origin:90% 100%}@keyframes hatch{0%{transform:rotate3d(1, 1, 1, 0deg) scale3d(1, 0.9, 1)}20%{transform:rotate3d(1, 1, 1, -2deg) scale3d(1, 1.1, 1)}35%{transform:rotate3d(1, 1, 1, 2deg) scale3d(1, 1, 1)}50%{transform:rotate3d(1, 1, 1, -2deg)}65%{transform:rotate3d(1, 1, 1, 1deg)}80%{transform:rotate3d(1, 1, 1, -1deg)}100%{transform:rotate3d(0deg)}}@-webkit-keyframes hatch{0%{-webkit-transform:rotate3d(1, 1, 1, 0deg) scale3d(1, 0.9, 1)}20%{-webkit-transform:rotate3d(1, 1, 1, -2deg) scale3d(1, 1.1, 1)}35%{-webkit-transform:rotate3d(1, 1, 1, 2deg) scale3d(1, 1, 1)}50%{-webkit-transform:rotate3d(1, 1, 1, -2deg)}65%{-webkit-transform:rotate3d(1, 1, 1, 1deg)}80%{-webkit-transform:rotate3d(1, 1, 1, -1deg)}100%{-webkit-transform:rotate3d(1, 1, 1, 0deg)}}.pulse.active{-moz-animation:pulse 1.5s;-ms-animation:pulse 1.5s;-webkit-animation:pulse 1.5s;animation:pulse 1.5s}@keyframes pulse{0%{transform:scale3d(1, 1, 1);opacity:1}35%{transform:scale3d(0.5, 0.5, 1);opacity:0.5}70%{transform:scale3d(1.2, 1.2, 1);opacity:0.5}100%{transform:scale3d(1, 1, 1);opacity:1}}@-webkit-keyframes pulse{0%{-webkit-transform:scale3d(1, 1, 1);opacity:1}35%{-webkit-transform:scale3d(0.5, 0.5, 1);opacity:0.5}70%{-webkit-transform:scale3d(1.2, 1.2, 1);opacity:0.5}100%{-webkit-transform:scale3d(1, 1, 1);opacity:1}}.bounce.active{-moz-animation:bounce 1.6s ease;-ms-animation:bounce 1.6s ease;-webkit-animation:bounce 1.6s ease;animation:bounce 1.6s ease;-moz-transform-origin:50% 100%;-ms-transform-origin:50% 100%;-webkit-transform-origin:50% 100%;transform-origin:50% 100%}@keyframes bounce{0%{transform:translate3d(0, 0%, 0) scale3d(1, 0.6, 1)}60%{transform:translate3d(0, -50%, 0) scale3d(1, 1.1, 1)}70%{transform:translate3d(0, 0%, 0) scale3d(1.05, 0.95, 1)}80%{transform:translate3d(0, 0%, 0) scale3d(1, 1.05, 1)}90%{transform:translate3d(0, 0%, 0) scale3d(1, 0.95, 1)}100%{transform:translate3d(0, 0%, 0) scale3d(1, 1, 1)}}@-webkit-keyframes bounce{0%{-webkit-transform:translate3d(0, 0%, 0) scale3d(1, 0.6, 1)}60%{-webkit-transform:translate3d(0, -50%, 0) scale3d(1, 1.1, 1)}70%{-webkit-transform:translate3d(0, 0%, 0) scale3d(1.05, 0.95, 1)}80%{-webkit-transform:translate3d(0, 0%, 0) scale3d(1, 1.05, 1)}90%{-webkit-transform:translate3d(0, 0%, 0) scale3d(1, 0.95, 1)}100%{-webkit-transform:translate3d(0, 0%, 0) scale3d(1, 1, 1)}}.tossing.active{-moz-animation:tossing 2.5s;-ms-animation:tossing 2.5s;-webkit-animation:tossing 2.5s;animation:tossing 2.5s}@keyframes tossing{0%{transform:rotate3d(0, 0, 1, 0)}25%{transform:rotate3d(0, 0, 1, 40deg)}50%{transform:rotate3d(0, 0, 1, -40deg)}75%{transform:rotate3d(0, 0, 1, 40deg)}100%{transform:rotate3d(0, 0, 1, 0)}}@-webkit-keyframes tossing{0%{-webkit-transform:rotate3d(0, 0, 1, 0)}25%{-webkit-transform:rotate3d(0, 0, 1, 40deg)}50%{-webkit-transform:rotate3d(0, 0, 1, -40deg)}75%{-webkit-transform:rotate3d(0, 0, 1, 40deg)}100%{-webkit-transform:rotate3d(0, 0, 1, 0)}}#wywh .inning .arrow,#wywh .outing .arrow{-moz-animation:fading 3.5s;-ms-animation:fading 3.5s;-webkit-animation:fading 3.5s;animation:fading 3.5s}#emailc .inning .arrow,#emailc .outing .arrow{-moz-animation:fading 2s;-ms-animation:fading 2s;-webkit-animation:fading 2s;animation:fading 2s}#stylepro .inning .arrow,#stylepro .outing .arrow{-moz-animation:fading 2s;-ms-animation:fading 2s;-webkit-animation:fading 2s;animation:fading 2s}@keyframes fading{0%{transform:scale3d(1, 1, 1);opacity:1}20%{transform:scale3d(1.2, 1.2, 1);opacity:0.8}40%{transform:scale3d(0.8, 0.8, 1);opacity:0.6}60%{transform:scale3d(1.2, 1.2, 1);opacity:0.4}80%{transform:scale3d(0.8, 0.8, 1);opacity:0.2}100%{transform:scale3d(1, 1, 1);opacity:0}}@-webkit-keyframes fading{0%{-webkit-transform:scale3d(1, 1, 1);opacity:1}20%{-webkit-transform:scale3d(1.2, 1.2, 1);opacity:0.8}40%{-webkit-transform:scale3d(0.8, 0.8, 1);opacity:0.6}60%{-webkit-transform:scale3d(1.2, 1.2, 1);opacity:0.4}80%{-webkit-transform:scale3d(0.8, 0.8, 1);opacity:0.2}100%{-webkit-transform:scale3d(1, 1, 1);opacity:0}}footer.in .email-width{-moz-animation:0.5s emailWidth ease-in-out forwards;-ms-animation:0.5s emailWidth ease-in-out forwards;-webkit-animation:0.5s emailWidth ease-in-out forwards;animation:0.5s emailWidth ease-in-out forwards}@keyframes emailWidth{0%{width:0}50%{width:135px}75%{width:125px}100%{width:130px}}@-webkit-keyframes emailWidth{0%{width:0}50%{width:135px}75%{width:125px}100%{width:130px}}html,body{overflow-x:hidden;position:relative;width:100%}html .container,body .container{height:100%;margin:0 auto;position:relative;width:960px}@media (max-width: 1024px){html .container,body .container{width:720px}}@media (max-width: 767px){html .container,body .container{width:540px}}@media (max-width: 580px){html .container,body .container{width:322px}}body{zoom:1}body>#wrapper{overflow-x:hidden;zoom:1}body>#wrapper>#gum{-webkit-transform:translate3d(0%, 0, 0) scale3d(1, 1, 1);-webkit-backface-visibility:hidden;-webkit-transform-style:preserve-3d;height:3486px;overflow:hidden;opacity:0;position:relative;-moz-transition:opacity 0.3s;-ms-transition:opacity 0.3s;-webkit-transition:opacity 0.3s;transition:opacity 0.3s;width:400%}@media (max-width: 1024px){body>#wrapper>#gum{height:3370px}}@media (max-width: 767px){body>#wrapper>#gum{height:2772px}}@media (max-width: 580px){body>#wrapper>#gum{height:1964px}}body>#wrapper>#gum>.each{-webkit-transform:rotateZ(0deg);-webkit-backface-visibility:hidden;float:left;height:auto;margin-top:400px;overflow:hidden;position:relative;width:25%}body>#wrapper>#gum.init{opacity:1}body>#wrapper>#gum.out{opacity:0;transition:transform 0s, height 0.3s, opacity 0.3s;-webkit-transition:-webkit-transform 0s, height 0.3s, opacity 0.3s}body>#wrapper>#gum.animate{transition:transform 0.35s, height 1s, opacity 0.3s;-webkit-transition:-webkit-transform 0.35s, height 1s, opacity 0.3s}.no-cssanimations #wrapper>#gum{opacity:1}.no-cssanimations #wrapper>#gum img{opacity:1}.touch #gum img{opacity:0}.touch #gum.init img{opacity:1}.touch body>#wrapper>#gum{height:3186px}@media (max-width: 1024px){.touch body>#wrapper>#gum{height:3010px}}@media (max-width: 767px){.touch body>#wrapper>#gum{height:2472px}}@media (max-width: 580px){.touch body>#wrapper>#gum{height:1664px}}.touch .each{margin-top:100px !important}.touch header{position:fixed;top:0}header{-moz-transition:opacity 500ms;-ms-transition:opacity 500ms;-webkit-transition:opacity 500ms;transition:opacity 500ms;background:#fff;height:0;position:relative;top:170px;z-index:99;width:100%}header nav{background:#fff;height:75px;margin:0 auto;width:100%;white-space:nowrap}header nav ul{margin:0 auto;padding:0;-moz-transform:translate3d(0, -400px, 0) scale(0.5);-ms-transform:translate3d(0, -400px, 0) scale(0.5);-webkit-transform:translate3d(0, -400px, 0) scale(0.5);transform:translate3d(0, -400px, 0) scale(0.5);width:270px}header nav ul>.hatch{background-position:0% 0%}header nav ul>.pulse{background-position:33.33% 0%}header nav ul>.bounce{background-position:66.66% 0%}header nav ul>.tossing{background-position:100% 0%}header nav ul>li{background-image:url("img/nav.svg");background-repeat:no-repeat;cursor:pointer;display:inline-block;height:75px;margin:0 5px;width:60px}header nav ul>li>div{-moz-border-radius:10px;-ms-border-radius:10px;-webkit-border-radius:10px;border-radius:10px;height:10px;margin:0 auto;position:relative;top:55px;width:10px}header nav ul>li:first-child{margin:0 5px 0 0}header nav ul>li:last-child{margin:0 0 0 5px}header nav ul>li:hover div{background:#D7D7D7;border-bottom:2px solid #A2A1A1}header nav ul>.active div,header nav ul>.active:hover div{background:#D7D7D7;border-bottom:2px solid #A2A1A1}header.in{opacity:0.6;position:fixed;top:0}header.in:hover{opacity:1}figure{background-position:center center;background-repeat:no-repeat;background-size:100%;margin:0 auto;position:relative;z-index:5}.monitor{background-image:url("img/monitor.svg");background-size:200%;height:786px;width:960px}@media (max-width: 1024px){.monitor{height:589.5px;width:720px}}@media (max-width: 767px){.monitor{height:442.125px;width:540px}}@media (max-width: 580px){.monitor{height:263.6375px;width:322px}}.monitor>div{height:500px;margin:0 auto;overflow:hidden;position:relative;top:5%;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;user-select:none;width:886px}@media (max-width: 1024px){.monitor>div{height:374.71783px;width:664px}}@media (max-width: 767px){.monitor>div{height:281.03837px;width:498px}}@media (max-width: 580px){.monitor>div{height:169.30023px;width:300px}}.monitor>div>img:first-child{height:auto;pointer-events:none;-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1);-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1);transform:translate3d(0, 0, 0) scale3d(1, 1, 1);-webkit-backface-visibility:hidden;-webkit-transform-style:preserve-3d;width:100%}html.no-csstransforms3d .monitor>div>img:first-child{-ms-transform:translate(0, 0);-webkit-transform:translate(0, 0);transform:translate(0, 0)}figure.in>div,figure.out>div{cursor:pointer}.no-csstransitions .monitor>div,.no-csstransition .email>div{cursor:pointer}.tablet-container{float:left;position:relative;width:600px}@media (max-width: 767px){.tablet-container{width:460px}}@media (max-width: 580px){.tablet-container{width:280px}}.tablet-container>figure{background-image:url("img/tablet.svg");background-position:0 0;height:400px;width:600px}@media (max-width: 767px){.tablet-container>figure{height:306.66667px;width:460px}}@media (max-width: 580px){.tablet-container>figure{height:186.66667px;width:280px}}.tablet-container>.tablet-guides{background-image:url("img/tablet.svg");background-position:0 100%}.phone-container{float:right;position:relative;width:210px}@media (max-width: 1024px){.phone-container{z-index:10}}@media (max-width: 767px){.phone-container{width:160px}}@media (max-width: 580px){.phone-container{width:100px}}.phone-container>figure{background-image:url("img/phone.svg");height:400px;width:210px}@media (max-width: 767px){.phone-container>figure{height:304.7619px;width:160px}}@media (max-width: 580px){.phone-container>figure{height:190.47619px;width:100px}}.tablet-container>div,.phone-container>div{background-position:center center;background-repeat:no-repeat;background-size:100%}.tablet-container>img,.phone-container>img{pointer-events:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;user-select:none}.browser{background-image:url("img/browser-1.svg");background-position:top center;height:544px;width:462px}@media (max-width: 1024px){.browser{height:400.34632px;width:340px}}@media (max-width: 580px){.browser{height:376.79654px;width:320px}}.browser>div{height:522px;margin:0 auto;overflow:hidden;position:relative;top:3.5%;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;user-select:none;width:458px}@media (max-width: 1024px){.browser>div{height:383.0917px;width:337px}}@media (max-width: 580px){.browser>div{height:361.43668px;width:318px}}.browser>div>img{-moz-border-radius:0 0 4px 4px;-ms-border-radius:0 0 4px 4px;-webkit-border-radius:0 0 4px 4px;border-radius:0 0 4px 4px;-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1);-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1);transform:translate3d(0, 0, 0) scale3d(1, 1, 1);-webkit-backface-visibility:hidden;-webkit-transform-style:preserve-3d;pointer-events:none}html.no-csstransforms3d .browser>div>img{-ms-transform:translate(0, 0);-webkit-transform:translate(0, 0);transform:translate(0, 0)}@media (max-width: 1024px){.browser>div>img{height:auto;width:200%}}.email{background-image:url("img/email.png");background-repeat:no-repeat;background-size:157.3%;height:540px;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;user-select:none;width:100%}@media (max-width: 767px){.email{background-size:274%}}.email.sparrow{background-position:0 0}@media (max-width: 767px){.email.sparrow{background-position:100% 0}}.email.windows{background-position:0 100%}@media (max-width: 767px){.email.windows{background-position:100% 100%}}.shirt{background-image:url("img/shirt.svg");height:700px;width:800px}.cursor{display:block;margin:0 auto;pointer-events:none;position:relative;z-index:5;-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1);-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1);transform:translate3d(0, 0, 0) scale3d(1, 1, 1);-webkit-backface-visibility:hidden;-webkit-transform-style:preserve-3d;-webkit-transition:-webkit-transform 1s 1s;-moz-transition:transform 1s 1s;-ms-transition:transform 1s 1s;-webkit-transition:transform 1s 1s;transition:transform 1s 1s}html.no-csstransforms3d .cursor{-ms-transform:translate(0, 0);-webkit-transform:translate(0, 0);transform:translate(0, 0)}.arrow{background-image:url("img/icons-sprited.svg");background-position:0 50%;background-repeat:no-repeat;display:block;height:70px;margin:0 auto;opacity:1;position:absolute;right:0;bottom:20px;left:0;z-index:10;-moz-transition:1s opacity;-ms-transition:1s opacity;-webkit-transition:1s opacity;transition:1s opacity;width:70px}@media (max-width: 580px){.arrow{background-size:300%;height:35px;width:35px}}.in .arrow,.outing .arrow{background-position:-70px 50%}@media (max-width: 580px){.in .arrow,.outing .arrow{background-position:-35px 50%}}.transitionless>div>img{-moz-transition:all 0s 0.25s !important;-ms-transition:all 0s 0.25s !important;-webkit-transition:all 0s 0.25s !important;transition:all 0s 0.25s !important}footer{cursor:pointer;height:70px;opacity:0;position:fixed;right:0;bottom:0;z-index:99;-webkit-tap-highlight-color:rgba(255,255,255,0);-webkit-transition:width 0.25s;transition:width 0.25s;-moz-transform:translate3d(30%, 30%, 0) rotate(-6deg) scale(0.5);-ms-transform:translate3d(30%, 30%, 0) rotate(-6deg) scale(0.5);-webkit-transform:translate3d(30%, 30%, 0) rotate(-6deg) scale(0.5);transform:translate3d(30%, 30%, 0) rotate(-6deg) scale(0.5);-webkit-transform:rotateZ(0deg);-webkit-backface-visibility:hidden;width:70px}footer>div{position:absolute;right:5px;bottom:5px;white-space:nowrap}footer>div>div{display:inline-block;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;user-select:none}footer>div>.ends{background-image:url("img/icons-sprited.svg");height:70px;position:relative;width:35px}footer>div>.ends:first-child{background-position:70px 50%;right:-2px}footer>div>.ends:last-child{background-position:100% 50%}footer>div>#email{background-color:#D7D7D7;border-bottom:4px solid #A2A1A1;height:52px;position:relative;top:-9px;right:-1px;-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1);-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1);transform:translate3d(0, 0, 0) scale3d(1, 1, 1);-webkit-backface-visibility:hidden;-webkit-transform-style:preserve-3d;-webkit-transform:rotateZ(0deg);-webkit-backface-visibility:hidden;-moz-transition:width 0.5s;-ms-transition:width 0.5s;-webkit-transition:width 0.5s;transition:width 0.5s;width:2px}html.no-csstransforms3d footer>div>#email{-ms-transform:translate(0, 0);-webkit-transform:translate(0, 0);transform:translate(0, 0)}footer>div>#email>a{color:rgba(255,255,255,0);font-size:16px;line-height:52px;margin:0 auto;outline:0;pointer-events:none;position:absolute;text-decoration:none;-moz-transition:color 0.1s;-ms-transition:color 0.1s;-webkit-transition:color 0.1s;transition:color 0.1s;-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1);-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1);transform:translate3d(0, 0, 0) scale3d(1, 1, 1);-webkit-backface-visibility:hidden;-webkit-transform-style:preserve-3d;-webkit-transform:rotateZ(0deg);-webkit-backface-visibility:hidden;width:130px}html.no-csstransforms3d footer>div>#email>a{-ms-transform:translate(0, 0);-webkit-transform:translate(0, 0);transform:translate(0, 0)}.no-cssanimations footer{opacity:1}footer.in{cursor:default;width:190px}footer.in>div>div{-moz-user-select:text;-ms-user-select:text;-webkit-user-select:text;user-select:text}footer.in #email{width:130px}footer.in #email>a{color:rgba(0,0,0,0.6) !important;pointer-events:all !important;-moz-transition:color 0.5s 0.2s;-ms-transition:color 0.5s 0.2s;-webkit-transition:color 0.5s 0.2s;transition:color 0.5s 0.2s}.touch footer.in{width:250px}@media (max-width: 580px){.touch #wywh{min-height:1600px}}#wywh>section{padding:20px 0}#wywh>section .monitor{background-position:0% 50%}#wywh>section .monitor>div{z-index:10}#wywh>section .monitor>div>img{-webkit-transition:-webkit-transform 3.5s 0s;-moz-transition:transform 3.5s 0s;-ms-transition:transform 3.5s 0s;-webkit-transition:transform 3.5s 0s;transition:transform 3.5s 0s}#wywh>section .monitor>div>div{height:292px;margin:0 auto;overflow:hidden;position:relative;z-index:5;-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1);-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1);transform:translate3d(0, 0, 0) scale3d(1, 1, 1);-webkit-backface-visibility:hidden;-webkit-transform-style:preserve-3d;-webkit-transition:-webkit-transform 2s 0s;-moz-transition:transform 2s 0s;-ms-transition:transform 2s 0s;-webkit-transition:transform 2s 0s;transition:transform 2s 0s;width:300px}html.no-csstransforms3d #wywh>section .monitor>div>div{-ms-transform:translate(0, 0);-webkit-transform:translate(0, 0);transform:translate(0, 0)}#wywh>section .monitor>div>div>img{display:block;height:auto;width:200%}@media (max-width: 1024px){#wywh>section .monitor>div>div{height:194.66667px;width:200px}}@media (max-width: 767px){#wywh>section .monitor>div>div{height:155.73333px;width:160px}}@media (max-width: 580px){#wywh>section .monitor>div>div{height:77.86667px;width:80px}}#wywh>section .inning>div>img,#wywh>section .in>div>img{-ms-transform:translate3d(0, -65%, 0) scale3d(1, 1, 1);-webkit-transform:translate3d(0, -65%, 0) scale3d(1, 1, 1);transform:translate3d(0, -65%, 0) scale3d(1, 1, 1);-webkit-backface-visibility:hidden;-webkit-transform-style:preserve-3d}html.no-csstransforms3d #wywh>section .inning>div>img,html.no-csstransforms3d #wywh>section .in>div>img{-ms-transform:translate(0, -65%);-webkit-transform:translate(0, -65%);transform:translate(0, -65%)}#wywh>section .inning>div>div,#wywh>section .in>div>div{pointer-events:none;-ms-transform:translate3d(0, -419%, 0) scale3d(1, 1, 1);-webkit-transform:translate3d(0, -419%, 0) scale3d(1, 1, 1);transform:translate3d(0, -419%, 0) scale3d(1, 1, 1);-webkit-backface-visibility:hidden;-webkit-transform-style:preserve-3d;-webkit-transition:-webkit-transform 2s 2s;-moz-transition:transform 2s 2s;-ms-transition:transform 2s 2s;-webkit-transition:transform 2s 2s;transition:transform 2s 2s}html.no-csstransforms3d #wywh>section .inning>div>div,html.no-csstransforms3d #wywh>section .in>div>div{-ms-transform:translate(0, -419%);-webkit-transform:translate(0, -419%);transform:translate(0, -419%)}@media (max-width: 1024px){#wywh>section .inning>div>div,#wywh>section .in>div>div{-ms-transform:translate3d(0, -457%, 0) scale3d(1, 1, 1);-webkit-transform:translate3d(0, -457%, 0) scale3d(1, 1, 1);transform:translate3d(0, -457%, 0) scale3d(1, 1, 1);-webkit-backface-visibility:hidden;-webkit-transform-style:preserve-3d}html.no-csstransforms3d #wywh>section .inning>div>div,html.no-csstransforms3d #wywh>section .in>div>div{-ms-transform:translate(0, -457%);-webkit-transform:translate(0, -457%);transform:translate(0, -457%)}}@media (max-width: 767px){#wywh>section .inning>div>div,#wywh>section .in>div>div{-ms-transform:translate3d(0, -434%, 0) scale3d(1, 1, 1);-webkit-transform:translate3d(0, -434%, 0) scale3d(1, 1, 1);transform:translate3d(0, -434%, 0) scale3d(1, 1, 1);-webkit-backface-visibility:hidden;-webkit-transform-style:preserve-3d}html.no-csstransforms3d #wywh>section .inning>div>div,html.no-csstransforms3d #wywh>section .in>div>div{-ms-transform:translate(0, -434%);-webkit-transform:translate(0, -434%);transform:translate(0, -434%)}}@media (max-width: 580px){#wywh>section .inning>div>div,#wywh>section .in>div>div{-ms-transform:translate3d(0, -506%, 0) scale3d(1, 1, 1);-webkit-transform:translate3d(0, -506%, 0) scale3d(1, 1, 1);transform:translate3d(0, -506%, 0) scale3d(1, 1, 1);-webkit-backface-visibility:hidden;-webkit-transform-style:preserve-3d}html.no-csstransforms3d #wywh>section .inning>div>div,html.no-csstransforms3d #wywh>section .in>div>div{-ms-transform:translate(0, -506%);-webkit-transform:translate(0, -506%);transform:translate(0, -506%)}}#responsive{height:1200px;overflow-y:hidden}@media (max-width: 767px){#responsive{height:950px}}@media (max-width: 580px){#responsive{height:600px}}#responsive .tablet-container>img{display:block;height:1250px;margin:0 auto;position:relative;top:-380px;left:1px;width:480px}@media (max-width: 767px){#responsive .tablet-container>img{height:958.33333px;top:-292px;width:368px}}@media (max-width: 580px){#responsive .tablet-container>img{height:583.33333px;top:-176px;width:224px}}@media (max-width: 1024px){#responsive .phone-container{top:-1612px}}@media (max-width: 767px){#responsive .phone-container{top:-1254px}}@media (max-width: 580px){#responsive .phone-container{top:-768px}}#responsive .phone-container>img{display:block;height:917px;margin:0 auto;position:relative;top:-360px;width:176px}@media (max-width: 767px){#responsive .phone-container>img{height:685.7931px;top:-272px;width:132px}}@media (max-width: 580px){#responsive .phone-container>img{height:426.02299px;top:-170px;width:82px}}#contact{border-top:1px solid #96D7E5;height:540px}@media (max-width: 767px){#contact{height:500px}}@media (max-width: 580px){#contact{height:340px}}#contact .guides{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;user-select:none}#contact,#legal-privacy{background:url("img/bg-grid.svg");overflow:hidden;position:relative;padding:0}#contact .guides,#contact .figure,#legal-privacy .guides,#legal-privacy .figure{float:left;position:relative}#contact .guides,#legal-privacy .guides{top:15%;width:35%}#contact .guides img,#legal-privacy .guides img{display:block;margin-left:-50px;pointer-events:none;position:relative;top:0;left:50%;z-index:10;width:400px}@media (max-width: 1024px){#contact .guides img,#legal-privacy .guides img{width:350px}}@media (max-width: 767px){#contact .guides img,#legal-privacy .guides img{width:310px}}@media (max-width: 580px){#contact .guides img,#legal-privacy .guides img{width:190px}}@media (max-width: 580px){#contact .guides,#legal-privacy .guides{top:22%}}#contact .figure,#legal-privacy .figure{width:65%}#contact .figure figure,#legal-privacy .figure figure{background-image:url("http://img.tonyli.me/wywh/wywh-desktop-2.png");background-position:0 50%;background-repeat:no-repeat;display:block;height:388px;margin:0 auto;position:relative;z-index:1;-ms-transform:translate3d(0, 150%, 0) scale3d(1, 1, 1);-webkit-transform:translate3d(0, 150%, 0) scale3d(1, 1, 1);transform:translate3d(0, 150%, 0) scale3d(1, 1, 1);-webkit-backface-visibility:hidden;-webkit-transform-style:preserve-3d;-webkit-transition:background-position 0s 1.85s, -webkit-transform 1s;transition:background-position 0s 1.85s, transform 1s;width:400px}html.no-csstransforms3d #contact .figure figure,html.no-csstransforms3d #legal-privacy .figure figure{-ms-transform:translate(0, 150%);-webkit-transform:translate(0, 150%);transform:translate(0, 150%)}@media (max-width: 767px){#contact .figure figure,#legal-privacy .figure figure{background-size:200%;height:340px;margin-top:4%;width:100%}}@media (max-width: 580px){#contact .figure figure,#legal-privacy .figure figure{background-size:200%;height:200px;margin-top:15%}}#contact .figure figure>div,#legal-privacy .figure figure>div{background:rgba(255,255,255,0.75);height:100%;-moz-transition:opacity 1s 2s;-ms-transition:opacity 1s 2s;-webkit-transition:opacity 1s 2s;transition:opacity 1s 2s;opacity:0;position:absolute;width:100%}#contact .figure figure>div>img,#legal-privacy .figure figure>div>img{display:block;margin-right:auto;margin-left:auto;opacity:0;pointer-events:none}#contact .figure figure>div>img:first-child,#legal-privacy .figure figure>div>img:first-child{animation:spin 1s infinite linear, delayed-opacity 3.5s 1;-webkit-animation:spin 1s infinite linear, delayed-opacity 3.5s 1;display:none;margin-top:140px}@media (max-width: 580px){#contact .figure figure>div>img:first-child,#legal-privacy .figure figure>div>img:first-child{margin-top:70px}}#contact .figure figure>div>img:last-child,#legal-privacy .figure figure>div>img:last-child{margin-top:-80px}@media (max-width: 767px){#contact .figure figure>div>img:last-child,#legal-privacy .figure figure>div>img:last-child{height:85px;width:340px}}@media (max-width: 580px){#contact .figure figure>div>img:last-child,#legal-privacy .figure figure>div>img:last-child{height:50px;width:200px}}#contact .figure>.cursor,#legal-privacy .figure>.cursor{display:block;margin:0 auto;position:relative;z-index:5;-ms-transform:translate3d(0, -500px, 0) scale3d(1, 1, 1);-webkit-transform:translate3d(0, -500px, 0) scale3d(1, 1, 1);transform:translate3d(0, -500px, 0) scale3d(1, 1, 1);-webkit-backface-visibility:hidden;-webkit-transform-style:preserve-3d;-webkit-transition:-webkit-transform 1s 1s;-moz-transition:transform 1s 1s;-ms-transition:transform 1s 1s;-webkit-transition:transform 1s 1s;transition:transform 1s 1s}html.no-csstransforms3d #contact .figure>.cursor,html.no-csstransforms3d #legal-privacy .figure>.cursor{-ms-transform:translate(0, -500px);-webkit-transform:translate(0, -500px);transform:translate(0, -500px)}.touch #gum #contact figure>div>img{opacity:0}.touch #gum #contact.in figure>div>img:last-child{opacity:1}.no-pointerevents #contact .guides img{z-index:0}#contact.in figure{background-position:100% 50%;background-size:200%;-ms-transform:translate3d(0, 15%, 0) scale3d(1, 1, 1);-webkit-transform:translate3d(0, 15%, 0) scale3d(1, 1, 1);transform:translate3d(0, 15%, 0) scale3d(1, 1, 1);-webkit-backface-visibility:hidden;-webkit-transform-style:preserve-3d}html.no-csstransforms3d #contact.in figure{-ms-transform:translate(0, 15%);-webkit-transform:translate(0, 15%);transform:translate(0, 15%)}#contact.in figure>div{opacity:1}#contact.in figure>div>img:first-child{display:block}#contact.in figure>div>img:last-child{opacity:1;-moz-transition:opacity 1s 3.5s;-ms-transition:opacity 1s 3.5s;-webkit-transition:opacity 1s 3.5s;transition:opacity 1s 3.5s}#contact.in .cursor{-ms-transform:translate3d(0, 10px, 0) scale3d(1, 1, 1);-webkit-transform:translate3d(0, 10px, 0) scale3d(1, 1, 1);transform:translate3d(0, 10px, 0) scale3d(1, 1, 1);-webkit-backface-visibility:hidden;-webkit-transform-style:preserve-3d}html.no-csstransforms3d #contact.in .cursor{-ms-transform:translate(0, 10px);-webkit-transform:translate(0, 10px);transform:translate(0, 10px)}#legal-privacy{height:920px}@media (max-width: 1024px){#legal-privacy{height:1000px}}@media (max-width: 767px){#legal-privacy{height:840px}}@media (max-width: 580px){#legal-privacy{height:720px}}#legal-privacy .tablet-container{float:none;margin:0 auto;top:2%}#legal-privacy .tablet-container>div{background-image:url("img/wywh/wywh-legal-privacy.jpg");height:360px;margin:0 auto;position:relative;top:-380px;left:1px;width:480px}@media (max-width: 767px){#legal-privacy .tablet-container>div{height:276px;top:-291px;width:368px}}@media (max-width: 580px){#legal-privacy .tablet-container>div{height:168.91803px;top:-178px;width:224px}}#legal-privacy .tablet-container>div>div{background:rgba(0,0,0,0);height:100%;overflow:hidden;-moz-transition:background 1s 2s;-ms-transition:background 1s 2s;-webkit-transition:background 1s 2s;transition:background 1s 2s;width:100%}#legal-privacy .tablet-container>div>div>img{display:block;margin:0 auto;opacity:0;-moz-transition:opacity 1s 2s;-ms-transition:opacity 1s 2s;-webkit-transition:opacity 1s 2s;transition:opacity 1s 2s;width:360px}@media (max-width: 767px){#legal-privacy .tablet-container>div>div>img{height:auto;width:300px}}@media (max-width: 580px){#legal-privacy .tablet-container>div>div>img{width:170px}}#legal-privacy .tablet-container>.cursor{-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1);-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1);transform:translate3d(0, 0, 0) scale3d(1, 1, 1);-webkit-backface-visibility:hidden;-webkit-transform-style:preserve-3d}html.no-csstransforms3d #legal-privacy .tablet-container>.cursor{-ms-transform:translate(0, 0);-webkit-transform:translate(0, 0);transform:translate(0, 0)}.touch #gum #legal-privacy .tablet-container img{opacity:0}.touch #gum #legal-privacy.in .tablet-container img{opacity:1}.touch #legal-privacy{height:620px}@media (max-width: 1024px){.touch #legal-privacy{height:640px}}@media (max-width: 767px){.touch #legal-privacy{height:540px}}@media (max-width: 580px){.touch #legal-privacy{height:320px}}#legal-privacy.in .cursor{-ms-transform:translate3d(0, -520px, 0) scale3d(1, 1, 1);-webkit-transform:translate3d(0, -520px, 0) scale3d(1, 1, 1);transform:translate3d(0, -520px, 0) scale3d(1, 1, 1);-webkit-backface-visibility:hidden;-webkit-transform-style:preserve-3d}html.no-csstransforms3d #legal-privacy.in .cursor{-ms-transform:translate(0, -520px);-webkit-transform:translate(0, -520px);transform:translate(0, -520px)}@media (max-width: 767px){#legal-privacy.in .cursor{-ms-transform:translate3d(0, -400px, 0) scale3d(1, 1, 1);-webkit-transform:translate3d(0, -400px, 0) scale3d(1, 1, 1);transform:translate3d(0, -400px, 0) scale3d(1, 1, 1);-webkit-backface-visibility:hidden;-webkit-transform-style:preserve-3d}html.no-csstransforms3d #legal-privacy.in .cursor{-ms-transform:translate(0, -400px);-webkit-transform:translate(0, -400px);transform:translate(0, -400px)}}@media (max-width: 580px){#legal-privacy.in .cursor{-ms-transform:translate3d(0, -245px, 0) scale3d(1, 1, 1);-webkit-transform:translate3d(0, -245px, 0) scale3d(1, 1, 1);transform:translate3d(0, -245px, 0) scale3d(1, 1, 1);-webkit-backface-visibility:hidden;-webkit-transform-style:preserve-3d}html.no-csstransforms3d #legal-privacy.in .cursor{-ms-transform:translate(0, -245px);-webkit-transform:translate(0, -245px);transform:translate(0, -245px)}}#legal-privacy.in .tablet-container>figure ~ div>div{background:rgba(0,0,0,0.75)}#legal-privacy.in .tablet-container>figure ~ div>div>img{opacity:1}
		</style>
	</head>
	<body>
		<div id="wrapper">
			<header id="header">
				<nav>
					<ul>
						<li class="hatch active"><div></div></li>
						<li class="pulse"><div></div></li>
						<li class="bounce"><div></div></li>
						<li class="tossing"><div></div></li>
					</ul>
				</nav>
			</header>
			<div id="gum" class="animate">
				<div id="wywh" class="each">
					<section>
						<div class="container">
							<figure class="monitor out">
								<div>
									<img src="http://img.tonyli.me/wywh/wywh-desktop.jpg" alt="">
									<div>
										<img src="http://img.tonyli.me/wywh/wywh-desktop-2.png" alt="">
									</div>
									<a class="arrow"></a>
								</div>
							</figure>
						</div><!--/.container-->
					</section>
					<section id="responsive">
						<div class="container">
							<div class="tablet-container">
								<figure class="tablet">
								</figure>
								<img src="http://img.tonyli.me/wywh/wywh-tablet.jpg" height="1250" width="480" alt="">
								<!--
								<div></div>-->
							</div><!--/.tablet-container-->
							<div class="phone-container">
								<figure class="phone">
								</figure>
								<img src="http://img.tonyli.me/wywh/wywh-phone.jpg" height="917" width="176" alt="">
								<!--
								<div></div>-->
							</div><!--/.phone-container-->
						</div><!--/.container-->
					</section>
					<section id="contact">
						<div class="container">
							<div class="guides">
								<img src="http://img.tonyli.me/wywh/wywh-guides.svg" class="guides" alt="">
							</div>
							<div class="figure">
								<figure>
									<div>
										<img src="http://img.tonyli.me/wywh/loading.svg" height="60" width="60" alt="">
										<img src="http://img.tonyli.me/wywh/wywh-thanks.png" height="100" width="400" alt="">
									</div>
								</figure>
								<img src="http://img.tonyli.me/cursor.svg" class="cursor" height="20" width="20" alt="">
							</div>
						</div><!--/.container-->
					</section>
					<section id="legal-privacy">
						<div class="container">
							<div class="tablet-container">
								<figure class="tablet-guides"></figure>
								<div>
									<div>
										<img src="http://img.tonyli.me/wywh/wywh-legal-privacy-2.png" height="360" width="360" alt="">
									</div>
								</div>
								<img src="http://img.tonyli.me/cursor.svg" class="cursor" height="20" width="20" alt="">
							</div><!--/.tablet-container-->
						</div><!--/.container-->
					</section>
				</div><!--/#wywh-->
				<div id="stylepro" class="each">
					<section>
						<div class="container">
							<figure class="monitor out">
								<div>
									<img src="http://img.tonyli.me/stylepro/stylepro-1.jpg" alt="">
									<a class="arrow"></a>
								</div>
							</figure>
						</div><!--/.container-->
					</section>
					<section id="logo">
						<div class="container">
							<img src="http://img.tonyli.me/stylepro/stylepro-4.svg" height="160" width="160" alt="">
						</div><!--/.container-->
					</section>
					<section id="additional">
						<div class="container">
							<figure class="browser">
								<div>
									<img src="http://img.tonyli.me/stylepro/stylepro-2.jpg" height="523" width="916" alt="">
								</div>
							</figure>
							<figure class="browser">
								<div>
									<img src="http://img.tonyli.me/stylepro/stylepro-2.jpg" height="523" width="916" alt="">
								</div>
							</figure>
						</div><!--/.container-->
					</section>
				</div><!--/#stylepro-->
				<div id="emailc" class="each">
					<section>
						<div class="container">
							<figure class="email sparrow out">
								<div>
									<img src="http://img.tonyli.me/emailc/emailc-1.png" height="788" width="458" alt="">
									<a class="arrow"></a>
								</div>
							</figure>
							<figure class="email windows out">
								<div>
									<img src="http://img.tonyli.me/emailc/emailc-2.png" height="640" width="458" alt="">
									<a class="arrow"></a>
								</div>
							</figure>
						</div><!--/.container-->
					</section>
				</div><!--/#emailc-->
				<div id="ucsf" class="each">
					<section>
						<div class="container">
							<figure class="shirt">
								<div class="bacteria-3"></div>
								<ul>
									<li class="bacteria-1"></li>
									<li class="bacteria-2"></li>
									<li class="bacteria-3"></li>
									<li class="bacteria-4"></li>
								</ul>
							</figure>
						</div><!--/.container-->
					</section>
				</div><!--#ucsf-->
			</div><!--/#gum-->
		</div><!--/#wrapper-->
		<footer class="small-entrance">
			<div>
				<div class="ends"></div><!--
				--><div id="email" class="email-width">
					<a href="mailto:tli415@gmail.com">tli415@gmail.com</a>
				</div><!--
				--><div class="ends"></div>
			</div>
		</footer>
		<script src="js/modernizr.js"></script>
		<script>
			yepnope([{
				load: 'http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js',
				complete: function (){
					if (!window.jQuery) {
						yepnope('js/jquery-2.0.3.min.js');
					}
				}
			}, {
				load: ['<?php echo auto_version('css/main.css'); ?>','js/hammer.min.js','<?php echo auto_version('js/main.min.js'); ?>'],
			}]);
		</script>
		<script>
			var _gaq=[['_setAccount','UA-25686737-2'],['_trackPageview']];
			(function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
			g.src='//www.google-analytics.com/ga.js';
			s.parentNode.insertBefore(g,s)}(document,'script'));
		</script>
	</body>
</html>