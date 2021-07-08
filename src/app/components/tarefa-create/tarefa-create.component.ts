import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/model/task.model';
import { TarefasService } from '../service/tarefas.service';

@Component({
  selector: 'app-tarefa-create',
  templateUrl: './tarefa-create.component.html',
  styleUrls: ['./tarefa-create.component.less']
})
export class TarefaCreateComponent implements OnInit {

  tarefa: Task = {
    title:'',
    description: null
  }

  open: boolean = false

  constructor(private tarefaService: TarefasService,
              private router: Router)
   { }

  ngOnInit() {
  }

  createTarefa():void {
    this.tarefaService.create(this.tarefa).subscribe(() => {
      this.tarefaService.showMsg()
      this.open = true
      setTimeout(() => {
        this.router.navigate(['/'])
      }
      , 2000)
      
    })
  }

  cancel():void {
    this.router.navigate(['/tarefas'])
  }

}
