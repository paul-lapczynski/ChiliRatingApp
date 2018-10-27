import { BaseModel } from './BaseModel';

export interface IChartColumn {
  name?: string;

  value?: number;
}

export class ChartColumn extends BaseModel implements IChartColumn {
  name?: string;

  value?: number;
}
