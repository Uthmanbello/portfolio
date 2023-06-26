const projectArr = [
  {
      id: 0,
      title: 'De Royale Institute',
      image: 'images/Screenshot sec 1 desk(e).png',
      pop_mob_image: ['images/DeRoyale1.png', 'images/DeRoyale2.png', 'images/DeRoyale3.png'], 
      desktopImage: 'images/Screenshot sec 1 desk(e).png',
      description: 'A web/mobile app for a tech institute which offers different couses annually',
      technologies: ['html', 'css', 'javascript'],
      live: 'https://uthmanbello.github.io/Capstone1/',
      source: 'https://github.com/Uthmanbello/Capstone1'
  },
  {
      id: 1,
      title: 'The 100 Series',
      image: 'images/Screenshot 100 series app portfolio(1).png',
      desktopImage: 'images/Screenshot 100 series app portfolio(1).png',
      description: "A single page application built with JavaScript which interacts with two APIs. It is an app wherein users can 'like' respective seasons of 'The 100' series, add comments and reservations too.",
      technologies: ['html', 'css', 'javascript'],
      live: 'https://uthmanbello.github.io/capstone2/dist',
      source: 'https://github.com/Uthmanbello/capstone2'
  },
  {
      id: 2,
      title: 'Bookstore',
      image: 'images/Screenshot bookstore portfolio(1).png',
      desktopImage: 'images/Screenshot bookstore portfolio(1).png',
      description: 'Bookstore is a project that uses a Single Page Application format to display items on a page. A user can switch to two pages wherein one displays the titles and authors of books, and also a form to add a new book.',
      technologies: ['html', 'css', 'react/redux'],
      live: 'https://bookstore-17ah.onrender.com/',
      source: 'https://github.com/Uthmanbello/bookstore'
  },
  {
      id: 3,
      title: 'Weather App',
      image: 'images/Screenshot weather app portfolio(2).png',
      desktopImage: 'images/Screenshot weather app portfolio(2).png',
      description: 'Weather App is a project that uses a Single Page Application format to display items on a page. A user can access different weather information by simply clicking on the relevant category.',
      technologies: ['html', 'css', 'react/redux'],
      live: 'https://weather-app-1unw.onrender.com/',
      source: 'https://github.com/Uthmanbello/metrics-webapp'
  },
  {
      id: 4,
      title: 'Math Magicians',
      image: 'images/Screenshot math magicians portfolio(1).png',
      desktopImage: 'images/Screenshot math magicians portfolio(1).png',
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
      title: "Space Travellers' Hub",
      image: 'images/Screenshot Space Traveller portfolio.png',
      desktopImage: 'images/Screenshot Space Traveller portfolio.png',
      description: "Space Travellers' Hub is a project where we worked with real live data from the SpaceX API. We build a web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.",
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
        <img src="${project.image}" alt="Project Image" class="card-image">        
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
      const tech1 = popup.querySelector('.tech1')
      const tech2 = popup.querySelector('.tech2')
      const tech3 = popup.querySelector('.tech3')
      const projDecscription = popup.querySelector('.popup-desc');
      const liveButton = popup.querySelector('.see-live');
      const sourceButton = popup.querySelector('.see-source');
      const images = popup.querySelectorAll('.popup-image');

      title.textContent = projectArr[index].title;
      tech1.textContent = projectArr[index].technologies[0];
      tech2.textContent = projectArr[index].technologies[1];
      tech3.textContent = projectArr[index].technologies[2];
      projDecscription.textContent = projectArr[index].description;
      liveButton.setAttribute('href', projectArr[index].live);
      sourceButton.setAttribute('href', projectArr[index].source);

      for (let i = 0; i < images.length; i++) {
        images[i].style.backgroundImage = `url(${projectArr[index].pop_mob_image[i]})`;
      }
      
      popup.classList.add('show')
      document.body.style.overflowY = 'hidden';
  }) 
}

const btnClosePopup = document.querySelector('.popup-close');
btnClosePopup.addEventListener('click', () => {
    popup.classList.remove('show');
    document.body.style.overflowY = 'auto';
})
