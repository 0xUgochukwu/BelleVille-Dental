const date = document.getElementById("date-time");
date.innerHTML = getCurrentDateTime();


// Get the current date and time
function getCurrentDateTime() {
  const currentDate = new Date();
  const date = currentDate.toLocaleDateString();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const formattedHours = hours < 10 ? '0' + hours : hours;
  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

  return `${date} - ${formattedHours}:${formattedMinutes}`;
}



// Get current longitude and latitude with HTML5 Geolocation feature
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition);
} else {
  document.getElementById("location").innerHTML = "Geolocation is not supported by this browser.";
}

// Get the current location
function showPosition(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  // Use the OpenCage Geocoder API to get the city and country name based on the latitude and longitude
  fetch('/js/secrets.json')
  // Get the API key
    .then(response => response.json())
    .then(data => {
      const apiKey = data.apiKey;
      const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;

      // Then we fetch with our api url
      fetch(url)
        .then(response => response.json())
        .then(data => {
          const county = data.results[0].components.county;
          const state = data.results[0].components.state;
          const country = data.results[0].components.country;
          document.getElementById("location").innerHTML = `${county}, ${state}, ${country}.`;
        })
        .catch(error => console.log(error));
    })
    .catch(error => console.error(error));



}