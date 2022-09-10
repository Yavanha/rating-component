var selectedRating = undefined;

const setRatingEventistener = () => {
    const ratingContainer = document.querySelector(".scores");
    const ratingsButton = ratingContainer.childNodes;
    for (let i = 0; i < ratingsButton.length; i++) {
        ratingsButton[i].addEventListener("click", (e) => {
            if (selectedRating) {
                selectedRating.classList.remove("score-selected");
                if (selectedRating === ratingsButton[i])
                    return;
            }

            selectedRating = ratingsButton[i];

            selectedRating.classList.add("score-selected");
        });

    }
}

const hideContainer = () => {
    const containers = document.querySelectorAll("article");
    console.log(containers);
    for(let i = 0; i < containers.length; i++) {
        containers[i].classList.toggle("hidden", !containers[i].classList.contains("hidden"));
    }
}

const setSubmitButtonEventListener = () => {
    const button = document.querySelector(".submit");
    const ratingElement = document.querySelector(".selected-rating");
    button.addEventListener("click", (e) => {
        if(selectedRating) {
            ratingElement.innerText = selectedRating.innerText;
            hideContainer()
        } else {
            alert('Please select a rating first')
        }
    
    });
}

setRatingEventistener()
setSubmitButtonEventListener();