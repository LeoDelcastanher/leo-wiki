import {Component} from '@angular/core';
import {MtgCollection} from "../mtg-collection";
import {MtgService} from "./mtg.service";

@Component({
  selector: 'app-mtg',
  templateUrl: './mtg.component.html',
  styleUrls: ['./mtg.component.scss']
})
export class MtgComponent {

  constructor(private mtgService: MtgService) {
  }

  myCollection() {
    return this.mtgService.getMyCollection();
  }
}
