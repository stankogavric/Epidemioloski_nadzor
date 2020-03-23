import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormErrorService } from 'src/app/shared/formError.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  public patientForm : FormGroup;

  constructor(private fb: FormBuilder, public formError: FormErrorService) { }

  ngOnInit() {
    this.patientForm = this.fb.group({
      jmbg: ['', {validators: [Validators.required, Validators.pattern('[0-9]{13}')]}],
      firstName: ['', {validators: [Validators.required, Validators.pattern('[a-zA-Z]{3,}')]}],
      lastName: ['', {validators: [Validators.required, Validators.pattern('[a-zA-Z]{3,}')]}],
      lbo: [],
      street: [],
      streetNum: [],
      city: [],
      citizenship: [],
      countryOfImport: [],
      phone: []
    });
  }

}
