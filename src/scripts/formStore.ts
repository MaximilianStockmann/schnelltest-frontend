import { defineStore } from "pinia";
import type { form } from "@/model/form.model";
import { STATEMENT_OR_BLOCK_KEYS } from "@babel/types";

export const useFormStore = defineStore('form', {
  state: () => ({
    form : {} as form,
  }),

  getters: {
    getFormState(state) {
      return state.form;
    }
  },

  actions: {
    setName(name : string) {
      this.form.name = name;
    },
    setSurname(surname : string) {
      this.form.surname = surname;
    },
    setGender(gender : string) {
      this.form.gender = gender;
    },
    setBirthday(birthday : Date) {
      this.form.birthday = birthday;
    },
    setEmail(email : string) {
      this.form.email = email;
    },
    setPhoneNumber(phoneNumber : number) {
      this.form.phoneNumber = phoneNumber;
    },
    setIdNumber(idNumber : number) {
      this.form.idNumber = idNumber;
    },
    //define enum type for these
    setTestType(testType : string) {
      this.form.testType = testType;
    },
    //define enum types for these
    setCountry(country : string) {
      this.form.country = country;
    },
    setStreetname(streetname : string) {
      this.form.streetname = streetname;
    },
    setStreetnumber(streetnumber : number) {
      this.form.streetnumber = streetnumber;
    },
    setPostcode(postcode : number) {
      this.form.postcode = postcode;
    },
    setCity(city : string) {
      this.form.city = city;
    }
  }
});