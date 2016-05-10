import $ from 'jquery';
import _ from 'lodash';

import { TodoList} from './models/todo';
import { AppController} from './controllers/appController';

//store elements
let todoForm =$('.todoForm'); //<form>
let todos = $('.todos'); //<ul>

//We need to "model" our todo list
let groceryList = new TodoList('Grocery List');
let app = new AppController(todoForm, todos, groceryList);
//starts app
app.init();

// let honeyList = new TodoList('Honey Do list');
// new AppController( $('.todoForm2'))
