import { ItemComponent } from './../item/item.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';

import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.overrideComponent(ItemComponent, {
      remove: {
        templateUrl: '',
      },
      add: {
        template: ''
      }
    });
    TestBed.configureTestingModule({
      declarations: [
        ListComponent,
        ItemComponent,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    component.todos = ['A', 'B', 'C'];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    // const debugElement = fixture.debugElement
    //                           .queryAll(By.css('todo-item'));

    const nativeElement: HTMLElement = fixture.nativeElement;
    const todosItems = nativeElement.querySelectorAll('todo-item');
    expect(todosItems.length).toBe(3);
    console.log(nativeElement.textContent);
  });
});
