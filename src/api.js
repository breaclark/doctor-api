import $ from 'jquery';


class GetData {

  apiCaller() {
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?name=michael&location=45.5231%2C-122.6765%2C10&user_location=45.5231%2C-122.6765&gender=male&skip=0&limit=10&user_key=${process.env.exports.apiKey}`).then(function(response ) {
      console.log(response);
    }).fail(function(error) {
      console.log(error);
    })
  }
}

export { GetData };
