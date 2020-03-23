import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { SnackBarService } from 'src/app/shared/snack-bar.service';
import { Patient } from './patient.model';
import { PatientService } from './patients.service';

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

  constructor(public dialog: MatDialog, private snackBarService: SnackBarService, private patientsService: PatientService) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.getAll();
  }

  getAll(){
    this.patients = this.patientsService.getAll();
    let data = this.patients;
    this.dataSource.data = data;
    this.dataSource.filterPredicate = function(data, filter): boolean {
      return data.personalInfo.firstname.toLowerCase().includes(filter) ||
        data.personalInfo.lastname.toLowerCase().includes(filter) || 
        data.personalInfo.jmbg.toLowerCase().includes(filter) ||
        data.personalInfo.phone.toLowerCase().includes(filter);
    };

    /*
    this.patientsService.getAll().subscribe((data: Patient[]) => {
      this.patients = data;
      this.dataSource.data = data;
      this.dataSource.filterPredicate = function(data, filter): boolean {
        return data.personalData.firstName.toLowerCase().includes(filter) ||
                data.personalData.lastName.toLowerCase().includes(filter) || 
                data.personalData.personalNumber.toLowerCase().includes(filter) ||
                data.personalData.profilePicturePath.toLowerCase().includes(filter) || 
                data.address.city.country.name.toLowerCase().includes(filter) ||
                data.address.city.name.toLowerCase().includes(filter) || 
                data.address.street.toLowerCase().includes(filter) ||
                data.address.number.toLowerCase().includes(filter) || 
                data.accountData.email.toLowerCase().includes(filter) ||
                data.accountData.username.toLowerCase().includes(filter);
      };
    });
    */
  }

  delete(id: number){/*
    this.studentService.delete(id).subscribe((data: any) => {
      this.getAll();
      this.snackBarService.openSnackBar("Successfully deleted student", "X")
    });*/
  }

  update(id: string, student: Patient, image: File){/*
    this.studentService.update(id, student, image).subscribe((data: any) => {
      this.getAll();
    });*/
  }
/*
  exportDataToXML() {
    this.fileService.exportDataToXML({'fileUrl': this.studentService.studentUrl, 'fileName': 'patients.xml'}).subscribe(data => {
      saveAs(new Blob([data], { type: 'application/xml' }), 'patients.xml');
    });
  }
  
  exportDataToPDF() {
    this.fileService.exportDataToPDF({'fileUrl': this.studentService.studentUrl, 'fileName': 'patients.pdf'}).subscribe(data => {
      saveAs(new Blob([data], { type: 'application/pdf' }), 'patients.pdf');
    });
  }
*/
  openDialog(patient: Patient): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '250px',
      data: {title: "Delete patient", content: "Are you sure you want to delete this patient?"}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.delete(patient.id);
      };
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}