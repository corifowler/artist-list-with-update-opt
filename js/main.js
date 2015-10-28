import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';

import './ajax_setup';
import Router from './router';

console.log('Hello, World');

let $app = $('.app');
new Router($app).start();