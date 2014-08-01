if (!window.moment) {
	window.moment = require('moment');
}

if (!window.jQuery) {
	window.jQuery = require('jquery');
}

require('components-bootstrap');
require('./build/js/bootstrap-datetimepicker.min.js');
