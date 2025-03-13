import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function noSpecialCharactersValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const caracteresEspeciales = /[^a-zA-Z0-9\s]/;
    return caracteresEspeciales.test(control.value)
      ? { noCaracteresEspeciales: true }
      : null;
  };
}
