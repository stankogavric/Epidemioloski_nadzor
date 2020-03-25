import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { FormErrorService } from 'src/app/shared/formError.service';
import { Status } from '../status.model';
import { Measure } from '../measure.model';
import { Contact } from 'src/app/users/contact.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../patients.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { SnackBarService } from 'src/app/shared/snack-bar.service';
import { Patient } from '../patient.model';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';

//TODO
interface Statuss {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  filteredanamnesiss: Observable<string[]>;
  anamnesiss: string[] = [];
  allanamnesiss: string[] = ['febrilan', 'infekcija', 'septalni defekt', 'lokalizovane infekcije', 'glavobolja', 'drhtavica'];

  @ViewChild('anamnesisInput', { static: true }) anamnesisInput: ElementRef<HTMLInputElement>;
  @ViewChild('autoAnamnesis', { static: true }) matAutocomplete: MatAutocomplete;

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

  patient = new Patient();

  //TODO
  statuss: Statuss[] = [
    { value: 'Izlečen', viewValue: 'Izlečen' },
    { value: 'Sumnja - moguć', viewValue: 'Sumnja - moguć' },
    { value: 'Verovatan', viewValue: 'Verovatan' },
    { value: 'Potvrda', viewValue: 'Potvrda' },
    { value: 'Mortalitet', viewValue: 'Mortalitet' }
  ];

  constructor(private snackBarService: SnackBarService, private patientService: PatientService, private fb: FormBuilder, public formError: FormErrorService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    let id = this.route.snapshot.paramMap.get("id");

    if (id) {
      this.edit = true;
      this.patientService.getOne(id).subscribe(data => {
        this.patient = data;
        this.contacts = data.contacts;
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
        firstname: ['', { validators: [Validators.required, Validators.pattern('[^0-9]{3,}')] }],
        lastname: ['', { validators: [Validators.required, Validators.pattern('[^0-9]{3,}')] }],
        lbo: [],
        phone: ['', { validators: [Validators.required, Validators.pattern('[0-9+ ]{3,}')] }],
        address: this.fb.group({
          street: [],
          streetNum: [],
          city: []
        })
      }),

      status: this.fb.group({
        status: [],
        date: [new Date()],
        temperature: ['36.5'],
        description: [],
        anamnesis: []
      }),

      measure: this.fb.group({
        rescriptNum: [],
        institution: [],
        startDate: [new Date()],
        endDate: [new Date()],
        measure: []
      }),

      citizenship: ["Srbija"],
      countryOfImport: []
    });

    this.contactForm = this.fb.group({
      personalInfo: this.fb.group({
        jmbg: ['', { validators: [Validators.required, Validators.pattern('[0-9]{13}')] }],
        firstname: ['', { validators: [Validators.required, Validators.pattern('[^0-9]{3,}')] }],
        lastname: ['', { validators: [Validators.required, Validators.pattern('[^0-9]{3,}')] }],
        lbo: [],
        phone: ['', { validators: [Validators.required, Validators.pattern('[0-9+ ]{3,}')] }],
        address: this.fb.group({
          street: [],
          streetNum: [],
          city: []
        })
      }),
      citizenship: ["Srbija"],
      countryOfImport: [],
      date: []
    })

    this.filteredCountries = this.patientForm.get("countryOfImport").valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );

    this.filteredCountriesContact = this.contactForm.get("countryOfImport").valueChanges.pipe(
      startWith(''),
      map(value => this._filterContact(value))
    );

    this.filteredanamnesiss = this.patientForm.get('status.anamnesis').valueChanges.pipe(
      startWith(null),
      map((anamnesis: string | null) => anamnesis ? this._filterAnamnesis(anamnesis) : this.allanamnesiss.slice()));
  }

  onBack() {
    this.router.navigate(['/patients']);
  }

  savePatient() {
    if (this.patientForm.invalid) {
      this.patientForm.markAllAsTouched();
      return;
    }
    this.patient = this.patientForm.value;
    delete this.patient['status'];
    delete this.patient['measure'];
    if (!this.patient.contacts) {
      this.patient.contacts = [];
    }
    if (!this.patient.measures) {
      this.patient.measures = [];
    }
    if (!this.patient.statuses) {
      this.patient.statuses = [];
    }
    for (let value of Object.entries(this.patientForm.get("status").value)) {
      if (value[1] && value[0] != "date" && value[0] != "temperature") {
        let status = this.patientForm.get("status").value;
        status.anamnesis = this.anamnesiss;
        this.patient.statuses.push(status);
        break;
      }
    }
    for (let value of Object.entries(this.patientForm.get("measure").value)) {
      if (value[1] && value[0] != "startDate" && value[0] != "endDate") {
        this.patient.measures.push(this.patientForm.get("measure").value);
        break;
      }
    }
    this.patient.contacts = this.contacts;
    if (this.edit) {
      this.patientService.update(this.patient.id, this.patient).subscribe(
        value => this.snackBarService.openSnackBar("Uneti podaci su sačuvani", "OK"),
        error => this.snackBarService.openSnackBar("Uneti podaci nisu sačuvani", "OK")
      );
    }
    else {
      this.patientService.add(this.patient).subscribe(
        value => this.snackBarService.openSnackBar("Uneti podaci su sačuvani", "OK"),
        error => this.snackBarService.openSnackBar("Uneti podaci nisu sačuvani", "OK")
      );
      this.patientForm.reset();
      this.contactForm.reset();
      this.dataSourceContacts.data = [];
    }
  }

  saveContact() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    this.patient.contacts.push(this.contactForm.value);
    this.contacts.push(this.contactForm.value);
    this.dataSourceContacts.data = this.patient.contacts;
    this.contactForm.reset();
    this.snackBarService.openSnackBar("Uneti podaci su sačuvani", "OK");
  }

  private _filter(value: string): string[] {
    if (value) {
      const filterValue = value.toLowerCase();
      return this.countries.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
    }

  }

  private _filterContact(value: string): string[] {
    if (value) {
      const filterValue = value.toLowerCase();
      return this.countriesContact.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
    }

  }

  applyFilterStatuses(filterValue: string) {
    this.dataSourceStatuses.filter = filterValue.trim().toLowerCase();
  }

  applyFilterMeasures(filterValue: string) {
    this.dataSourceMeasures.filter = filterValue.trim().toLowerCase();
  }

  applyFilterContacts(filterValue: string) {
    this.dataSourceContacts.filter = filterValue.trim().toLowerCase();
  }


  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our anamnesis
    if ((value || '').trim()) {
      this.anamnesiss.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.patientForm.get('status.anamnesis').setValue(null);
  }

  remove(anamnesis: string): void {
    const index = this.anamnesiss.indexOf(anamnesis);

    if (index >= 0) {
      this.anamnesiss.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.anamnesiss.push(event.option.viewValue);
    this.anamnesisInput.nativeElement.value = '';
    this.patientForm.get('status.anamnesis').setValue(null);
  }

  private _filterAnamnesis(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allanamnesiss.filter(anamnesis => anamnesis.toLowerCase().indexOf(filterValue) === 0);
  }

}
