// Challenge 4 (Module 3)

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.type = 'point';
  }
}

class Line {
  constructor(points) {
    this.type = 'line';
    this.points = points.map(([x, y]) => new Point(x, y));
  }
}

class Figure {
  constructor() {
    this.elements = {
      points: [],
      lines: []
    };
  }

  addPoint(x, y) {
    const point = new Point(x, y);
    this.elements.points.push(point);
  }

  addLine(pointsArray) {
    const line = new Line(pointsArray);
    this.elements.lines.push(line);
  }

  toJSON() {
    return JSON.stringify(this.elements);
  }

  fromJSON(jsonData, replace = false) {
    const parsedData = JSON.parse(jsonData);
    if (replace) {
      this.elements = parsedData;
    } else {
      this.elements.points = [...this.elements.points, ...parsedData.points];
      this.elements.lines = [...this.elements.lines, ...parsedData.lines];
    }
  }

  deleteAll() {
    this.elements.points = [];
    this.elements.lines = [];
  }
}

let f = new Figure();
f.addPoint(10, 20);
f.addPoint(10, 10);
f.addLine([[10, 20], [30, 40], [50, 60]]);
let json = f.toJSON();
console.log(json);

f.fromJSON(json, true);
console.log(f.elements.points.length);  // -> Number of points
console.log(f.elements.lines.length);   // -> Number of lines

f.fromJSON('{"points":[{"type":"point","x":10,"y":20},{"type":"point","x":10,"y":30},{"type":"point","x":10,"y":-30},{"type":"point","x":10,"y":20},{"type":"point","x":20,"y":20},{"type":"point","x":30,"y":20},{"type":"point","x":130,"y":20},{"type":"point","x":30,"y":20},{"type":"point","x":0,"y":20},{"type":"point","x":0,"y":-20},{"type":"point","x":0,"y":20}],"lines":[{"type":"line","points":[{"x":0,"y":0},{"x":10,"y":0},{"x":0,"y":10},{"x":20,"y":0},{"x":0,"y":20}]},{"type":"line","points":[{"x":30,"y":0},{"x":10,"y":0},{"x":0,"y":10},{"x":20,"y":0},{"x":0,"y":20}]},{"type":"line","points":[{"x":30,"y":0},{"x":10,"y":-10},{"x":0,"y":10},{"x":20,"y":0},{"x":0,"y":20}]},{"type":"line","points":[{"x":0,"y":0},{"x":10,"y":0},{"x":0,"y":10},{"x":20,"y":0},{"x":0,"y":20}]}]}');
console.log(f.elements.points.length);  // -> Updated number of points
console.log(f.elements.lines.length);   // -> Updated number of lines