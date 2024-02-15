var count=0;

function navigateToPage() {
    window.location.href = 'yes.html';
}

function enlargeYes() {
    var wordsArray = [
        "please",
        "pretty please",
        "are you sure",
        "pleeeeeasee",
        "could you please",
        "if you don't mind",
        "would you kindly",
        "I would appreciate it if",
        "I beg of you",
        "I'm begging you",
        "if it's not too much trouble",
        "if you would be so kind",
        "I'd be grateful if",
        "I'd appreciate it",
        "could you possibly",
        "would it be possible to",
        "could you do me a favor and"
    ];
    var yesButton = document.getElementById('yes-button');
    var buttonWidth = yesButton.offsetWidth+10;
    var buttonHeight = yesButton.offsetHeight+10;

    yesButton.style.width = buttonWidth+'px';
    yesButton.style.height = buttonHeight+'px';

    yesButton.innerHTML = wordsArray[Math.floor(Math.random() * wordsArray.length)];
    yesButton.innerText = wordsArray[Math.floor(Math.random() * wordsArray.length)];
    var buttonsDiv = document.getElementsByClassName('.buttons-div');

    var fontSize = Math.min(buttonWidth * 0.1, buttonHeight*0.1); // Adjust these factors as needed
    yesButton.style.fontSize = fontSize + 'px';

    changeImage();
}

function changeImage() {
    var randomImages = ['image1.jpeg', 
    'image2.gif', 
    'image3.jpg', 
    'image4.png', 
    'image5.jpg', 
    'image6.jpg', 
    'image7.jpg', 
    'image8.jpg', 
    'image9.jpg', 
    'image10.gif', 
    'image11.gif', 
    'image13.jpg', 
    'image12.png', 
    'image14.jpg',
    'image15.jpg']
    imageContainer = document.getElementById('valentines-image');
    count+=1
    if (count >= randomImages.length) {
        count = 0
    }
    imageContainer.src = randomImages[count];
}