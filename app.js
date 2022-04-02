//Grab a couple of things
const section = document.querySelector('section');
const playerLivesCount = document.querySelector("span");
const playerLives = 6;

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
        //attach the cards to the section
        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);
    });

   
     


};

cardGenerator();

