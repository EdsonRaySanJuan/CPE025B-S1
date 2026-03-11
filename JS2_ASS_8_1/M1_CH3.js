// Challenge 3 (Module 1)
function Image(title, artist, date) {
  this.title = title;
  this.artist = artist;
  this.date = date;
}

const images = {
  list: [],
  contains: function(title) {
    return this.list.some(image => image.title === title);
  },
  add: function(title, artist, date) {
    if (!this.contains(title)) {
      const newImage = new Image(title, artist, date);
      this.list.push(newImage);
    }
  },
  show: function() {
    this.list.forEach(image => {
      console.log(`${image.title} (${image.artist}, ${image.date})`);
    });
  },
  clear: function() {
    this.list = [];
  }
};

images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.add('The Last Supper', 'Leonardo da Vinci', 1495);
images.add('The Starry Night', 'Vincent van Gogh', 1889);
images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.show();
images.clear();
images.show();