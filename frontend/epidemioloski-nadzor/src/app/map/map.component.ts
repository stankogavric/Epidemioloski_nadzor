import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { getPosition } from './locationService'
import { PatientService } from '../patients/patients.service';
import { Location } from '../patients/location.model';
import { Patient } from '../patients/patient.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {/*
  @ViewChild('mapContainer', { static: false }) gmap: ElementRef;
  map: google.maps.Map;
  displayedColumns: string[] = ['status', 'firstName', 'lastName', 'city'];
  dataSource = [];
  panelOpenState = false;
  markers = []
  expensionPanelState: boolean = false;
  activePatient: Patient = new Patient();
  selectedRowIndex = 0;
  constructor(private patientsService: PatientService,private router: Router) { }
  
  async ngAfterViewInit() {
    const position = await getPosition()
    const lon = position.lng;
    const lat = position.lat;
    const coordinates = new google.maps.LatLng(lat, lon);
    const tmpLocation: Location = { type: 'Point', coordinates: [lon, lat] }
    this.patientsService.nearMe(tmpLocation).subscribe((data: any) => {
      console.log('Data for near me:',data,[lon, lat]);
      
      this.dataSource = data
      const mapOptions: google.maps.MapOptions = {
        center: coordinates,
        fullscreenControl: false,
        streetViewControl: false,

        mapTypeControlOptions: {
          mapTypeIds: ['ROADMAP']
        },
        zoom: 15
      };
      this.map = new google.maps.Map(this.gmap.nativeElement, mapOptions);
      if(data.length > 0){
        
        this.activePatient = data[0]
        const marker = new google.maps.Marker({
          position: coordinates,
          map: this.map,
        });
        marker.setMap(this.map);
        this.markers.push(marker);
      }
    })


  }
  clearMarkers = () => {
    this.markers.map(marker => { marker.setMap(null) })
  }

  selectPatient = (patient: Patient) => {
    this.clearMarkers();
    this.expensionPanelState = !this.expensionPanelState;
    const lat = patient.personalInfo.address.location.coordinates[1];
    const lon = patient.personalInfo.address.location.coordinates[0];

    const coordinates = new google.maps.LatLng(lat, lon);
    const marker = new google.maps.Marker({
      position: coordinates,
      map: this.map,
    });
    this.markers.push(marker);
    this.map.setCenter(coordinates);
    this.activePatient = patient;
  }
  onBack() {
    this.router.navigate(['/patients']);
  }

  openPatient(){
    this.router.navigate(['/edit-patient',this.activePatient.id]);
  }*/
}

