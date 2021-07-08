import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/model/task.model';
import { TarefasService } from '../service/tarefas.service';

@Component({
  selector: 'app-list-tarefas',
  templateUrl: './list-tarefas.component.html',
  styleUrls: ['./list-tarefas.component.less']
})
export class ListTarefasComponent implements OnInit {

  tarefas: Task[]
 

  constructor(private tarefasService: TarefasService,
) { }

  ngOnInit() {
    this.tarefasService.listTarefa().subscribe(tarefas => {
      this.tarefas = tarefas
      console.log(tarefas)
    })
  }

  // deleteTarefa():void {
  //   this.tarefasService.delete(this.tarefa.id).subscribe(() => {
  //     setTimeout(() => {
  //       this.router.navigate(['/'])
  //     }
  //     , 2000)
      
  //   })
  // }

}
