import {Component, Input, OnInit} from '@angular/core';
import {MtgCollection} from "../../mtg-collection";

@Component({
  selector: 'deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss']
})
export class DeckComponent implements OnInit {
  // @ts-ignore
  @Input() public deck: MtgCollection;
  public mtgImgUrl: string = '';
  public mtgColors: string[] = [''];

  ngOnInit() {
    this.mtgImgUrl = `assets/mtg/cards/${this.deck.set}-${this.deck.imgId}.png`;
    this.mtgColors = this.deck.color.map(color => {
      return `assets/mtg/${color}.svg`;
    })
  }

}
