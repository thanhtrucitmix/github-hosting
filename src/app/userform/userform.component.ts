import { Component} from '@angular/core';
import { UserService } from '../userservice/user-service.service';
import { User } from '../model/User';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css'],

})

export class UserformComponent {

  user: User;

  constructor(private route: ActivatedRoute, private router: Router, private  userService: UserService){
    this.user = new User();
  }

  onSubmit(){
    this.userService.save(this.user).subscribe(result => this.gotoUserList())
  }
  gotoUserList(): void {
    this.router.navigate(['/listUsers']);
  }
}
