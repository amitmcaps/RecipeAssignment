import {Component, OnInit} from '@angular/core';
import {UserService} from '../users.service';
import {CounterService} from '../counter.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],

})
export class InactiveUsersComponent implements OnInit {
 /* @Input() users: string[];
  @Output() userSetToActive = new EventEmitter<number>();*/

  users: string[];
  constructor(private activeUserService: UserService, private counterService: CounterService) {

  }
  ngOnInit() {
    this.users = this.activeUserService.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.activeUserService.onSetToActive(id);

  }
}
