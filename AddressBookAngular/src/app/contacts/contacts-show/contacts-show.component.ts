
import { switchMap, map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { ContactService } from './../../core/services/contact/contact.service';
import { Contact } from './../../shared/models/contact';
import { Subscription, Observable, Subject } from 'rxjs';

@Component({
  selector: 'ab-contacts-show',
  templateUrl: './contacts-show.component.html',
  styleUrls: ['./contacts-show.component.scss']
})
export class ContactsShowComponent implements OnInit {
  public contact$: Observable<Contact>;
  // private subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService,
  ) { }

  ngOnInit() {
    this.contact$ = this.route.params.pipe(
      map(params => Number(params.id)),
      switchMap((id: number) => this.contactService.getById$(id))
    )
      // .subscribe(contact => {
      //   this.contact = contact;
      // });
    // this.route.paramMap.subscribe((paramMap) => {
    //   this.contactService.getById$(Number(paramMap.get('id')))
    //     .subscribe((contact) => {
    //       this.contact = contact;
    //     })
    // })
  }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }

}
