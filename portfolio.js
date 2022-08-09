const projects = [
  {
    id: 'card1',
    title: 'Clientele',
    image1: './images/online-sales.png',
    image: './images/broker.png',
    description1:
      'Hemp Cannabis Foundation is a non-profit organization founded in 2022 by 6 individuals with a dream to contribute to the fast-growing industry by connecting formers, marketplace, and funders in one space. The foundation was founded in South Africa Mpumalanga which is where they are based and operating,',
    description2:
      'I am a lead fontend developer',
    technologyList: ['Web App', 'Webside Design', 'Sales Journey','Application','Website'],
    firstButton: 'See Live',
    secondButton: 'See Source',
    SeeLive: '#',
    seeSource: '#'
  },

  {
    id: 'card2',
    title: 'Oneplan',
    image1: './images/pet journey.png',
    image2: './images/shortterm-jorney.png',
    image3: './images/shortterm-landing.png',
    image4: './images/oneplan-home.png',
    image5: './images/tailomade.png',
    image6: './images/pet plans.png',
    image7: './images/pet-store.png',
    description1:
      'Oneplan Insurance is an insurance company that sells Health, Shortterm and Pet Insurance. ',
    description2:
      'I was the Lead frontend developer in charge of designing and developing frontend website, journeys, mailers, landing pages and pricing pages.',
    technologyList: ['UI Design', 'HTML/CSS', 'Javascript', '.Net',''],
    firstButton: 'See Live',
    secondButton: 'See Source',
    SeeLive: 'https://oneplan.co.za/',
    seeSource: 'https://oneplan.co.za/'
  },

  {
    id: 'card3',
    title: 'BakkieHi',
    image1: './images/BakkieDashboard-01.png',
    image2: './images/BakkieDriver-01.png',
    image3: './images/BakkieCustomer-01.png',
    image4: './images/BakkieDashboard-01.png',
    image5: './images/BakkieDashboard-01.png',
    image6: './images/BakkieDriver-01.png',
    image7: './images/BakkieCustomer-01.png',
    image8: './images/BakkieDashboard-01.png',
    description1:
      'BakkieHi connects drivers with customers and app based system that allows customers to interect with drivers or transport providers with ease and the other way around. This provided a large number of unemployed South Africans with cars, trucks, and so on to have a way to make money and customers get serviced.',
    description2:
      'I designed and built 3 dashboards which are: Admin dashboard, Driver dashboard, and  Customer dashboard. Links are not available as these are user dashboards for Bakkiehi',
    technologyList: ['UI Design', 'React.js', 'Javascript'],
    firstButton: 'See Live',
    secondButton: 'See Source',
    SeeLive: '#',
    seeSource: '#'
  },

  {
    id: 'card4',
    title: 'Thola Africa',
    image2: './images/thola-africa.PNG',
    image1: './images/thola-africa.PNG',
    image3: './images/leaderboardUI.png',
    image4: './images/leaderboardUI.png',
    image5: './images/leaderboardUI.png',
    image6: './images/leaderboardUI.png',
    image7: './images/leaderboardUI.png',
    image8: './images/leaderboardUI.png',
    description1:
      'Thola Africa is an ecommerce that connects African brand with customers.',
    description2:
      'I was in charge of the web development using Wordpress, I connected Payfast payment gateway and Sage Accounting system into the site',
    technologyList: ['UI Design', 'Wordpress', 'WooCommerce','Payfast'],
    firstButton: 'See Live',
    secondButton: 'See Source',
    SeeLive: 'https://hsmathebula.github.io/LeaderBoard/dist/',
    seeSource: 'https://github.com/HSMathebula/LeaderBoard'
  },

  {
    id: 'card5',
    class: 'mySlides',
    title: 'ToDo List',
    image1: './images/todolist-01.png',
    image2: './images/todolist-01.png',
    image3: './images/todolist-01.png',
    image4: './images/todolist-01.png',
    image5: './images/todolist-01.png',
    image6: './images/todolist-01.png',
    image7: './images/todolist-01.png',
    image8: './images/todolist-01.png',
    description1:
      'In this project I created a todo list that add a task, edit a task, complete tasks, delete task, and clear all completed tasks. Go to my git hub to see more projects.',
    description2:
      'I used HTML/CSS and JavaScript ES6 and I store the data to the local storage of the browser.',
    technologyList: ['HTML/CSS', 'JavaScript', 'Local Starage'],
    firstButton: 'See Live',
    secondButton: 'See Source',
    SeeLive: 'https://hsmathebula.github.io/To-Do-List-App/',
    seeSource: 'https://github.com/HSMathebula/To-Do-List-App'
  },

  {
    id: 'card6',
    title: 'Other Projects and Concepts',
    image1: './images/simplyLokhal-01.png',
    image2: './images/wrc-01.png',
    image3: './images/Ilead-01.png',
    image4: './images/Logos-01.png',
    image5: './images/simplyLokhal-01.png',
    image6: './images/wrc-01.png',
    image7: './images/Ilead-01.png',
    image8: './images/Logos-01.png',
    description1:
      'These are some of the designs I did for other people as a freelancer.',
    description2:
      'The designs ranges from logos, posters, brochures, etc. See Live and See Source are not available for this project.',
    technologyList: ['Illutrator', 'Photoshop', 'Figma'],
    firstButton: 'See Live',
    secondButton: 'See Source',
    SeeLive: '#',
    seeSource: 'https://github.com/HSMathebula'
  },
];

