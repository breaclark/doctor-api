import $ from 'jquery';


class GetData {

  apiCaller(issue, displayData, errorMessage) {
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?name=michael&${issue}&location=45.5231%2C-122.6765%2C10&user_location=45.5231%2C-122.6765&skip=0&limit=10&user_key=${process.env.exports.apiKey}`).then(function(response) {
      displayData(response);
    }).fail(function(error) {
      errorMessage(error);
    })
  }
}

export { GetData };
