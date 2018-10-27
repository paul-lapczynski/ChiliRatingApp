export class BaseModel {
  constructor(model?: any) {
    Object.keys(model).forEach(property => {
      this[property] = model[property];
    });
  }
}
