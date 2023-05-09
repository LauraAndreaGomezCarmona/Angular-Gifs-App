import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-search',
  template: `
  <h5>Buscar:</h5>
  <input
    type="text"
    class="form-control"
    placeholder="Buscar gifs..."
    (keyup.enter)="searchTag()"
    #inputTextTag>
  `,
  // Sin el view child (keyup.enter)="searchTag(inputTextTag.value)"
  // Sin números: onkeydown="return /[a-z, ]/i.test(event.key)"
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @ViewChild('inputTextTag')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor( private gifsService: GifsService) {}

  // Sin el @ViewChild
  // searchTag(newTag: string) {
  //   console.log({newTag});
  // }

  // Con el @ViewChild
  searchTag() {
    const newTag = this.tagInput.nativeElement.value;

    this.gifsService.searchTag(newTag);

    this.tagInput.nativeElement.value = '';
    // console.log({newTag});
  }
}
