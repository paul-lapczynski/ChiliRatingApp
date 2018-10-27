export class BaseModel {
  constructor(model?: any) {
    if (model) {
      Object.keys(model).forEach(property => {
        this[property] = model[property];
      });
    }
  }
}
