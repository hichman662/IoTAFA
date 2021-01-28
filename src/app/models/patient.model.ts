import { User } from './user.model';

export class Patient{
    constructor(
          id: string,
          NIF: string,
          email: string,
          name: string,
          dateOfBirth: Date,
          user: User
          )
    {}
}