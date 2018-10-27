import { ChiliChart } from './ChiliChart';
import { ChiliCard } from './ChiliCard';
import { BaseModel } from './BaseModel';

export interface IDashboard {
  totalVotes?: number;

  chiliChart?: ChiliChart;

  faceOff?: ChiliCard[];

  ladderClimbers?: ChiliCard[];
}

export class Dashboard extends BaseModel implements IDashboard {}
