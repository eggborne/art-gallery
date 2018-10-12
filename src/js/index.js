import '../css/styles.css';
import { App } from './app';
import { TouchHandler } from './control';

var app = new App();
var touchHandler = new TouchHandler(app);
touchHandler.setInputs();

$(function() {

});