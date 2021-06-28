import {Action, Selector, State, StateContext} from '@ngxs/store';
import {User} from '../../models/User.model';
import {AddUser, RemoveUser} from '../actions/user.actions';
import {NgxsTestService} from "../../services/ngxs-test.service";
import {tap} from "rxjs/operators";

export interface UserStateModel {
  users: User[];
}

@State<UserStateModel>({
  name: 'users',
  defaults: {
    users: []
  }
})


export class UserState {
  constructor(private readonly ngxsTestService: NgxsTestService) {
  }

  @Selector()
  static getUsers(state: UserStateModel) {
    return state.users;
  }

  @Action(AddUser)
  getUsers(ctx: StateContext<UserStateModel>) {
    return this.ngxsTestService.loadInitialConfig().pipe(
        tap(novels => ctx.setState(novels))
    );
  }

  @Action(AddUser)
  add({getState, patchState}: StateContext<UserStateModel>, {payload}: AddUser) {
    const state = getState();
    patchState({
      users: [...state.users, payload]
    });
  }

  @Action(RemoveUser)
  remove({getState, patchState}: StateContext<UserStateModel>, {payload}: RemoveUser) {
    patchState({
      users: getState().users.filter(user => user.name !== payload)
    });
  }
}
