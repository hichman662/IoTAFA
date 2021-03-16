import { PatientProfile } from './patientProfile.model';

export class User{
  constructor(
        email?: string,
        birthDate?: Date,
        address?: string,
        name?: string,
        surename?: string,
        photo?: string,
        isActive?: boolean,
        type?: number,
        patient?: PatientProfile[]
        )
  {}
}
