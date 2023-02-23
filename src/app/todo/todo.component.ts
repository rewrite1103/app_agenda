import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';
import { TodoDATAService } from '../service/Data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  id: Number = 0;
  todo: any;
  constructor(
    private service : TodoDATAService ,
    private route: ActivatedRoute ,
    private router: Router
  ) { }
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id, '', new Date(), false);


   
    if (this.id != -1 ){
     
      this.service.GetTodo('elton', this.id). subscribe(
        data => this.todo = data
      );
    }

  }



  SafeTodo (){

    if (this.id == -1) {
     
      this.service.AddTodo('elton', this.todo).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['Todos']);
        }
      );

    }else {
    
      this.service.updateTodo('elton', this.id, this.todo).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['Todos']);
        }
      );
    }


  }



}
