import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constans';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDATAService {

  constructor(
    private  http :HttpClient
  ) { }


  GettingTodos(username:any) {
    return this.http.get<Todo[]>(`${API_URL}/users/${username}/todos`);
  }

  DeleteTodos(username:string, id: Number) {
    return this.http.delete(`${API_URL}/users/${username}/todos/${id}`);
  }

  GetTodo(username:string, id: Number) {
    return this.http.get<Todo>(`${API_URL}/users/${username}/todos/${id}`);
  }
  updateTodo(username:string, id: Number, Todo: Todo) {
    return this.http.put<Todo>(`${API_URL}/users/${username}/todos/${id}`, Todo);
  }

  AddTodo(username:string, Todo: Todo) {
    return this.http.post<Todo>(`${API_URL}/users/${username}/todos`, Todo);
  }
}
