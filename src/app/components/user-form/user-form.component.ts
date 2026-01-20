import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { IUser } from 'src/app/interfaces/user/user.interface';
import { GenresListResponse } from 'src/app/types/genres-list-response';
import { StatesListResponse } from 'src/app/types/states-list-response';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnChanges {
  @Input() genresListChild: GenresListResponse = [];
  @Input() statesListChild: StatesListResponse = [];
  @Input() userSelectedChild: IUser = {} as IUser;

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges');
  }
}
