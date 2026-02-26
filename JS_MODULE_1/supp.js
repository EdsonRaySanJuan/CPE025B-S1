// 1. Directory
let teamDirectory = [
  {
	name: "Leo Brooks",
	role: "Designer",
	skills: ["UI", "UX", "Figma"],
	available: true
  },
  {
	name: "Sasha Ivana",
	role: "Developer",
	skills: ["HTML", "CSS", "JS"],
	available: false
  },
  {
	name: "Jordan Lee",
	role: "Manager",
	skills: ["Planning", "Agile"],
	available: true
  }
];

// 2. Adding a New Specialist
teamDirectory.push({
	name: "Casey Moore",
	role: "QA Engineer",
	skills: ["Testing", "Debugging"],
	available: true
});

// 3. Updating Availability of Sasha
teamDirectory[1].available = true; 

// 4. Data Extraction

console.log(
  "First member & first skill:",
  teamDirectory[0].name,
  "-",
  teamDirectory[0].skills[0]
);

let lastIndex = teamDirectory.length - 1;
console.log(
  "Last member & skill count:",
  teamDirectory[lastIndex].name,
  "-",
  teamDirectory[lastIndex].skills.length
);

console.log("Total team members:", teamDirectory.length);