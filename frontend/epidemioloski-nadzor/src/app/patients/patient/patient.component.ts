import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatTabGroup, MatDialog } from '@angular/material';
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
import { StaticDataService } from 'src/app/shared/staticData.service';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { AuthService } from 'src/app/auth/auth.service';
import { MupStatus } from '../mup-status.model';

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

  currentRole: string = '';
  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  filteredanamnesiss: Observable<string[]>;
  anamnesiss: string[] = [];
  allanamnesiss: string[] = this.staticDataService.getSymptoms();

  @ViewChild('anamnesisInput', { static: true }) anamnesisInput: ElementRef<HTMLInputElement>;
  @ViewChild('autoAnamnesis', { static: true }) matAutocomplete: MatAutocomplete;

  countries: string[] = this.staticDataService.getCountries();
  countriesContact: string[] = this.staticDataService.getCountries();
  cities: string[] = this.staticDataService.getCities();
  citiesContact: string[] = this.staticDataService.getCities();
  citizenships: string[] = this.staticDataService.getCountries();
  citizenshipsContact: string[] = this.staticDataService.getCountries();
  filteredCountries: Observable<string[]>;
  filteredCountriesContact: Observable<string[]>;
  filteredCities: Observable<string[]>;
  filteredCitiesContact: Observable<string[]>;
  filteredCitizenships: Observable<string[]>;
  filteredCitizenshipsContact: Observable<string[]>;

  showInstitution = false;

  edit = false;

  date = new FormControl(new Date());
  startDate = new FormControl(new Date());
  endDate = new FormControl(new Date());
  dateContact = new FormControl(new Date());

  statuses: Status[] = [];
  status: Status = new Status();
  mupStatuses: MupStatus[] = [];
  mupStatus: MupStatus = new MupStatus();
  measures: Measure[] = [];
  measure: Measure = new Measure();
  contacts: Contact[] = [];
  contact: Contact = new Contact();
  displayedColumnsStatuses: string[] = ['no', 'status', 'date', 'description', 'anamnesis'];
  //displayedColumnsStatuses: string[] = ['no', 'status', 'date', 'temperature', 'description', 'anamnesis'];
  dataSourceStatuses = new MatTableDataSource<Status>(this.statuses);
  displayedColumnsMupStatuses: string[] = ['no', 'status', 'date', 'description'];
  dataSourceMupStatuses = new MatTableDataSource<MupStatus>(this.mupStatuses);
  displayedColumnsMeasures: string[] = ['no', 'measure', 'rescriptNum', 'startDate', 'endDate', 'institution'];
  dataSourceMeasures = new MatTableDataSource<Measure>(this.measures);
  displayedColumnsContacts: string[] = ['no', 'firstname', 'lastname', 'jmbg', 'phone'];
  dataSourceContacts = new MatTableDataSource<Contact>(this.contacts);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  public patientForm: FormGroup;
  public contactForm: FormGroup;

  patient = new Patient();

  statuss: Statuss[] = [
    { value: 'Moguć/Sumnja', viewValue: 'Moguć/Sumnja' },
    { value: 'Verovatan', viewValue: 'Verovatan' },
    { value: 'Potvrđen', viewValue: 'Potvrđen' },
    { value: 'Izlečen/Ozdravio', viewValue: 'Izlečen/Ozdravio' },
    { value: 'Smrtni ishod', viewValue: 'Smrtni ishod' }
  ];

  @ViewChild(MatTabGroup, { static: true }) tabGroup: MatTabGroup;

  constructor( private authService: AuthService, public dialog: MatDialog, private patientsService: PatientService, private snackBarService: SnackBarService, private patientService: PatientService, private fb: FormBuilder, public formError: FormErrorService, private route: ActivatedRoute, private router: Router, private staticDataService: StaticDataService) { }

  ngOnInit() {
    this.currentRole = this.authService.getCurrentRole();
    let id = this.route.snapshot.paramMap.get("id");

    if (id) {
      this.edit = true;
      this.patientService.getOne(id).subscribe(data => {
        this.patient = data;
        this.patientForm.patchValue(data);
        this.contacts = data.contacts;
        this.dataSourceContacts.data = data.contacts;
        this.statuses = data.statuses;
        this.dataSourceStatuses.data = data.statuses;
        this.mupStatuses = data.mupStatuses;
        this.dataSourceMupStatuses.data = data.mupStatuses;
        this.measures = data.measures;
        this.dataSourceMeasures.data = data.measures;
      });
    }
    
    this.dataSourceStatuses.paginator = this.paginator;
    this.dataSourceMupStatuses.paginator = this.paginator;
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
        /*temperature: ['36.5'],*/
        description: [],
        anamnesis: []
      }),

      mupStatus: this.fb.group({
        status: [],
        date: [new Date()],
        description: []
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
        jmbg: ['', { validators: [Validators.pattern('[0-9]{13}')] }],
        firstname: ['', { validators: [Validators.pattern('[^0-9]{3,}')] }],
        lastname: ['', { validators: [Validators.pattern('[^0-9]{3,}')] }],
        lbo: [],
        phone: ['', { validators: [Validators.pattern('[0-9+ ]{3,}')] }],
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

    this.filteredCities = this.patientForm.get("personalInfo.address.city").valueChanges.pipe(
      startWith(''),
      map(value => this._filterCities(value))
    );

    this.filteredCitiesContact = this.contactForm.get("personalInfo.address.city").valueChanges.pipe(
      startWith(''),
      map(value => this._filterCitiesContact(value))
    );

    this.filteredCitizenships = this.patientForm.get("citizenship").valueChanges.pipe(
      startWith(''),
      map(value => this._filterCitizenships(value))
    );

    this.filteredCitizenshipsContact = this.contactForm.get("citizenship").valueChanges.pipe(
      startWith(''),
      map(value => this._filterCitizenshipsContact(value))
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
      this.tabGroup.selectedIndex = 0;
      this.patientForm.markAllAsTouched();
      return;
    }
    /*
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    */
    

    let id = this.patient.id;
    this.patient = this.patientForm.value;
    this.patient.statuses = this.statuses;
    this.patient.mupStatuses = this.mupStatuses;
    this.patient.measures = this.measures;
    this.patient.contacts = this.contacts;
    delete this.patient['status'];
    delete this.patient['mupStatus'];
    delete this.patient['measure'];
    for (let value of Object.entries(this.patientForm.get("status").value)) {
      //if (value[1] && value[0] != "date" && value[0] != "temperature") {
      if (value[1] && value[0] != "date") {
        let status = this.patientForm.get("status").value;
        status.anamnesis = this.anamnesiss;
        this.statuses.push(status);
        this.patient.statuses = this.statuses;
        this.dataSourceStatuses.data = this.statuses;
        break;
      }
    }
    for (let value of Object.entries(this.patientForm.get("mupStatus").value)) {
      //if (value[1] && value[0] != "date" && value[0] != "temperature") {
      if (value[1] && value[0] != "date") {
        let status = this.patientForm.get("mupStatus").value;
        this.mupStatuses.push(status);
        this.patient.mupStatuses = this.mupStatuses;
        this.dataSourceMupStatuses.data = this.mupStatuses;
        break;
      }
    }
    for (let value of Object.entries(this.patientForm.get("measure").value)) {
      if (value[1] && value[0] != "startDate" && value[0] != "endDate") {
        this.measures.push(this.patientForm.get("measure").value);
        this.patient.measures=this.measures;
        this.dataSourceMeasures.data = this.measures;
        break;
      }
    }
    let existContactData = false;
    for (let value of Object.entries(this.contactForm.get('personalInfo').value)) {
      if (value[0]=="address"){
        for (let value of Object.entries(this.contactForm.get('personalInfo.address').value)) {
          if (value[1]) {
            this.contacts.push(this.contactForm.value);
            this.patient.contacts = this.contacts;
            this.dataSourceContacts.data = this.contacts;
            existContactData = true;
            break;
          }
        }
      }
      else if (existContactData){
        break;
      }
      else if (value[1]) {
        this.contacts.push(this.contactForm.value);
        this.patient.contacts = this.contacts;
        this.dataSourceContacts.data = this.contacts;
        break;
      }
    }
    console.log(this.patient);
    if (this.edit) {
      this.patient.id = id;
      this.patientService.update(this.patient.id, this.patient).subscribe(
        value => this.snackBarService.openSnackBar("Uneti podaci su sačuvani", "OK"),
        error => this.snackBarService.openSnackBar("Uneti podaci nisu sačuvani", "OK")
      );
      this.patientForm.get('status').reset();
      this.patientForm.get('mupStatus').reset();
      this.patientForm.get('measure').reset();
      this.contactForm.reset();
      this.anamnesiss = [];
    }
    else {
      this.patientService.add(this.patient).subscribe(
        value => {this.snackBarService.openSnackBar("Uneti podaci su sačuvani", "OK"); this.patient.id = value['id']; console.log(this.patient)},
        error => this.snackBarService.openSnackBar("Uneti podaci nisu sačuvani", "OK")
      );
      this.patientForm.get('status').reset();
      this.patientForm.get('mupStatus').reset();
      this.patientForm.get('measure').reset();
      this.contactForm.reset();
      //this.dataSourceContacts.data = [];
      //this.dataSourceMeasures.data = [];
      //this.dataSourceStatuses.data = [];
      this.anamnesiss = [];
    }
    this.edit = true;
  }

  delete(id: string){
    this.patientsService.delete(id).subscribe(() => {
      this.router.navigate(['/patients']);
      this.snackBarService.openSnackBar("Uspešno izbrisano", "OK")
    });
  }

  openDialog(patient: Patient): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '250px',
      data: {title: "Izbriši pacijenta", content: "Da li ste sigurni da želite da izbrišete ovog pacijenta?"}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.delete(patient.id);
      };
    });
  }

  saveContact() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    this.contacts.push(this.contactForm.value);
    this.dataSourceContacts.data = this.contacts;
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

  private _filterCities(value: string): string[] {
    if (value) {
      const filterValue = value.toLowerCase();
      return this.cities.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
    }

  }

  private _filterCitiesContact(value: string): string[] {
    if (value) {
      const filterValue = value.toLowerCase();
      return this.citiesContact.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
    }

  }

  private _filterCitizenships(value: string): string[] {
    if (value) {
      const filterValue = value.toLowerCase();
      return this.citizenships.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
    }

  }

  private _filterCitizenshipsContact(value: string): string[] {
    if (value) {
      const filterValue = value.toLowerCase();
      return this.citizenshipsContact.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
    }

  }

  applyFilterStatuses(filterValue: string) {
    this.dataSourceStatuses.filter = filterValue.trim().toLowerCase();
  }

  applyFilterMupStatuses(filterValue: string) {
    this.dataSourceMupStatuses.filter = filterValue.trim().toLowerCase();
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
