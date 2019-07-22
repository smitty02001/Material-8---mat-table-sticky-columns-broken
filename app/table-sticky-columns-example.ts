import {Component} from '@angular/core';

/**
 * @title Table with sticky columns
 */
@Component({
  selector: 'table-sticky-columns-example',
  styleUrls: ['table-sticky-columns-example.css'],
  templateUrl: 'table-sticky-columns-example.html',
})
export class TableStickyColumnsExample {
  displayedColumns =
      ['name', 'position', 'weight', 'symbol', 'position', 'weight', 'symbol', 'position', 'weight', 'symbol', 'position', 'weight', 'symbol', 'weight', 'symbol', 'position', 'weight', 'symbol', 'position', 'weight', 'symbol', 'weight', 'symbol', 'position', 'weight', 'symbol', 'position', 'weight', 'symbol', 'weight', 'symbol', 'position', 'weight', 'symbol', 'position', 'weight', 'symbol', 'weight', 'symbol', 'position', 'weight', 'symbol', 'position', 'weight', 'symbol', 'weight', 'symbol', 'position', 'weight', 'symbol', 'position', 'weight', 'symbol', 'yolo'];
  dataSource = ELEMENT_DATA;
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  yolo: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', yolo: 'abc'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', yolo: 'abc'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', yolo: 'abc'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', yolo: 'abc'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', yolo: 'abc'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', yolo: 'abc'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', yolo: 'abc'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', yolo: 'abc'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', yolo: 'abc'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', yolo: 'abc'},
];


/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */