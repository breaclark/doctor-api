import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { GetData } from './api.js'

let displayData = function (doctors) {
  if (doctors.data.length > 0) {
    $("#result").empty();
    for (let i = 0; i < doctors.data.length; i ++) {
      let doctorWebsite = doctors.data[i].practices[0].website;
      if (typeof doctorWebsite  === "undefined") {
        doctorWebsite = "No website available";
      }
      let newPatients = doctors.data[i].practices[0].accepts_new_patients;
      if (newPatients === true) {
        newPatients = "Accepting new patients";
      } else {
        newPatients = "Not accepting new patients";
      }
      $("#result").append(
      `<ul>
        <li>
          ${doctors.data[i].profile.first_name} ${doctors.data[i].profile.last_name}
        </li>
        <li>
          ${doctors.data[i].practices[0].visit_address.street},    ${doctors.data[i].practices[0].visit_address.city}, ${doctors.data[i].practices[0].visit_address.state}
        </li>
        <li>
          ${doctors.data[i].practices[0].phones[0].number}
        </li>
        <li>
          ${doctorWebsite}
        </li>
        <li>
          ${newPatients}
        </li>
      </ul>`);
    }
  } else {
    $("#result").empty();
    $("#result").append(`<p>No doctors matched that search, please try again</p>`);
  }
}

let errorMessage = function(error) {
  $("#result").empty();
  $("#result").append(`There seems to be a ${error.status} error, ${error.statusText}`);
}

$(document).ready(function() {
  $("#doctor-search").submit(function(event){
    let getData = new GetData();

    let issue = "query=" + $("#issue-input").val();
    getData.apiCaller(issue, displayData, errorMessage);
    event.preventDefault();
  })
});
