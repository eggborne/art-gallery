import '../sass/styles.scss';
import { App } from './app';
import { TouchHandler } from './control';

var app = new App();
var touchHandler = new TouchHandler(app);
touchHandler.setInputs();

$(function() {

});