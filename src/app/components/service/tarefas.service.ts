import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Task } from 'src/app/model/task.model';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {
    
    urlBase = "http://localhost:3000/tarefas"

  constructor(private http: HttpClient) { }

    create(tarefa: Task): Observable<Task>{
      return this.http.post<Task>(this.urlBase, tarefa)
    }

    showMsg(): void {
    }

    listTarefa(): Observable<Task[]>{
      return this.http.get<Task[]>(this.urlBase)
    }

    listById(id: number): Observable<Task> {
      const url = `${this.urlBase}/${id}`
      return this.http.get<Task>(url)
    }

    update(tarefa: Task): Observable<Task>{
      const url = `${this.urlBase}/${tarefa.id}`
      return this.http.put<Task>(url, tarefa)
    }

    delete(id: number): Observable<Task>{
      const url = `${this.urlBase}/${id}`;
      return this.http.delete<Task>(url)
    }
}
