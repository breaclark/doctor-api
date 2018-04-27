import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { GetData } from './api.js'

let displayData = function (doctors) {
  $("#result").empty();
  $("#result").text(doctors.data[0].profile.first_name + " " + doctors.data[0].profile.last_name);
}

$(document).ready(function() {
  let getData = new GetData();
  getData.apiCaller(displayData);
});
