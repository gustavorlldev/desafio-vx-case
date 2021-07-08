import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Task } from 'src/app/model/task.model';
import { TarefasService } from '../service/tarefas.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router)
   { }


  ngOnInit() {
  }

  createTarefa():void {
      this.router.navigate(['/tarefas/create'])
  }

}
