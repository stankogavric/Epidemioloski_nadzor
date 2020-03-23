import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { SnackBarService } from 'src/app/shared/snack-bar.service';
import { Patient } from './patient.model';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {

  students : Patient[] = [];
  student : Patient = new Patient();
  displayedColumns: string[] = ['no', 'firstName', 'lastName', 'personalNumber', 'profilePicturePath', 'country', 'city', 'street', 'streetNumber', 'email', 'username', 'actions'];
  dataSource = new MatTableDataSource<Patient>(this.students);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(public dialog: MatDialog, private snackBarService: SnackBarService) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.getAll();
  }

  getAll(){/*
    this.studentService.getAll().subscribe((data: Patient[]) => {
      this.students = data;
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
    });*/
  }

  delete(id: string){/*
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
    this.fileService.exportDataToXML({'fileUrl': this.studentService.studentUrl, 'fileName': 'students.xml'}).subscribe(data => {
      saveAs(new Blob([data], { type: 'application/xml' }), 'students.xml');
    });
  }
  
  exportDataToPDF() {
    this.fileService.exportDataToPDF({'fileUrl': this.studentService.studentUrl, 'fileName': 'students.pdf'}).subscribe(data => {
      saveAs(new Blob([data], { type: 'application/pdf' }), 'students.pdf');
    });
  }
*/
  openDialog(id: string): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '250px',
      data: {title: "Delete student", content: "Are you sure you want to delete this student?"}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.delete(id);
      };
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}