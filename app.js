//Grab a couple of things
const section = document.querySelector('section');
const playerLivesCount = document.querySelector("span");
const playerLives = 7;

//link text
playerLivesCount.textContent = playerLives;

//generate the data 
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

const data = getData();

