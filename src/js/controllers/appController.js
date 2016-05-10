import _ from 'lodash';
import { Task} from '../models/task';
export class AppController {

  constructor(formElem, taskElem, instance) {
    this.form = formElem;
    this.taskArea = taskElem;
    this.todoListInstance = instance;
  }

  init() {
    this.formSubmit();
    this.taskClick();
  }

  taskClick() {
    this.taskArea.on('click', 'li', function(event) {
      event.preventDefault();

      console.log(this);
    });

  }

  formSubmit() {
    this.form.on('submit',(event) => {
      event.preventDefault();

    let input = this.form.find('input');
    this.addTaskToCollection(input.val());
    input.val(''); //Clear input
    });

  }

  addTaskToCollection(taskDesc) {
    let rando = _.random(1000, 9999);
    let t = new Task(taskDesc, rando); //create instance of task
    this.todoListInstance.tasks.push(t); //push to tasks array
    this.addTaskToView(t); // call an update ot the view
console.log(this);
  }

  addTaskToView(taskObj) {
    let taskHTML = this.taskTemplate(taskObj);
    this.taskArea.append(taskHTML);
  }

  taskTemplate(taskObj) {
    return `<li id="${taskObj.id}">${taskObj.desc}</li>`;
  }

}
