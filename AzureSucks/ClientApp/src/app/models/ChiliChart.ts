import { BaseModel } from './BaseModel';
import { ChartColumn } from './ChartColumn';

export interface IChiliChart {
  columns?: ChartColumn[];
}

export class ChiliChart extends BaseModel implements IChiliChart {
  columns?: ChartColumn[];
}
