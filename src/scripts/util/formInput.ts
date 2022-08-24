export interface formInput {
  label : string,
  acceptableType : acceptableTypes,
  isMandatory : boolean,
  selectableOptions? : string[]
}

export class formInput implements formInput {
  constructor(label : string, acceptableType : acceptableTypes, isMandatory : boolean, options? : {selectableOptions? : string[]}) {
    this.label = label;
    this.acceptableType = acceptableType;
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
  STRING = "text",
  DATE = "date",
  PHONE = "tel",
  POSTCODE = "postcode",
  PREDEFINED = "predefined"
}