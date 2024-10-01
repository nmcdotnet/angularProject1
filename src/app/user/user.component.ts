import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  //initialize the selected random user
  randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  selectedUser = signal(DUMMY_USERS[this.randomIndex]);

  //use path to get the image
  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar); // use copmput from signal

  //Create a function to select a random user
  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    console.log('randomIndex', randomIndex);
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
