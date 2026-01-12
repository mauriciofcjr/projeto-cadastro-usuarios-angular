import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { GenresService } from './services/genres.service';
import { StatesService } from './services/states.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  userList: any[] = [];
  genreList: any[] = [];
  statesList: any[] = [];

  constructor(
    private readonly _usersService: UsersService,
    private readonly _genresService: GenresService,
    private readonly _statesService: StatesService,
  ) {}

  ngOnInit() {
    this.getUsers();
    this.getGenres();
    this.getStates();
  }
  getStates() {
    this._statesService.getStates().subscribe((statesListResponse) => {
      this.statesList = statesListResponse;
    });
  }

  getGenres() {
    this._genresService.getGenres().subscribe((genreListResponse) => {
      this.genreList = genreListResponse;
    });
  }

  getUsers() {
    this._usersService.getUsers().subscribe((userListResponse) => {
      this.userList = userListResponse;
    });
  }
}
