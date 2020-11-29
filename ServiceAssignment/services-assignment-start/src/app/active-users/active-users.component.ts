import {Component, OnInit } from '@angular/core';
import {UserService} from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
})
export class ActiveUsersComponent implements OnInit {
  users: string[];
  constructor(private activeUserService: UserService) {

  }
  ngOnInit() {
    this.users = this.activeUserService.activeUsers;
  }
  onSetToInactive(id: number) {
    this.activeUserService.onSetToInactive(id);
  }
}
