import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';
import { FormsModule } from '@angular/forms';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit newTodo', () => {
    const todoForm: HTMLElement = fixture.nativeElement;
    const formElt = todoForm.querySelector<HTMLFormElement>('.form-inline');

    component.todo = 'ABC';
    const spy = spyOn(component.onAddTodo, 'emit');
    // component.onAddTodo.subscribe((todo) => {
    //   expect(todo).toBe('ABC');
    // });

    const event = document.createEvent('Event');
    event.initEvent('submit');
    formElt.dispatchEvent(event);

    expect(spy).toHaveBeenCalledWith('ABC');
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
