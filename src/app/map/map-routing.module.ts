import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapPage } from './map.page';
// import { MarkersComponent } from '../components/leaflet/markers/markers.component';
// import { PathComponent } from '../components/leaflet/path/path.component';

const routes: Routes = [
  {
    path: '',
    component: MapPage
  }
  // {
  //   path: 'markers',
  //   component: MarkersComponent
  // },
  // {
  //   path: 'path',
  //   component: PathComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapPageRoutingModule {}
