import $ from 'jquery';

export function apiCaller() {
  $.get(`https://api.betterdoctor.com/2016-03-01/doctors?location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${process.env.exports.apiKey}`).then(function(response ) {
    console.log(response);
  })
}
