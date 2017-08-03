!(function(doc, win) {
    var docEle = doc.documentElement,
        evt = "onorientationchange" in window ? "orientationchange" : "resize",
        fn = function() {
            var width = docEle.clientWidth > 750? 750:docEle.clientWidth;
            width && (docEle.style.fontSize = 20 * (width / 375) + "px");
        };

    win.addEventListener(evt, function(){
        fn();
        setTimeout(fn,50);
    }, false);
    doc.addEventListener("DOMContentLoaded", function(){
        fn();
        setTimeout(fn,50);
    }, false);

}(document, window));
