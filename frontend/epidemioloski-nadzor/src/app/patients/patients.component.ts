import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';
import { SnackBarService } from 'src/app/shared/snack-bar.service';
import { Patient } from './patient.model';
import { PatientService } from './patients.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {

  loading = true;
  length: number;
  currentRole: string = '';
  patients: Patient[] = [];
  patient: Patient = new Patient();
  displayedColumns: string[] = ['no', 'firstname', 'lastname', 'jmbg', 'phone'];
  dataSource = new MatTableDataSource<Patient>(this.patients);

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor(public dialog: MatDialog, private authService: AuthService,
    private patientsService: PatientService) { }

  ngOnInit() {
    this.currentRole = this.authService.getCurrentRole();
    this.dataSource.paginator = this.paginator;
    this.getAll({ 'pageIndex': 0, 'pageSize': 5 });
  }

  getAll(event) {
    this.patientsService.getAll(event.pageIndex, event.pageSize).subscribe((value: { content: Patient[] }) => {
      let data = value.content;
      this.patients = data;
      this.dataSource.data = data;
      this.loading = false;
      this.length = value['totalElements'];
      /*
      this.dataSource.filterPredicate = function (data, filter): boolean {
        if (!data.personalInfo.firstname) {
          data.personalInfo.firstname = ""
        }
        if (!data.personalInfo.lastname) {
          data.personalInfo.lastname = ""
        }
        if (!data.personalInfo.jmbg) {
          data.personalInfo.jmbg = ""
        }
        if (!data.personalInfo.phone) {
          data.personalInfo.phone = ""
        }
        return data.personalInfo.firstname.toLowerCase().includes(filter) ||
          data.personalInfo.lastname.toLowerCase().includes(filter) ||
          data.personalInfo.jmbg.toLowerCase().includes(filter) ||
          data.personalInfo.phone.toLowerCase().includes(filter);
      };*/
    });
  }

  logout() {
    this.authService.logout();
  }
  /*
    delete(id: string){
      this.patientsService.delete(id).subscribe(() => {
        this.getAll();
        this.snackBarService.openSnackBar("Uspešno izbrisano", "OK")
      });
    }
  
    update(id: string, patient: Patient){
      this.patientsService.update(id, patient).subscribe(() => {
        this.getAll();
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
  */
  /*
   applyFilter(filterValue: string) {
     this.dataSource.filter = filterValue.trim().toLowerCase();
   }
   */
  getPatientsByQuery(pageIndex, pageSize, query) {
    this.patientsService.getAllByQuery(pageIndex, pageSize, query).subscribe((value: { content: Patient[] }) => {
      let data = value.content;
      this.patients = data;
      this.dataSource.data = data;
      this.loading = false;
      this.length = value['totalElements'];
    });
  }

  search(query) {
    query = query.trim();
    if (query != "") {
      this.loading = true;
      this.getPatientsByQuery(0, this.paginator.pageSize, query);
    }
    else {
      this.getAll({ 'pageIndex': 0, 'pageSize': this.paginator.pageSize });
    }
  }

  checkQuery(query) {
    query = query.trim();
    if (query == "") {
      this.getAll({ 'pageIndex': 0, 'pageSize': this.paginator.pageSize });
    }
  }

}