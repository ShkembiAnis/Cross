import {Component, OnDestroy, OnInit} from '@angular/core';
import * as Leaflet from 'leaflet';
import {IssService} from '../services/iss.service';
@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})

export class MapPage implements OnInit, OnDestroy {
  map: Leaflet.Map;
  issLat: string;
  issLon: string;

  blueIcon = Leaflet.icon({
    iconUrl: './assets/icon/map_marker.png',

    iconSize:     [20, 70], // size of the icon
    // shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
  });

  // redIcon = Leaflet.icon({
  //   iconUrl: './assets/icon/map_marker_red.png',
  //
  //   iconSize:     [20, 70], // size of the icon
  //   // shadowSize:   [50, 64], // size of the shadow
  //   iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
  //   // shadowAnchor: [4, 62],  // the same for the shadow
  //   popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
  // });

  constructor(protected issService: IssService) {
  }

  ngOnInit() {
  }

  ionViewDidEnter() { this.leafletMap(); }

  leafletMap() {
    if(this.map != null){
      this.map.remove();
    }

    this.map = new Leaflet.Map('mapId').setView([48.2082, 16.3738], 5);

    Leaflet.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
      attribution: 'edupala.com'
    }).addTo(this.map);

    this.issService.getISSLocation().subscribe(value => {
      this.issLat = value.iss_position.latitude;
      this.issLon = value.iss_position.longitude;

      const markPoint = Leaflet.marker([this.issLat, this.issLon], {icon: this.blueIcon});
      markPoint.bindPopup('<p>ISS</p>');
      this.map.addLayer(markPoint);

    });
  }

  ngOnDestroy(){
    this.map.remove();
    console.log('DESTROYY');
  }

}







