import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todolistproject';
  todoList=[];
  todoItem = new FormControl('');
  newTodoItem="";
  ngOnInit() {
     this.todoItem.valueChanges.subscribe(data => this.newTodoItem=data);
  }
  addTodoList(){
    if(this.newTodoItem!=""){
      if(this.todoList.findIndex(x=>x==this.newTodoItem)==-1){
        this.todoList.push(this.newTodoItem);
      }
      this.todoItem.reset();
      this.newTodoItem="";
    }


  }
  deleteElementTodoList(name){
   let num= this.todoList.findIndex(x=>x==name);
    this.todoList.splice(num,1)
  }
}
