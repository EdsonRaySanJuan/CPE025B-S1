// Module 4 – Challenge 5 (async/await version)

// fake weather "DB" (simulating API responses)
const WEATHER_DB = {
  Oslo: {
    wind: { speed: 8, deg: 170 },
    clouds: 0,
    temp: 0,
    precipitation: 0
  },
  Berlin: {
    wind: { speed: 16, deg: 117 },
    clouds: 30,
    temp: 5,
    precipitation: 10
  },
  Yakutsk: {
    wind: { speed: 0, deg: 0 },
    clouds: 0,
    temp: -40,
    precipitation: 0
  }
};

// Promise-based fetch of one city
function fetchWeather(city) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (WEATHER_DB[city]) {
        resolve({ city, weather: WEATHER_DB[city] });
      } else {
        reject(new Error(`City not found: ${city}`));
      }
    }, 100);
  });
}

// pretty-print one city's weather with warnings
function printWeatherEntry(entry, info) {
  const { city, weather } = entry;
  console.log(`CITY: ${city}`);

  const w = weather;

  if (info === 'wind' || info === 'all') {
    console.log(`WIND: ${w.wind.speed} m/s, ${w.wind.deg} deg`);
    if (w.wind.speed > 15) {
      console.log('WARNING! Wind speed over 15 m/s');
    }
  }

  if (info === 'all') {
    console.log(`CLOUDS: ${w.clouds} %`);
    console.log(`TEMP: ${w.temp} C`);
    if (w.temp < -20) {
      console.log('WARNING! Temperature below -20 degrees');
    }
    console.log(`PRECIPITATION: ${w.precipitation} %`);
    console.log(''); // blank line between cities
  }
}

// async/await wrapper – same behavior as the Promise version
async function getWeatherAsync(cityOrCities, info) {
  try {
    // single city
    if (typeof cityOrCities === 'string') {
      const entry = await fetchWeather(cityOrCities);
      printWeatherEntry(entry, info);
      return entry;
    }

    // array of cities
    if (Array.isArray(cityOrCities)) {
      const entries = await Promise.all(
        cityOrCities.map(c => fetchWeather(c))
      );
      entries.forEach(e => printWeatherEntry(e, info));
      return entries;
    }
  } catch (err) {
    console.log(err.message);
  }
}

// REQUIRED TEST OUTPUTS (run these):

getWeatherAsync('Berlin', 'wind');
// Expected:
// CITY: Berlin
// WIND: 16 m/s, 117 deg
// WARNING! Wind speed over 15 m/s

getWeatherAsync(['Oslo', 'Yakutsk'], 'all');
// Expected:
//
// CITY: Oslo
// WIND: 8 m/s, 170 deg
// CLOUDS: 0 %
// TEMP: 0 C
// PRECIPITATION: 0 %
//
// CITY: Yakutsk
// WIND: 0 m/s, 0 deg
// CLOUDS: 0 %
// TEMP: -40 C
// WARNING! Temperature below -20 degrees
// PRECIPITATION: 0 %
