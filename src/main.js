import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { apiCaller } from './api.js'


$(document).ready(function() {
  apiCaller();
});
