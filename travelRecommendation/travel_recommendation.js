let travelData = {};

fetch('./travel_recommendation_api.json')
  .then(res => res.json())
  .then(data => {
    travelData = data;
    console.log(travelData); // ✅ required
  })
  .catch(err => console.error(err));



const intro = document.querySelector(".intro");
const about = document.querySelector(".aboutUs");
const search = document.querySelector(".nav-search");
const contact = document.querySelector(".contactUs");


const originalIntro = intro.innerHTML;


document.getElementById('navAboutUs').addEventListener("click", function(e){
  e.preventDefault();

  intro.style.display = "none";
  contact.style.display = "none";
  search.style.display = "none";
  about.style.display = "block";

  about.innerHTML = `
  <h1 id="aboutUsH1">ABOUT US</h1> 
  <p style="text-align:justify;">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>

  <h2 id="ourTeam">OUR TEAM</h2>
  <div class="team-section">
    <div class="card">
      <div class="avatar">👤</div>
      <h3>John Doe</h3>
      <p>CEO</p>
    </div>

    <div class="card">
      <div class="avatar">👤</div>
      <h3>Celina Thomas</h3>
      <p>Team Lead</p>
    </div>

    <div class="card">
      <div class="avatar">👤</div>
      <h3>Mike Tyson</h3>
      <p>Delivery Head</p>
    </div>
  </div>
  `;
});


document.getElementById('navContactUs').addEventListener("click", function(e){
  e.preventDefault();

  contact.style.display = "block";   
  search.style.display = "none";   
  about.style.display = "none";
  intro.style.display = "none";

  contact.innerHTML = `
  <div id="contactUsContainer">
    <div class='contactUsContent'>
      <h1 id='contactUsH1'>CONTACT US</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>

    <form id="contactUsForm">
      <input type='text' class='forms' placeholder="Name">
      <input type='email' class='forms' placeholder="Email">
      <textarea placeholder="Enter message..." rows="10"></textarea>
      <button id='contactUsSubmit'>Submit</button>
    </form>
  </div>
  `;
});



document.getElementById('navHome').addEventListener("click", function(e){
  e.preventDefault();

  intro.style.display = "block";
  search.style.display = "flex";
  about.style.display = "none";
  contact.style.display = "none";


  intro.innerHTML = originalIntro;
});


document.querySelector('.search-btn').addEventListener('click', function () {
  const keyword = document.getElementById('searchBar').value.toLowerCase();
  searchPlaces(keyword);
});



document.querySelector('.clear-btn').addEventListener('click', function () {
  intro.innerHTML = originalIntro;
});



function searchPlaces(keyword) {

  intro.style.display = "block";
  about.style.display = "none";
  contact.style.display = "none";

  intro.innerHTML = "";

  keyword = keyword.toLowerCase();
  let found = false;

  if (keyword.includes("beach")) {
    travelData.beaches.slice(0, 2).forEach(place => {
      intro.innerHTML += createCard(place);
      found = true;
    });
  }

  if (keyword.includes("temple")) {
    travelData.temples.slice(0, 2).forEach(place => {
      intro.innerHTML += createCard(place);
      found = true;
    });
  }


  if (keyword.includes("country")) {
    travelData.countries.forEach(country => {
      country.cities.slice(0, 2).forEach(city => {
        intro.innerHTML += createCard(city);
        found = true;
      });
    });
  }


  travelData.countries.forEach(country => {
    if (country.name.toLowerCase().includes(keyword)) {
      country.cities.forEach(city => {
        intro.innerHTML += createCard(city);
        found = true;
      });
    }
  });


  if (!found) {
    intro.innerHTML = "<h2>No results found</h2>";
  }
}

function createCard(place) {
  return `
    <div class="card">
      <h2>${place.name}</h2>
      <img src="${place.imageUrl}" width="200">
      <p>${place.description}</p>
    </div>
  `;
}

document.querySelector('.clear-btn').addEventListener('click', function () {
  
  // clear search input
  document.getElementById('searchBar').value = "";

  // restore original home content
  intro.innerHTML = originalIntro;

  // reset visibility
  intro.style.display = "block";
  about.style.display = "none";
  contact.style.display = "none";
}); 