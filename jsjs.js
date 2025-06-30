"use strict";

/***************************JS*************************************
// ANASTASIIA ALTSHULER  
// AND EVGENY ALTSHULER 
/************************************************************************/


const events = [
  {
    name: "Music Festival",
    image: "https://artukraine.com.ua/storage/0002018/09/28_09/t/hague-15.jpg",
    date: "2025-06-15"
  },
  {
    name: "Art Exhibition",
    image: "https://artukraine.com.ua/storage/0002018/09/28_09/t/hague-15.jpg",
    date: "2025-07-01"
  },
  {
    name: "Tech Conference",
    image: "https://artukraine.com.ua/storage/0002018/09/28_09/t/hague-15.jpg",
    date: "2025-08-10"
  },
  {
    name: "City Marathon",
    image: "https://artukraine.com.ua/storage/0002018/09/28_09/t/hague-15.jpg",
    date: "2025-09-05"
  }
];
//Get elem from html page
const gallery = document.getElementById('gallery');

//Setting up forEach function
events.forEach(event => {

  //Created new element
  const card = document.createElement('div');
  card.className = 'card'

  // Creacted img
  const img = document.createElement('img');
  img.src = event.image;//get link from our elem
  img.alt = event.name;
  img.className = 'img'

  //created div with class info with display block
  const info = document.createElement('div');
  info.className = 'info'

  const title = document.createElement('h3');
  title.textContent = event.name;

  const date = document.createElement('p');
  date.textContent = event.date;

  info.appendChild(title);
  info.appendChild(date);

  // When we mousenter we see information about image
  card.addEventListener('mouseenter', () => {
    info.classList.add('hide')
  });
  // When we leave the mouse we information hides
  card.addEventListener('mouseleave', () => {
    info.classList.remove('hide');
  });

  // Append created elements
  card.appendChild(img);
  card.appendChild(info);
  gallery.appendChild(card);
});