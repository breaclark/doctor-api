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
      `<div class="card">
        <div class="row">
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">
                ${doctors.data[i].profile.first_name} ${doctors.data[i].profile.last_name}
              </h5>
              <ul class="card-text">
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
              </ul>
            </div>
          </div>
          <div class="col-md-4">
            <img src=${doctors.data[i].profile.image_url} alt="Card image cap">
          </div>
        </div>
      </div>`);
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

  $("#nav-toggle").hover(function() {
    $("#hidden-nav").slideDown(1000);
  });

  $(".navbar").on("mouseleave", function() {
    $("#hidden-nav").slideUp(1200);
  });

  $("#body-btn").click(function() {
    $("#body").slideToggle();
  });

  $("#doctor-search").submit(function(event){
    let getData = new GetData();
    let issue = "query=" + $("#issue-input").val() + "&";
    let doctorName = "name=" + $("#doctor-input").val() + "&";
    if ($("#issue-input").val()  === "") {
      issue = "";
    }
    if ($("#doctor-input").val()  === "") {
      doctorName = "";
    }
    $("#doctor-search")[0].reset();
    getData.apiCaller(issue, doctorName, displayData, errorMessage);
    event.preventDefault();
  });
});
