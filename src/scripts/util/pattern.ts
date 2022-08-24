export function getInputTypePattern (inputType : string) {
  if (inputType == "postcode") {
    return "[0-9]{5}";
  }
}

export enum inputTypes {
  POSTCODE = "postcode",
  PHONE = "phone",
  STREETNUMBER = "streetnumber",
  TEXT = "text",
}