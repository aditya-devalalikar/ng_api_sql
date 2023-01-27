import { Component } from '@angular/core';
import { User, UsersServiceService } from '../users-service.service';
import { AddUserComponent } from '../add-user/add-user.component';
import { Router } from '@angular/router';
import { ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { CounterFacade } from '../store/counter.facade';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {

  users: User[] = [];
  text: string = '';
  showUsers: boolean = false;
  constructor(private userServiceService: UsersServiceService, 
              private router: Router,
              private viewContainerRef: ViewContainerRef,
              private componentFactoryResolver: ComponentFactoryResolver,
              private countFacade : CounterFacade) { }

  ngOnInit() {
    this.countFacade.getAllData();
  }

  addNewUser() {
    const factory = this.componentFactoryResolver.resolveComponentFactory(AddUserComponent);
    const componentRef = factory.create(this.viewContainerRef.parentInjector);
    this.viewContainerRef.insert(componentRef.hostView);
  }

}
