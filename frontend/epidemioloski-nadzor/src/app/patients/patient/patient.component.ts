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
import { map, startWith } from 'rxjs/operators';
import { SnackBarService } from 'src/app/shared/snack-bar.service';

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

  statuses: Status[] = [];
  status: Status = new Status();
  measures: Measure[] = [];
  measure: Measure = new Measure();
  contacts: Contact[] = [];
  contact: Contact = new Contact();
  displayedColumnsStatuses: string[] = ['no', 'status', 'date', 'temperature', 'description', 'anamnesis'];
  dataSourceStatuses = new MatTableDataSource<Status>(this.statuses);
  displayedColumnsMeasures: string[] = ['no', 'measure', 'rescriptNum', 'startDate', 'endDate', 'institution'];
  dataSourceMeasures = new MatTableDataSource<Measure>(this.measures);
  displayedColumnsContacts: string[] = ['no', 'firstname', 'lastname', 'jmbg', 'phone'];
  dataSourceContacts = new MatTableDataSource<Contact>(this.contacts);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  public patientForm: FormGroup;
  public contactForm: FormGroup;

  constructor(private snackBarService: SnackBarService, private patientService: PatientService, private fb: FormBuilder, public formError: FormErrorService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.filteredCountriesContact = this.myControlContact.valueChanges.pipe(
      startWith(''),
      map(value => this._filterContact(value))
    );

    let jmbg = this.route.snapshot.paramMap.get("jmbg");

    if (jmbg) {
      this.edit = true;
      this.patientService.getOne(jmbg).subscribe(data => {
        this.patientForm.patchValue(data);
        this.contacts = data.contacts;
        this.dataSourceContacts.data = data.contacts;
        this.statuses = data.statuses;
        this.dataSourceStatuses.data = data.statuses;
        this.measures = data.measures;
        this.dataSourceMeasures.data = data.measures;
      });

    }
    this.dataSourceStatuses.paginator = this.paginator;
    this.dataSourceMeasures.paginator = this.paginator;
    this.dataSourceContacts.paginator = this.paginator;
    this.patientForm = this.fb.group({
      personalInfo: this.fb.group({
        jmbg: ['', { validators: [Validators.required, Validators.pattern('[0-9]{13}')] }],
        firstname: ['', { validators: [Validators.required, Validators.pattern('[a-zA-Z]{3,}')] }],
        lastname: ['', { validators: [Validators.required, Validators.pattern('[a-zA-Z]{3,}')] }],
        lbo: [],
        phone: [],
        address: this.fb.group({
          street: [],
          streetNum: [],
          city: []
        })
      }),

      status: [],
      date: [],
      temperature: [],
      description: [],
      anamnesis: [],

      rescriptNum: [],
      institution: [],
      startDate: [],
      endDate: [],
      measure: [],

      citizenship: [],
      countryOfImport: []
    });

    this.contactForm = this.fb.group({
      jmbgContact: ['', { validators: [Validators.required, Validators.pattern('[0-9]{13}')] }],
      firstnameContact: ['', { validators: [Validators.required, Validators.pattern('[a-zA-Z]{3,}')] }],
      lastnameContact: ['', { validators: [Validators.required, Validators.pattern('[a-zA-Z]{3,}')] }],
      lboContact: [],
      streetContact: [],
      streetNumContact: [],
      cityContact: [],
      citizenshipContact: [],
      countryOfImportContact: [],
      phoneContact: [],
      dateContact: []
    })

    this.filteredCountries = this.patientForm.get("countryOfImport").valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  savePatient() {
    this.patientForm.reset();
    this.contactForm.reset();
    this.snackBarService.openSnackBar("Uneti podaci su sačuvani", "OK");
  }

  saveContact(contact: Contact) {
    // this.patient.contacts.push(contact);
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
