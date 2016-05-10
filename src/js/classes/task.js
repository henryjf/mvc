export class Task {

  constructor(desc, id) {
    this.desc = desc;
    this.complete = false;
    this.id = id;
  }

  //toggle each task instances's complete property to be either true or false
  toggleStatus() {
    if (this.complete) {
      this.complete = false;
    } else {
      this.complete = true;
    }
  }
}
