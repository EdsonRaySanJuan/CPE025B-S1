// Challenge 4 (Module 1)
function Image(title, artist, date) {
  this.title = title;
  this.artist = artist;
  this.date = date;
}

Image.prototype.show = function() {
  console.log(`${this.title} (${this.artist}, ${this.date})`);
};

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
      image.show();
    });
  },
  clear: function() {
    this.list = [];
  },
  edit: function(title, artist, date) {
    const image = this.list.find(image => image.title === title);
    if (image) {
      image.artist = artist;
      image.date = date;
    }
  },
  delete: function(title) {
    const index = this.list.findIndex(image => image.title === title);
    if (index !== -1) {
      this.list.splice(index, 1);
    }
  }
};

images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.add('The Last Supper', 'Leonardo da Vinci', 1495);
images.add('The Starry Night', 'Vincent van Gogh', 1889);
images.edit('Mona Lisa', 'Leonardo da Vinci', 1504);
images.delete('The Last Supper');
images.show();