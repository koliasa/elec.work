var tpj=jQuery;

var revapi476;
tpj(document).ready(function() {
if(tpj("#rev_slider_476_1").revolution == undefined){
revslider_showDoubleJqueryError("#rev_slider_476_1");
}else{
revapi476 = tpj("#rev_slider_476_1").show().revolution({
sliderType:"standard",
jsFileLocation:"../../revolution/js/",
sliderLayout:"full",
dottedOverlay:"none",
delay:9000,
navigation: {
keyboardNavigation:"on",
keyboard_direction: "horizontal",
mouseScrollNavigation:"off",
mouseScrollReverse:"default",
onHoverStop:"off",
 touch: {
    touchenabled: "on",
    swipe_threshold: 75,
    swipe_min_touches: 1,
    swipe_direction: "horizontal",
    drag_block_vertical: false
},
arrows: {
    style:"",
    enable:false,
    hide_onmobile:true,
    hide_onleave:true,
    tmp:'',
    left: {
        h_align:"left",
        v_align:"center",
        h_offset:20,
        v_offset:0
    },
    right: {
        h_align:"right",
        v_align:"center",
        h_offset:20,
        v_offset:0
    }
}
},
visibilityLevels:[1240,1024,778,480],
gridwidth:1240,
gridheight:1270,
lazyType:"none",
parallax: {
type:"mouse",
origo:"enterpoint",
speed:400,
levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
type:"mouse",
},
shadow:0,
spinner:"spinner3",
stopLoop:"on",
stopAfterLoops:1,
stopAtSlide:1,
shuffle:"off",
autoHeight:"off",
fullScreenAutoWidth:"off",
fullScreenAlignForce:"off",
fullScreenOffsetContainer: "",
fullScreenOffset: "60px",
disableProgressBar:"on",
hideThumbsOnMobile:"off",
hideSliderAtLimit:0,
hideCaptionAtLimit:0,
hideAllCaptionAtLilmit:0,
debugMode:false,
fallbacks: {
simplifyAll:"off",
nextSlideOnWindowFocus:"off",
disableFocusListener:false,
}
});


var snowsettings = {   
selector:'.tp-static-layers',
dimension:'self', 
particleMaxPer:400,
particlaSize:[0.2,6],
particleOpacity:[0.3,1],
particleSpeed:[30,100],
particleSinus:[1,100]
};


revapi476.bind("revolution.slide.onloaded",function (e) {
 
});
    }
});