const section = document.querySelector('.main-container');
projects.forEach((project) => {
  const div = document.createElement('div');
  div.className = 'project-card';
  div.innerHTML = `
    <h2>${project.title}</h2>
    <ul>
        <li>${project.technologyList[0]}</li>
        <li>${project.technologyList[1]}</li>
        <li>${project.technologyList[2]}</li>
    </ul>

    <div>
      <img class="mySlides" src="${project.image1}" alt="project img">
      <img class="mySlides" src="${project.image2}" alt="project img">
      <img class="mySlides" src="${project.image3}" alt="project img">
      <img class="mySlides" src="${project.image4}" alt="project img">
    </div>
      
    <div>
      <img src="${project.image5}" alt="img">
    </div>
    <div>
      <img src="${project.image6}" alt="img">
    </div>
    <div>
      <img src="${project.image7}"  alt="img">
    </div>
    <div>
      <img src="${project.image8}" alt="img">
    </div>

    <p>${project.description1}</p>
    <p>${project.description2}</p>
    <div>
      <a href="${project.SeeLive}">${project.firstButton}<img src="./images/ic_link.png" alt="See live"></a>
      <a href="${project.seeSource}">${project.secondButton}<img src="./images/ic_github_blue.png" alt="source-code"></a>
    </div>
  `; 
});

const seeProjectButtons = document.querySelectorAll('.project-button');

seeProjectButtons.forEach((button) => {
  projects.forEach((project) => {
    if (button.id === project.id) {
      button.addEventListener('click', () => {
        const popUpSection = document.createElement('section');
        popUpSection.innerHTML = `
          <div class="modal">
            <div class="bg">
              <div class="top-div">
                <span class="close-button">&times;</span>
                <div class="title-list">
                  <h2 class="title">${project.title}</h2>
                  <ul class="skills">
                      <li class="skills-list">${project.technologyList[0]}</li>
                      <li class="skills-list">${project.technologyList[1]}</li>
                      <li class="skills-list">${project.technologyList[2]}</li>
                  </ul>
                </div>
              </div>
          
              <div class="md-div">
                <div class="container1">
                  <div class="my-slide">
                    <div class="mySlides">
                    <img src="${project.image1}" alt="project img">
                    </div>
                    <div class="mySlides">
                      <img src="${project.image2}" alt="project img">
                    </div>
                    <div class="mySlides">
                      <img src="${project.image3}" alt="project img">
                    </div>
                    <div class="mySlides">
                      <img src="${project.image4}" alt="project img">
                    </div>
                      
                    <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                    <a class="next" onclick="plusSlides(1)">&#10095;</a>
                  </div>
                
                  <div class="row">
                    <div class="column">
                      <img class="demo cursor" src="${project.image5}" onclick="currentSlide(1)" alt="img">
                    </div>
                    <div class="column">
                      <img class="demo cursor" src="${project.image6}" onclick="currentSlide(2)" alt="img">
                    </div>
                    <div class="column">
                      <img class="demo cursor" src="${project.image7}" onclick="currentSlide(3)" alt="img">
                    </div>
                    <div class="column">
                      <img class="demo cursor " src="${project.image8}" onclick="currentSlide(4)" alt="img">
                    </div>
                  </div>
                </div>
          
                <div class="bottom-div">
                  <p class="p-tag">${project.description1}</p>
                  <p class="p-tag">${project.description2}</p>
                  <div class="cta-1">
                      <a href="${project.SeeLive}" class="see-live">${project.firstButton}<img src="./images/ic_link.png" alt="See live"></a>
                      <a href="${project.seeSource}" class="source-code">${project.secondButton}<img src="./images/ic_github_blue.png" alt="source-code"></a>
                  </div>
                  <div class="nxt-prv-cta">
                      <a href="" class="prv"><img src="./images/ic_arrow_left.png" alt="">Previous project</a>
                      <a href="" class="nxt">next-project<img src="./images/ic_arrow_right_blue.png" alt=""></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
        
        section.appendChild(popUpSection);
        const span = document.querySelector('.close-button');
        span.addEventListener('click', () => {
          section.removeChild(popUpSection);
        });
        showSlides();
      });
    }
  });
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.querySelectorAll(".mySlides");
  let dots = document.querySelectorAll(".demo");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  if(slides != true && dots != true){
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }
}