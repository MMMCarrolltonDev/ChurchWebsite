import { Component, OnInit, ViewChild } from '@angular/core';
import { } from 'googlemaps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @ViewChild('gmap', { static: true }) gmapElement: any;
  map: google.maps.Map;
  latLng: google.maps.LatLng;

  constructor() { }

  ngOnInit() {
    this.latLng = new google.maps.LatLng(32.9544202, -96.899562);
    const mapProperties = {
      center: this.latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProperties);
    const marker = new google.maps.Marker({
      position: this.latLng,
    });
    marker.setMap(this.map);
  }

}
