import {AfterViewInit, Component, OnInit} from '@angular/core';
import {SpaceAstrosModel} from '../models/SpaceAstros';
import {SpaceAstrosService} from '../services/space-astros.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit{

  public spaceAstrosData: SpaceAstrosModel;

  constructor(protected spaceAstrosService: SpaceAstrosService) {}

  ngOnInit(){
    this.spaceAstrosService.getSpaceAstros().subscribe(value => this.spaceAstrosData = value);
  }

}
