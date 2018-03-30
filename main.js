//******CREATE AN ARRAY OF OBJECTS*********/
const destinations = [
    {
        location: "Switzerland",
        image: "https://cloudfront.traillink.com/photos/fowler-trail_137668_sc.jpg",
        description: "Switzerland trail",
    },
    {
        location: "Tahiti",
        image:"http://media.triseptsolutions.com/sites/vaxwebfjt/PublishingImages/FJT_images/Destinations/South-Pacific/Tahiti/Tahiti_1200x612_Hero.jpg",        
        description: "Huts on the water, whoa",
    },
    {
        location: "New Zealand",
        image: "http://www.simonsholidays.in/wp-content/uploads/2015/04/international-holiday-of-New-Zealand.jpg",
        description: "Mountains and water",
    },
    {
        location: "Peru",
        image:"http://famouswonders.com/wp-content/gallery/machu-picchu/machu-picchu-late-afternoon.jpg",        
        description: "The famous Machu Picchu",
    },
    {
        location: "China",
        image: "https://www.telegraph.co.uk/content/dam/Travel/leadAssets/28/00/wall4_2800060a.jpg?imwidth=450",
        description: "The Great Wall of China",
    }
];

//****CREATE PrintToDom FUNCTION*****//

const printToDom = (domString, divId) => {
    const printTo = document.getElementById(divId);
    printTo.innerHTML += domString;
};

//****CREATE CARDS FOR EACH OBJECT AND CALL PrintToDom FUNCTION****//

const cardMaker = (destinationsArray) => {
    let domString = '';
    destinationsArray.forEach((destination) => {
        domString += `<div class="card">`;
        domString += `<h2>${destination.location}</h2>`;
        domString += `<img class="image" src="${destination.image}" alt="">`;
        domString += `<h3>${destination.description}</h3>`;
        domString += `<textarea class="input" placeholder="tell your story here" rows="4" columns="30"></textarea><br>`;
        domString += `<button class="card-button" id="${destination.location}">Post</button>`;
        domString += `</div>`;
    });
    printToDom(domString, 'card-holder');
};
cardMaker(destinations);

//*****CREATE FUNCTION & CLEAR THE INPUT BOX ONCE THE TEXT MOVES INTO THE DIARY SECTION*****/
const clearInputBox = (input) => {
    input.value = "";
};
//***LOOP THROUGH DESTINATIONS, ASSIGN EVENT LISTENERS TO CARD BUTTONS****/
const allTheButtons = document.getElementsByClassName('card-button');
    for (let i = 0; i < allTheButtons.length; i++) {
        allTheButtons[i].addEventListener('click', (e) => {
// GATHER INPUT AND ASSIGN IT TO A VARIABLE
            const userInput = e.target.previousSibling.previousSibling.value;
            let domOutput = '';
            domOutput += `<div class="output">`;
// INLCLUDE DESTINATION NAME AND USER INPUT IN THE OUTPUT BOX
            domOutput += `<h2>${e.target.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.innerHTML}</h2>`;
            domOutput += `<p>${userInput}</p>`;
            domOutput += `</div>`;
// PRINT RESULTS TO THE DOM & CALL THE clearInputBox FUNCTION            
            printToDom(domOutput, 'diary-holder');
            clearInputBox(e.target.previousSibling.previousSibling);            
        });        
    };



        