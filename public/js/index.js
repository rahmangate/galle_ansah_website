





$(document).ready(function(){
    
    // Detect request animation frame
var scroll = window.requestAnimationFrame ||
// IE Fallback
function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll, .animate'); 

function loop() {

Array.prototype.forEach.call(elementsToShow, function(element){
if (isElementInViewport(element)) {
element.classList.add('is-visible');
} else {
element.classList.remove('is-visible');
}
});

scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
// special bonus for those using jQuery
if (typeof jQuery === "function" && el instanceof jQuery) {
el = el[0];
}
var rect = el.getBoundingClientRect();
return (
(rect.top <= 0
&& rect.bottom >= 0)
||
(rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
rect.top <= (window.innerHeight || document.documentElement.clientHeight))
||
(rect.top >= 0 &&
rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
);
}


    $(".show-bg-img").not("a").on("click",(ev)=>{
        ev.preventDefault();
        let image=$(ev.target).css('background-image')
        let src= $(ev.target).css('background-image').replace('url("','').replace('")','')  
         
         $('.img-modal-body').html('<img src="'+src+'" alt />')
        $('.img-modal').show(400)
    })

    $(".img-card-small").not("a").on("click",(ev)=>{
        ev.preventDefault();
        let image=$(ev.target).css('background-image')
        let src= $(ev.target).parent().css('background-image').replace('url("','').replace('")','')
        
         $('.img-modal-body').html('<img src="'+src+'" alt />')
        $('.img-modal').show(400)
    })

    $(".img-modal").on("click",(ev)=>{
        ev.stopPropagation()
        $('.img-modal').hide(5000)
        
    })

    $('.contact-form form').on('submit',(ev)=>{
        ev.preventDefault()
        confirm("Do you want to send this message?") ;

    })

    $('.news-letter-form button').on('click',(ev)=>{
        confirm("Do you want to subscribe for our news letter?") ;
    })

})
