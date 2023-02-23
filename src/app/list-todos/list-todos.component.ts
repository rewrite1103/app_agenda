import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDATAService } from '../service/Data/todo-data.service';

export  class Todo{
  constructor( public    id: Number ,
   public descripcion: String ,
   public targetDate: Date,
    public done: Boolean) {
  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})



export class ListTodosComponent {
  Todos: Todo[] = [];
  mensaje = '';

  /*
  [
    new Todo(1, 'Learn to Cook', new Date(), false),
    new Todo(2, 'Learn to sleep', new Date(), false),
    new Todo(3, 'I saw a bried', new Date(), true)
]
*/

  constructor(
    private service : TodoDATAService ,
    private router: Router
  ) { }

  ngOnInit() {
    this.cargarTodos();

  }

  cargarTodos() {
    this.service.GettingTodos('elton').subscribe(
      response => { 
        console.log(response);
        this.Todos = response; }
    );
   }


  DeleteTodo(id: Number) {
    console.log(`Delete es , ${id}`);
    this.service.DeleteTodos('elton', id).subscribe(
      response => {
        console.log(response);
        this.mensaje = `Todo Eliminado ${id} Exitosamente`;
        this.cargarTodos();
      }
    );
  }

  UpdateTodo(id: Number) { 
    this.router.navigate(['Todo', id]);
  }
  AddTodo() { 
    this.router.navigate(['Todo', -1]);
  }



}

