import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnChanges {
  @Input() items = [];
  @Input('page-size') pageSize = 10;
  @Output('page-changed') pageChanged = new EventEmitter();
  pages: any[];
  currentPage;

  ngOnChanges(){
    this.currentPage = 1;

    var pagesCount = this.items.length / this.pageSize;
    this.pages = [];
    for ( var i = 1; i <= pagesCount; i++)
      this.pages.push(i);

  }

  changePage(page){
    this.currentPage = page;
    this.pageChanged.emit(page);
  }

  previous(){
    if ( this.currentPage == 1 )
      return;

    this.currentPage--;
    this.pageChanged.emit(this.currentPage);
  }


  next(){
    if ( this.currentPage == this.pages.length )
      return;

    this.currentPage++;
    this.pageChanged.emit(this.currentPage);
  }
}
