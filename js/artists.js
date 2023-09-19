const artistsCtr = document.getElementById('artists');
const joinBtn = document.getElementById('join-btn');

const capitalizeStr = (str) => {
  const strArr = str.toLowerCase().split(' ');

  strArr.forEach((item, i) => {
    strArr[i] = item.charAt(0).toUpperCase() + item.slice(1);
  });

  return strArr.join(' ');
};

const artistData = [
  {
    name: 'Stormzy',
    occupations: 'Rapper, singer, songwriter',
    desc: `Michael Ebenezer Kwadjo Omari Owuo Jr. known professionally as Stormzy,
        is a British rapper, singer and songwriter. In 2014, he gained attention on the
        UK underground music scene through his Wicked Skengman series of freestyles over classic grime beats.`,
    imgSrc: './images/stormzy.jpg'
  },
  {
    name: 'Aphex Twin',
    occupations: 'Musician, composer, DJ',
    desc: `Richard David James (born 18 August 1971), best known as Aphex Twin,
        is an Irish-born British musician, composer and DJ.[3] He is known for his idiosyncratic
        work in electronic styles such as techno, ambient, and jungle.`,
    imgSrc: './images/aphex.jpg'
  },
  {
    name: 'The Strokes',
    occupations: 'Rock Band',
    desc: `The Strokes are an American rock band formed in New York City in 1998.
        The band is composed of lead singer and songwriter Julian Casablancas, guitarists
        Nick Valensi and Albert Hammond Jr., bassist Nikolai Fraiture, and drummer Fabrizio Moretti.
        They were a leading group of the early-2000s indie rock revival.`,
    imgSrc: './images/thestrokes.jpg'
  },
  {
    name: 'Jungle',
    occupations: 'Electronic Band',
    desc: `Jungle is a British electronic music project founded in 2013 by producers,
        Josh Lloyd-Watson and Tom McFarland, who are based in London.`,
    imgSrc: './images/jungle.jpg'
  },
  {
    name: 'Dermot Kennedy',
    occupations: 'Singer, songwriter',
    desc: `Dermot Joseph Kennedy is an Irish singer-songwriter. He is best known for his
        2019 singles "Outnumbered" and "Power Over Me", his 2020 single "Giants", and his feature
        on the 2020 Meduza single "Paradise".`,
    imgSrc: './images/dermot.jpg'
  },
  {
    name: 'Haim',
    occupations: 'Rock Band',
    desc: `Haim is an American rock band, based in Los Angeles and comprising three sisters,
        Este (bass guitar and vocals), Danielle (lead vocals, guitar, and drums), and Alana Haim
        (guitars, keyboards, and vocals).`,
    imgSrc: './images/haim.jpg'
  }
];

// Functions

function createMoreBtn() {
  const moreBtn = document.createElement('button');
  moreBtn.innerHTML = 'MORE<i id="more-icon" class="fa-solid fa-chevron-down"></i>';
  moreBtn.id = 'more-btn';
  moreBtn.addEventListener('click', () => {
    document.querySelectorAll('.artist-card').forEach((item) => {
      if (!item.classList.contains('visible')) {
        item.classList.add('visible');
      }
    });
    moreBtn.remove();
  });
  artistsCtr.appendChild(moreBtn);
}

artistData.forEach((artist, i) => {
  const artistCard = document.createElement('div');
  artistCard.className = 'artist-card';
  if (i < 2 || window.innerWidth >= 765) {
    artistCard.classList.add('visible');
  }

  artistCard.innerHTML = `<div class="artist-img">
                            </div>
                            <div class="artist-info">
                                <h2 class="artist-name">${artist.name}</h2>
                                <h2 class="artist-occupations">${artist.occupations}</h2>
                                <hr />
                                <p class="artist-desc">${artist.desc}</p>
                            </div>`;
  const artistImg = artistCard.querySelector('.artist-img');
  artistImg.style.background = `url(${artist.imgSrc}) no-repeat center`;
  artistImg.style.backgroundSize = 'cover';
  artistImg.style.backgroundClip = 'border-box';

  artistsCtr.appendChild(artistCard);
});

if (window.innerWidth < 765) {
  createMoreBtn();
  const artistImg = document.querySelectorAll('.artist-img');
  joinBtn.textContent = capitalizeStr(joinBtn.textContent);
  artistImg.forEach((artist) => {
    artist.style.backgroundSize = 'contain';
  });
}

window.addEventListener('resize', () => {
  const artistCards = document.querySelectorAll('.artist-card');
  const moreBtn = document.querySelector('#more-btn');

  if (window.innerWidth >= 765) {
    artistCards.forEach((item) => {
      if (!item.classList.contains('visible')) {
        item.classList.add('visible');
      }
    });
    if (moreBtn) {
      moreBtn.remove();
    }

    joinBtn.textContent = joinBtn.textContent.toUpperCase();

    const artistImg = document.querySelectorAll('.artist-img');
    artistImg.forEach((artist) => {
      artist.style.backgroundSize = 'cover';
    });
  } else {
    if (!moreBtn) {
      createMoreBtn();
    }
    artistCards.forEach((item, i) => {
      if (i >= 2) {
        if (item.classList.contains('visible')) {
          item.classList.remove('visible');
        }
      }
    });

    joinBtn.textContent = capitalizeStr(joinBtn.textContent);

    const artistImg = document.querySelectorAll('.artist-img');
    artistImg.forEach((artist) => {
      artist.style.backgroundSize = 'contain';
    });
  }
});