import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefaCrudComponent } from './tarefa-crud.component';

describe('TarefaCrudComponent', () => {
  let component: TarefaCrudComponent;
  let fixture: ComponentFixture<TarefaCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarefaCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarefaCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
