import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { GetData } from './api.js'

let displayData = function (doctors) {
  $("#result").empty();
  for (let i = 0; i < doctors.data.length; i ++) {
    $("#result").append(doctors.data[i].profile.first_name + " " + doctors.data[i].profile.last_name);
  }
}

$(document).ready(function() {
  let getData = new GetData();
  getData.apiCaller(displayData);
});
