import {Component, Input} from '@angular/core';
import {MtgCollection} from "../../mtg-collection";

@Component({
  selector: 'deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss']
})
export class DeckComponent {
  // @ts-ignore
  @Input() public deck: MtgCollection;
  public mtgImgUrl: string = 'https://mtg.wtf/cards_hq/';

}
