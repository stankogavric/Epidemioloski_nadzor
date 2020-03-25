import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
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

  patients : Patient[] = [];
  patient : Patient = new Patient();
  displayedColumns: string[] = ['no', 'firstname', 'lastname', 'jmbg', 'phone', 'actions'];
  dataSource = new MatTableDataSource<Patient>(this.patients);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(public dialog: MatDialog, private authService: AuthService, private patientsService: PatientService, private snackBarService: SnackBarService) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.getAll();
  }

  getAll(){
    this.patientsService.getAll().subscribe((data: Patient[]) => {
      this.patients = data;
      this.dataSource.data = data;
      this.dataSource.filterPredicate = function(data, filter): boolean {
        return data.personalInfo.firstname.toLowerCase().includes(filter) ||
                data.personalInfo.lastname.toLowerCase().includes(filter) || 
                data.personalInfo.jmbg.toLowerCase().includes(filter) ||
                data.personalInfo.phone.toLowerCase().includes(filter);
      };
    });
  }

  logout(){
    this.authService.logout();
  }

  delete(jmbg: string){
    this.patientsService.delete(jmbg).subscribe((data: any) => {
      this.getAll();
      this.snackBarService.openSnackBar("Uspešno izbrisano", "OK")
    });
  }

  update(jmbg: string, patient: Patient){
    this.patientsService.update(jmbg, patient).subscribe((data: any) => {
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
        this.delete(patient.personalInfo.jmbg);
      };
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}