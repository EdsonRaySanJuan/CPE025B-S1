// Challenge 2 (Module1)
function Image(title, artist, date) {
  this.title = title;
  this.artist = artist;
  this.date = date;
}

function getImage(title, artist, date) {
  return {
    title: title,
    artist: artist,
    date: date
  };
}

const imagesData = [
  { title: "Mona Lisa", artist: "Leonardo da Vinci", year: 1503 },
  { title: "The Last Supper", artist: "Leonardo da Vinci", year: 1495 },
  { title: "Starry Night", artist: "Vincent van Gogh", year: 1889 },
  { title: "The Scream", artist: "Edvard Munch", year: 1893 },
  { title: "Guernica", artist: "Pablo Picasso", year: 1937 },
  { title: "The Kiss", artist: "Gustav Klimt", year: 1907 },
  { title: "Girl With a Pearl Earring", artist: "Johannes Vermeer", year: 1665 },
  { title: "The Birth of Venus", artist: "Sandro Botticelli", year: 1485 },
  { title: "Las Meninas", artist: "Diego Velázquez", year: 1656 },
  { title: "The Creation of Adam", artist: "Michelangelo", year: 1512 }
];

const images1 = imagesData.map(painting => new Image(painting.title, painting.artist, painting.year));
const images2 = images1.map(painting => getImage(painting.title, painting.artist, painting.date));

console.log(images2);