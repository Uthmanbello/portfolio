const projectArr = [
  {
      id: 0,
      title: 'De Royale Institute',
      mobileImage: 'images/deroyale-mob.png',
      desktopImage: 'images/deroyale-desk.png',
      description: 'A web/mobile app for a tech institute which offers different couses annually',
      technologies: ['html', 'css', 'javascript'],
      live: 'https://uthmanbello.github.io/Capstone1/',
      source: 'https://github.com/Uthmanbello/Capstone1'
  },
  {
      id: 1,
      title: 'The 100 Series',
      mobileImage: 'images/100-mob.png',
      desktopImage: 'images/100-desk.png',
      description: "A single page application built with JavaScript which interacts with two APIs. It is an app wherein users can 'like' respective seasons of 'The 100' series, add comments and reservations too.",
      technologies: ['html', 'css', 'javascript'],
      live: 'https://uthmanbello.github.io/capstone2/dist',
      source: 'https://github.com/Uthmanbello/capstone2'
  },
  {
      id: 2,
      title: 'Bookstore',
      mobileImage: 'images/bookstore-mob.png',
      desktopImage: 'images/bookstore-desk.png',
      description: 'Bookstore is a project that uses a Single Page Application format to display items on a page. A user can switch to two pages wherein one displays the titles and authors of books, and also a form to add a new book.',
      technologies: ['html', 'css', 'react/redux'],
      live: 'https://bookstore-17ah.onrender.com/',
      source: 'https://github.com/Uthmanbello/bookstore'
  },
  {
      id: 3,
      title: 'Weather App',
      mobileImage: 'images/weather-mob.png',
      desktopImage: 'images/weather-desk.png',
      description: 'Weather App is a project that uses a Single Page Application format to display items on a page. A user can access different weather information by simply clicking on the relevant category.',
      technologies: ['html', 'css', 'react/redux'],
      live: 'https://weather-app-1unw.onrender.com/',
      source: 'https://github.com/Uthmanbello/metrics-webapp'
  },
  {
      id: 4,
      title: 'Math Magicians',
      mobileImage: 'images/math-mob.png',
      desktopImage: 'images/math-desk.png',
      description: 'Math Magician is a project that uses a Single Page Application format to display items on a page. A user can switch to a page where a live calculator which can be used for computation is.',
      technologies: ['html', 'css', 'javascript'],
      live: 'https://math-magicians-3rc8.onrender.com/',
      source: 'https://github.com/Uthmanbello/math-magicians'
  },
  {
      id: 5,
      title: 'Tutoring App',
      image: 'images/Screenshot Tutoring app portfolio.png',
      desktopImage: 'images/Screenshot Tutoring app portfolio.png',
      description: 'Tutoring App is a single page app that enables users to effortlessly manage classes, including adding, deleting, and viewing class details. It also provides reservation functionality, allowing users to make reservations and view their reservation details.',
      technologies: ['ruby', 'rails', 'react'],
      live: 'https://tutoring-front-end.onrender.com/',
      source: 'https://github.com/Uthmanbello/tutoring-app-frontend'
  },
  {
      id: 6,
      title: "Space Travelers' Hub",
      image: 'images/Screenshot Space Traveller portfolio.png',
      desktopImage: 'images/Screenshot Space Traveller portfolio.png',
      description: "Space Travellers' Hub is a project which works with live data from the SpaceX API. The app allows users to book rockets and join selected space missions.",
      technologies: ['html', 'react/redux', 'javascript'],
      live: 'https://space-travellers-hub-ns1r.onrender.com/',
      source: 'https://github.com/Uthmanbello/react_group_project'
  }
]

const cards = document.querySelector('.cards');
const popup = document.querySelector('.popup');

let html = '';

projectArr.forEach((project) => {
  html += `
    <div class="card">
      <div class="project-card">
        <img src="${project.desktopImage}" alt="Project Image" class="card-image">        
        <h3 class="card-title">${project.title}</h3>
        <p class="card-description">${project.description}</p>
        <div class="tech">
          <span>${project.technologies[0]}</span>
          <span>${project.technologies[1]}</span>
          <span>${project.technologies[2]}</span>
        </div>
        <button type="button" class="center card-button">See Project</button>
      </div>
    </div>
  `;
});

cards.innerHTML = html;

const projectButtons = document.querySelectorAll('.card-button');

for (let index = 0; index < projectButtons.length; index++) {
  projectButtons[index].addEventListener('click', () => {
      const title = popup.querySelector('.popup-title');
      const liveButton = popup.querySelector('.see-live');
      const sourceButton = popup.querySelector('.see-source');
      const popupContent = popup.querySelector('.popup-content');

      title.textContent = projectArr[index].title;
      // popupContent.style.backgroundImage = `url('${projectArr[index].desktopImage}')`;
      if (window.innerWidth < 768) {
        // Mobile view
        popupContent.style.backgroundImage = `url('${projectArr[index].mobileImage}')`;
      } else {
        // Desktop view
        popupContent.style.backgroundImage = `url('${projectArr[index].desktopImage}')`;
      }

      liveButton.setAttribute('href', projectArr[index].live);
      sourceButton.setAttribute('href', projectArr[index].source);

      popup.classList.add('show')
      document.body.style.overflowY = 'hidden';
  }) 
}

const btnClosePopup = document.querySelector('.popup-close');
btnClosePopup.addEventListener('click', () => {
    popup.classList.remove('show');
    document.body.style.overflowY = 'auto';
})
