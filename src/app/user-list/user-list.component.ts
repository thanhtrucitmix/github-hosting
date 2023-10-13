import { Component, OnInit} from '@angular/core';
import { User } from '../model/User';
import { UserService } from '../userservice/user-service.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  userList: User[]= [];

  constructor(private userService : UserService){
  }
  ngOnInit(): void {
    this.userService.findAll().subscribe(
      data => {
        this.userList = data;
    })
  }
}
