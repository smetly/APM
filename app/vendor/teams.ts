import { IWorker } from './worker';
export interface ITeams {
  Location: Date;
  StartDateTime: Date;
  EndDateTime: Date;
  NumberOfWorkers: string;
  Workers: IWorker[];
}
