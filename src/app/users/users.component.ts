import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService]
})
export class UsersComponent implements OnInit {
  users = []
  constructor(private _userService: UserService) { }

  ngOnInit() {
    this._userService.getUsers().then(res => {
      console.log(res);
      this.users = res;
    });
  }

  deleteUser(user){
    if(confirm("Are you sure you want to delete " + user.name + "?")){
      var index = this.users.indexOf(user);
      this.users.splice(index, 1);
      this._userService.deleteUser(user.id).then(null, err => {
        alert("Could not delete the user");
        this.users.splice(index, 0, user);
      })
    }
  }

}
