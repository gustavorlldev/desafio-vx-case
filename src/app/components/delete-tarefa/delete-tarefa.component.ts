import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/model/task.model';
import { TarefasService } from '../service/tarefas.service';

@Component({
  selector: 'app-delete-tarefa',
  templateUrl: './delete-tarefa.component.html',
  styleUrls: ['./delete-tarefa.component.less']
})
export class DeleteTarefaComponent implements OnInit {

  tarefa: Task
  tarefas: Task[]
  open: boolean = false

  constructor(private tarefaService: TarefasService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit():void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.tarefaService.listById(id).subscribe(tarefa => {
      this.tarefa = tarefa
    })
  }

  deleteTarefa():void{
    this.tarefaService.delete(this.tarefa.id).subscribe(() => {
          this.tarefaService.showMsg()
      this.open = true
      setTimeout(() => {
        this.router.navigate(['/'])
      }
      , 2000)
      
    })
  }

  cancel():void {
    this.router.navigate(['/'])
  }

}
