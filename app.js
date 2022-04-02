//Grab a couple of things
const section = document.querySelector('section');
const playerLivesCount = document.querySelector("span");
let playerLives = 6;

//link text
playerLivesCount.textContent = playerLives;

//generate the object 
const getData = () => [
    { imgSrc: "./images/beach.jpeg", id: 1, name: "beach" },
    { imgSrc: "./images/building.jpeg", id: 2, name: "building" },
    { imgSrc: "./images/forest.jpeg", id: 3, name: "forest" },
    { imgSrc: "./images/girl.jpeg", id: 4, name: "girl" },
    { imgSrc: "./images/hands.jpeg", id: 5, name: "hands" },
    { imgSrc: "./images/plant.jpeg", id: 6, name: "plant" },
    { imgSrc: "./images/paper.jpeg", id: 7, name: "paper" },
    { imgSrc: "./images/portrait.jpeg", id: 8, name: "portrait" },
    { imgSrc: "./images/tree.jpeg", id: 9, name: "tree" },
    { imgSrc: "./images/beach.jpeg", id: 10, name: "beach" },
    { imgSrc: "./images/building.jpeg", id: 11, name: "building" },
    { imgSrc: "./images/forest.jpeg", id: 12, name: "forest" },
    { imgSrc: "./images/girl.jpeg", id: 13, name: "girl" },
    { imgSrc: "./images/hands.jpeg", id: 14, name: "hands" },
    { imgSrc: "./images/plant.jpeg", id: 15, name: "plant" },
    { imgSrc: "./images/paper.jpeg", id: 16, name: "paper" },
];

// randomize
const randomize = () =>{
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
    
};

//card generator function
const cardGenerator = () => {
    const cardData = randomize();
    //generate the html
    
    cardData.forEach((item) => {
        const card = document.createElement("div");
        const face = document.createElement("img");
        const back = document.createElement("div");
        card.classList = 'card';
        face.classList = 'face';
        back.classList = 'back';
        //attach the info to the cards
        face.src = item.imgSrc;
        card.setAttribute('name', item.name);
        
        //attach the cards to the section
        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);


        card.addEventListener('click', (e) => {
            card.classList.toggle("toggleCard");
            checkCards(e);
        });
    });
};
//check cards
const checkCards = (e) => {
    console.log(e);
    const clickedCard = e.target;
    clickedCard.classList.add("flipped");
    const flippedCards = document.querySelectorAll('.flipped');
    const toggleCard = document.querySelectorAll(".toggleCard");
    console.log(flippedCards);
    //logic
    if(flippedCards.length === 2) {
        if(flippedCards[0].getAttribute('name') === flippedCards[1].getAttribute('name')){
            console.log("match");
            flippedCards.forEach(card => {
                card.classList.remove("flipped");
                card.style.pointerEvents = 'none';
            });
        } else{
            console.log("wrong");
            flippedCards.forEach(card => {
                card.classList.remove("flipped");
                setTimeout(() => card.classList.remove("toggleCard"), 1000); 
            });
            playerLives--;
            playerLivesCount.textContent = playerLives;
            if(playerLives === 0){
                restart("try again looser!");
            }
        }
    }
    //run a check to see if we won
    if(toggleCard.length === 16) {
        restart("you rock!");
    }
};

//restart
const restart = (text) => {
    let cardData = randomize();
    let faces = document.querySelectorAll(".face");
    let cards = document.querySelectorAll(".card");
    section.style.pointerEvents = "none";
    cardData.forEach((item,index) => {
        cards[index].classList.remove("toggleCard");
        //randomize
        setTimeout(() => {
            cards[index].style.pointerEvents = "all";
            faces[index].src = item.imgSrc;
            cards[index].setAttribute("name", item.name);
            section.style.pointerEvents = "all";
        }, 1000);
    });
    playerLives = 6;
    playerLivesCount.textContent = playerLives;
    setTimeout(() => window.alert(text), 100);
};

cardGenerator();

