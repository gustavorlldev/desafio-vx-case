import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task.model';
import { TarefasService } from '../service/tarefas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  

  constructor() { }

  ngOnInit() {

  }

}
