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

const printToDom = (domString, divId) => {
    const printTo = document.getElementById(divId);
    printTo.innerHTML = domString;
};

const cardMaker = (destinationsArray) => {
    let domString = '';
    destinationsArray.forEach((destinations) => {
        domString += `<div class="card">`;
        domString += `<h1>${destinations.location}</h1>`;
        domString += `<h3>${destinations.description}</h3>`;
        domString += `<img class="image" src="${destinations.image}" alt="">`;
        domString += `<input type="text" class="input" placeholder="type your text here"><br>`
        domString += `<button class="card-button">Submit</button>`;
        domString += `</div>`;
    });
    printToDom(domString, 'card-holder');
}

cardMaker(destinations);

// const allTheButtons = document.getElementsByClassName('card-button');

// for (let i = 0; i < allTheButtons.length; i++) {
//     allTheButtons[i].addEventListener('click', (e) => {
//         console.log('event!!!!!!!!', e);
//     });
// }