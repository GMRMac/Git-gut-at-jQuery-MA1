var slideCounter = 1;

// This runs the code once the page is fully loaded
$(document).ready(function(){
    showSlides(slideCounter);
})

// This function gets initiated when you click one of the arrows
function slideNumber(counter){
    showSlides(slideCounter += counter)
};

// Thus function gets initiated when you click one of the dots below the carousel
function slide(counter){
    showSlides(slideCounter = counter)
}

// This function is where the magic happens
function showSlides(counter){
    var i,
        slides = $(".slide"),
        pictureDots = $(".picture--dot");
    if (counter > slides.length) {
        slideCounter = 1;
    } 
    else if (counter < 1){
        slideCounter = slides.length
    }
    for(i = 0; i < slides.length; i++){
        $(".slide").css("display", "none")
    }
    for(i = 0; i < pictureDots.length; i++){
        pictureDots[i].className = pictureDots[i].className.replace(" active", " ");
    }
    slides[slideCounter-1].style.display = "block";
    pictureDots[slideCounter-1].className += " active"
};