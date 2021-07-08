import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { TarefaCrudComponent } from './components/tarefa-crud/tarefa-crud.component';
import { TarefaCreateComponent } from './components/tarefa-create/tarefa-create.component';
import { HttpClientModule } from '@angular/common/http';
import { ListTarefasComponent } from './components/list-tarefas/list-tarefas.component';
import { UpdateTarefaComponent } from './components/update-tarefa/update-tarefa.component';
import { DeleteTarefaComponent } from './components/delete-tarefa/delete-tarefa.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TarefaCrudComponent,
    TarefaCreateComponent,
    ListTarefasComponent,
    UpdateTarefaComponent,
    DeleteTarefaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
