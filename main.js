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
    printTo.innerHTML = domString;
};

//****CREATE CARDS FOR EACH OBJECT AND CALL PrintToDom FUNCTION****//

const cardMaker = (destinationsArray) => {
    let domString = '';
    destinationsArray.forEach((destinations) => {
        const destinationsId = `${destinations.location.replace(' ', '_')}`;
        domString += `<div class="card">`;
        domString += `<h2>${destinations.location}</h2>`;
        domString += `<img class="image" src="${destinations.image}" alt="">`;
        domString += `<h3>${destinations.description}</h3>`;
        domString += `<textarea class="input" placeholder="tell your story here" rows="4" columns="30"></textarea><br>`;
        domString += `<button class="card-button" id="destinationsId">Post</button>`;
        domString += `</div>`;
    });
    printToDom(domString, 'card-holder');
};
cardMaker(destinations);

//***LOOP THROUGH DESTINATIONS & ASSIGN EVENT LISTENERS TO CARD BUTTONS****/

const allTheButtons = document.getElementById('destinationsId');
    for (let i = 0; i < allTheButtons.length; i++) {
        allTheButtons[i].addEventListener('click', (e) => {
            const userInput = input.value;
            let domOutput = '';
            if (e.target.id === 'switzerland') {
                domOutput = switzerland[userInput];
                } else if (e.target.id === 'tahiti') {
                    domOutput = tahiti[userInput];
                // } else if (e.target.id === 'new-zealand') { 
                //     domOutput = new-zealand[userInput];
                
                // 
                } else if (e.target.id === 'peru') {
                    domOutput = peru[userInput];
                } else {
                    domOutput = china[userInput];
                }
                outputBox.innerHTML = domOutput;
            })
            printToDom(domOutput, 'diary-holder');
        };

        // build domString for output?
      
// const moveIt = (e) => {
//     const nameOfDestination = e.target.parentNode.children[0];
//     nameOfDestination.classList.add('location');
// };


// const startApplication = () => {
//     cardMaker(destinations);
// };

// startApplication();
