import { FormGroup, AbstractControl } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class FormErrorService {
    patternMap = {
        '^[0-9]{13}$': " mora imati 13 kraktera",
        '^[^0-9]{3,}$': " mora imati najmanje 3 kraktera i bez razmaka",
        '^[0-9]$': " mora biti broj",
        '^[^0-9]$': " mora biti slovo ili reč",
        '^[0-9+ ]{3,}$': " mora biti broj sa najmanje 3 kraktera"
    }

    errorMap: {
        [key: string]: (c: AbstractControl, name: string) => string
    } = {
            'required': (c: AbstractControl) => `Polje je obavezno`,
            'email': (c: AbstractControl) => `${c.value} nije ispravna e-pošta`,
            'maxlength': (c: AbstractControl, name: string) => `${name} ne može imati više od ${c.errors['minlength']['requiredLength']} karaktera`,
            'minlength': (c: AbstractControl, name: string) => `${name} mora imati najmanje ${c.errors['minlength']['requiredLength']} karaktera`,
            'mustMatch': (c: AbstractControl, name: string) => `${name} se mora slagati sa lozinkom`,
            'invalidMimeType': (c: AbstractControl, name: string) => `Pogrešan tip, samo png i jpg su podržani za ${name}`,
            'pattern'(c: AbstractControl, name: string) {
                return `${name} ${this.patternMap[c.errors['pattern']['requiredPattern']]}`
            }
        }

    mapErrors(control: AbstractControl, name: string): string {
        for (let i = 0; i < Object.keys(control.errors || {}).length; i++) {
            if (this.errorMap[Object.keys(control.errors || {})[0]]) {
                return this.errorMap[Object.keys(control.errors || {})[0]].bind(this)(control, name);
            }
            return "Nepodržana greška";
        }
    }

    markFormGroupTouched(formGroup: FormGroup) {
        (<any>Object).values(formGroup.controls).forEach(control => {
            control.markAsTouched();
            if (control.controls) {
                this.markFormGroupTouched(control);
            }
        });
    }

}