import {User} from '../../models/User.model';

export class AddUser {
  static readonly type = '[USER] Add';

  constructor(public payload: User) {
  }
}

export class RemoveUser {
  static readonly type = '[USER] Remove';

  constructor(public payload: string) {

  }
}

export class UpdateUser {
  static readonly type = '[USER] Update';

  constructor(public payload: User) {

  }
}
