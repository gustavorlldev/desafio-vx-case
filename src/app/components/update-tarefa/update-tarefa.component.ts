import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/model/task.model';
import { TarefasService } from '../service/tarefas.service';

@Component({
  selector: 'app-update-tarefa',
  templateUrl: './update-tarefa.component.html',
  styleUrls: ['./update-tarefa.component.less']
})
export class UpdateTarefaComponent implements OnInit {

  tarefas: Task
  open: boolean = false


  constructor(private tarefasService: TarefasService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.tarefasService.listById(id).subscribe(tarefa => {
      this.tarefas = tarefa
    })
  }

  updateTarefa():void{
      this.tarefasService.update(this.tarefas).subscribe(() => {
      this.tarefasService.showMsg()
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
