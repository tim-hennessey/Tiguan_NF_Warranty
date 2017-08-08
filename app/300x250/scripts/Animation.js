var app = app || {};


app.Animation = (function () {

    var curtain,
        tl,
        buttonExit,
        buttonLegal,
        tig1,
        txt1,
        warranty,
        legal_btn_txt,
        hero,
        cta_arrow,
        cta_txt,
        legal,
        legal_btn_txt_2,
        line,
        buttonLegal2;

    // --------------------------------------------------------------------------------------
    // set default properties
    function initialize() {
        tl = new TimelineMax();

        curtain = document.getElementById('curtain');
        buttonExit = document.getElementById('button-exit');
        buttonLegal = document.getElementById('button-legal');
        tig1 = document.getElementById('tig1');
        txt1 = document.getElementById('txt1');
        warranty = document.getElementById('warranty');
        legal_btn_txt = document.getElementById('legal_btn_txt');
        hero = document.getElementById('hero');
        cta_arrow = document.getElementById('cta_arrow');
        cta_txt = document.getElementById('cta_txt');
        legal = document.getElementById('legal');
        legal_btn_txt_2 = document.getElementById('legal_btn_txt_2');
        line = document.getElementById('line');
        buttonLegal2 = document.getElementById('button-legal2');

        buttonExit.addEventListener('mouseover', function () {
            TweenMax.to(cta_arrow, .25, {x: 5, ease: Sine.easeOut});
            TweenMax.to(cta_arrow, .25, {x: 0, delay: .25, ease: Sine.easeIn});
        });

    }

    // --------------------------------------------------------------------------------------
    // Starts the animation
    function start() {
        tl.to(curtain, .5, {opacity: 0})
            .to(tig1, 3, {scale: .82, y: "+=20", ease: Sine.easeOut}, "-=.5")
            .to(txt1, 1, {opacity: 1}, "-=1")
            .to(legal_btn_txt, 1, {opacity: 1, onComplete:addLegal}, "-=1")
            .to(warranty, 1, {opacity: 1}, "-=1")
            .to(txt1, .5, {opacity: 0}, "+=3")
            .to(txt2, .5, {opacity: 1})
            .to(hero, 1, {opacity: 1, onComplete:removeLegal}, "+=3")
            .to(warranty, .5, {opacity: 0}, "-=1")
            .to(cta_txt, .5, {opacity: 1})
            .to(cta_arrow, .5, {opacity: 1}, "-=.5")
            .to(legal_btn_txt_2, .5, {opacity: 1}, "-=.5")
            .to(line, .5, {opacity: 1}, "-=.5");
    }

    function legalOverFunc() {
        TweenMax.to(legal, .25, {opacity: 1});
    }

    function legalOutFunc() {
        TweenMax.to(legal, .25, {opacity: 0});
    }

    function addLegal() {
        buttonLegal.addEventListener('mouseover', legalOverFunc, true);
        buttonLegal.addEventListener('mouseout', legalOutFunc, true);
    }

    function removeLegal() {
        buttonLegal.removeEventListener('mouseover', legalOverFunc, true);
        buttonLegal.removeEventListener('mouseout', legalOutFunc, true);
        buttonLegal2.addEventListener('mouseover', legalOverFunc, true);
        buttonLegal2.addEventListener('mouseout', legalOutFunc, true);
        TweenMax.to(legal, .25, {opacity: 0});
        buttonLegal.style.pointerEvents = "none";
        buttonLegal2.style.pointerEvents = "auto";
    }

    // --------------------------------------------------------------------------------------
    // Stops the animation
    function stop() {
        console.log("stopping animation");
    }

    // --------------------------------------------------------------------------------------
    // Publicly accessible methods and properties
    return {
        initialize: initialize,
        start: start,
        stop: stop
    }

})();
