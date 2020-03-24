import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormErrorService } from 'src/app/shared/formError.service';
import { Status } from '../status.model';
import { Measure } from '../measure.model';
import { Contact } from 'src/app/users/contact.model';
import { Patient } from '../patient.model';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PatientComponent implements OnInit {

  showInstitution = false;

  statuses : Status[] = [];
  status : Status = new Status();
  measures : Measure[] = [];
  measure : Measure = new Measure();
  contacts : Contact[] = [];
  contact : Contact = new Contact();
  displayedColumnsStatuses: string[] = ['no', 'status', 'date', 'temperature', 'description', 'anamnesis'];
  dataSourceStatuses = new MatTableDataSource<Status>(this.statuses);
  displayedColumnsMeasures: string[] = ['no', 'measure', 'rescriptNum', 'startDate', 'endDate', 'institution'];
  dataSourceMeasures = new MatTableDataSource<Measure>(this.measures);
  displayedColumnsContacts: string[] = ['no', 'firstname', 'lastname', 'jmbg', 'phone'];
  dataSourceContacts = new MatTableDataSource<Contact>(this.contacts);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  public patientForm : FormGroup;
  public contactForm : FormGroup;

  patient : Patient = new Patient();

  constructor(private fb: FormBuilder, public formError: FormErrorService) { }

  ngOnInit() {
    this.dataSourceStatuses.paginator = this.paginator;
    this.dataSourceMeasures.paginator = this.paginator;
    this.dataSourceContacts.paginator = this.paginator;
    this.patientForm = this.fb.group({
      jmbg: ['', {validators: [Validators.required, Validators.pattern('[0-9]{13}')]}],
      firstname: ['', {validators: [Validators.required, Validators.pattern('[a-zA-Z]{3,}')]}],
      lastname: ['', {validators: [Validators.required, Validators.pattern('[a-zA-Z]{3,}')]}],
      lbo: [],
      street: [],
      streetNum: [],
      city: [],
      citizenship: [],
      countryOfImport: [],
      phone: [],
      status: [],
      date: [],
      temperature: [],
      description: [],
      anamnesis: [],
      rescriptNum: [],
      institution: [],
      startDate: [],
      endDate: [],
      measure: []
    });

    this.contactForm = this.fb.group({
      jmbgContact: ['', {validators: [Validators.required, Validators.pattern('[0-9]{13}')]}],
      firstnameContact: ['', {validators: [Validators.required, Validators.pattern('[a-zA-Z]{3,}')]}],
      lastnameContact: ['', {validators: [Validators.required, Validators.pattern('[a-zA-Z]{3,}')]}],
      lboContact: [],
      streetContact: [],
      streetNumContact: [],
      cityContact: [],
      citizenshipContact: [],
      countryOfImportContact: [],
      phoneContact: [],
      dateContact: []
    })
  }

  savePatient(){
    this.patientForm.reset();
    this.contactForm.reset();
    // this.pati
  }

  saveContact(contact: Contact){
    this.patient.contacts.push(contact);
    this.contactForm.reset();
  }

}
