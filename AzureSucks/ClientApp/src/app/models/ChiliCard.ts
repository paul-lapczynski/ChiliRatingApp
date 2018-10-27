import { BaseModel } from './BaseModel';

export interface IChiliCard {
  title?: string;

  subtitle?: string;

  votes?: number;

  description?: string;
}

export class ChiliCard extends BaseModel implements IChiliCard {
  title?: string;

  subtitle?: string;

  votes?: number;

  description?: string;
}
