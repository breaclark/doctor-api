import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { GetData } from './api.js'

let displayData = function (doctors) {
  $().empty();
  $().text(doctors);
}

$(document).ready(function() {
  let getData = new GetData();
  getData.apiCaller(displayData);
});
