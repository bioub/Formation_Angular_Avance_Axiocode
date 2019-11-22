import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsListComponent } from './contacts-list.component';
import { ContactService } from 'src/app/core/services/contact/contact.service';
// import { of } from 'rxjs';
import { FakeContactService } from 'src/app/core/services/contact/fake-contact.service';

describe('ContactsListComponent', () => {
  let component: ContactsListComponent;
  let fixture: ComponentFixture<ContactsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsListComponent ],
      // providers: [
      //   {provide: ContactService, useClass: FakeContactService}
      // ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
