import { ITeams } from './teams';
export interface IVendor {
  Company: string;
  SubmitDate: Date;
  UserId: string;
  Password: string;
  NubertOfTeams: string;
  Teams: ITeams[];
}
