import { FormControl } from '@angular/forms';


export class BasicValidators {
  static hasInvalidEmail( control: FormControl ){
    var email = control.value;
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email)){
      return null;
    }else{
      return { hasInvalidEmail: true };
    }
  }
}
