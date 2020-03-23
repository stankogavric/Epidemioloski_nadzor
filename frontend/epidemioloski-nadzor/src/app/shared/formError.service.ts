import { FormControl, FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class FormErrorService {
    patternMap = {
        '^[0-9]{13}$': " mora imati 13 kraktera",
        '^[a-zA-Z]{3,}$': " mora imati najmanje 3 kraktera i bez razmaka",
        '^[0-9]$': " mora biti broj",
        '^[a-zA-Z]$': " mora biti slovo"
    }

    errorMap: { 
        [key: string]: (c: FormControl, name: string) => string } = {
        'required': (c: FormControl, name: string) => `Ovo polje je obavezno`,
        'email': (c: FormControl, name: string) => `${c.value} nije ispravna e-pošta`,
        'maxlength': (c: FormControl, name: string) => `${name} ne može imati više od ${c.errors['minlength']['requiredLength']} karaktera`,
        'minlength': (c: FormControl, name: string) => `${name} mora imati najmanje ${c.errors['minlength']['requiredLength']} karaktera`,
        'mustMatch': (c: FormControl, name: string) => `${name} se mora slagati sa lozinkom`,
        'invalidMimeType': (c: FormControl, name: string) => `Pogrešan tip, samo png i jpg su podržani za ${name}`,
        'pattern' (c: FormControl, name: string) {
            return `${name} ${this.patternMap[c.errors['pattern']['requiredPattern']]}`
        }
    }

    mapErrors(control: FormControl, name: string): string {
        for (let i = 0; i < Object.keys(control.errors || {}).length; i++) {
            if(this.errorMap[Object.keys(control.errors || {})[0]]){
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