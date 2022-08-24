export interface formInput {
  label : string,
  acceptableTypes : string[]
  isMandatory : boolean,
  selectableOptions? : string[]
}

export class formInput implements formInput {
  constructor(label : string, acceptableTypes : string[], isMandatory : boolean, options : {selectableOptions? : string[]} = {}) {
    this.label = label;
    this.acceptableTypes = acceptableTypes;
    this.isMandatory = isMandatory;
    if (options) {
      if (options.selectableOptions) {
        this.selectableOptions = options.selectableOptions
      }
    }
  }
}

export enum acceptableTypes {
  NUMBER = "number",
  STRING = "string",
  DATE = "date",
  PREDEFINED = "predefined"
}