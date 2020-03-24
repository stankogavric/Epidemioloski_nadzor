import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { FormErrorService } from 'src/app/shared/formError.service';
import { Status } from '../status.model';
import { Measure } from '../measure.model';
import { Contact } from 'src/app/users/contact.model';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../patients.service';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { SnackBarService } from 'src/app/shared/snack-bar.service';
import { Patient } from '../patient.model';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  myControl = new FormControl();
  myControlContact = new FormControl();
  countries: string[] = ['Kina', 'Italija', 'Španija'];
  countriesContact: string[] = ['Kina', 'Italija', 'Španija'];
  filteredCountries: Observable<string[]>;
  filteredCountriesContact: Observable<string[]>;

  showInstitution = false;

  edit = false;

  date = new FormControl(new Date());
  startDate = new FormControl(new Date());
  endDate = new FormControl(new Date());
  dateContact = new FormControl(new Date());

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

  patient = new Patient();

  constructor(private snackBarService: SnackBarService, private patientService: PatientService, private fb: FormBuilder, public formError: FormErrorService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.filteredCountries = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );

    this.filteredCountriesContact = this.myControlContact.valueChanges.pipe(
      startWith(''),
      map(value => this._filterContact(value))
    );

    let phone = this.route.snapshot.paramMap.get("phone");
    if (phone) {
      this.edit = true;
      let tempPatient = this.patientService.getOne(phone);
      this.patientForm.patchValue(tempPatient);
      this.contactForm.patchValue(tempPatient);
    }
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
    this.patientService.add(this.patientForm.value).subscribe(
        value => this.snackBarService.openSnackBar("Uneti podaci su sačuvani", "OK"),
        error => this.snackBarService.openSnackBar("Uneti podaci nisu sačuvani", "OK")
    );
  }

  saveContact(){
    this.patient.contacts.push(this.contactForm.value);
    this.contactForm.reset();
    this.snackBarService.openSnackBar("Uneti podaci su sačuvani", "OK");
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.countries.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  private _filterContact(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.countriesContact.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

}
