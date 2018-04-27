import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { GetData } from './api.js'

let displayData = function (doctors) {
  if (doctors.data.length > 0) {
    $("#result").empty();
    for (let i = 0; i < doctors.data.length; i ++) {
      $("#result").append(
      `<ul>
        <li>
          ${doctors.data[i].profile.first_name} ${doctors.data[i].profile.last_name}
        </li>
        <li>
          ${doctors.data[i].practices[0].visit_address.street}    ${doctors.data[i].practices[0].visit_address.city}, ${doctors.data[i].practices[0].visit_address.state}
        </li>
        <li>
          ${doctors.data[i].practices[0].phones[0].number}
        </li>
        <li>
          ${doctors.data[i].practices[0].website}//if undefined put something else here
        </li>
        <li>
          ${doctors.data[i].practices[0].accepts_new_patients}
        </li>
      </ul>`);
    }
  } else {
    $("#result").append(`<p>No doctors matched that search, please try again</p>`);
  }
}

$(document).ready(function() {
  let getData = new GetData();
  getData.apiCaller(displayData);
});
