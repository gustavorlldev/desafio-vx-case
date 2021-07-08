import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteTarefaComponent } from './components/delete-tarefa/delete-tarefa.component';
import { HomeComponent } from './components/home/home.component';
import { ListTarefasComponent } from './components/list-tarefas/list-tarefas.component';
import { TarefaCreateComponent } from './components/tarefa-create/tarefa-create.component';
import { TarefaCrudComponent } from './components/tarefa-crud/tarefa-crud.component';
import { UpdateTarefaComponent } from './components/update-tarefa/update-tarefa.component';


const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "tarefas", component: ListTarefasComponent},
  { path: "tarefas/create", component: TarefaCreateComponent},
  { path: "tarefas/:id", component: UpdateTarefaComponent},
  { path: "tarefas/delete/:id", component: DeleteTarefaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
