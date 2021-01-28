import { Patient } from './patient.model';

export class User{
  constructor(
        id: string,
        NIF: string,
        email: string,
        password: number,
        dateOfBirth: Date,
        patient: Patient[]
        )
  {}
}