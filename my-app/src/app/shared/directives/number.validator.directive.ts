import { Directive } from '@angular/core';
import {
  Validator,
  NG_VALIDATORS,
  ValidatorFn,
  FormControl,
  ValidationErrors,
} from '@angular/forms';

export function numberValidator(): ValidatorFn {
  return (control: FormControl) => {
    if (control.value !== null && control.value !== '') {
      const isValid = /^\d+$/.test(
        control.value
      );
      if (isValid) {
        return null;
      } else {
        return {
          Numbervalidator: { valid: false },
        };
      }
    } else {
      return null;
    }
  };
}

@Directive({
  selector: '[appNumberValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useClass: NumberValidatorDirective,
      multi: true,
    },
  ],
})
export class NumberValidatorDirective implements Validator {
  public validator: ValidatorFn;

  public validate(control: FormControl): ValidationErrors | null {
    return numberValidator()(control);
  }
}
