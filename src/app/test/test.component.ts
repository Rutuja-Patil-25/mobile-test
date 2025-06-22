import { Component, OnInit } from '@angular/core';
import { Imobile } from 'src/const/test';
import { mobileProducts } from 'src/model/test';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  mobileArr: Array<Imobile> = mobileProducts
features: any;
  constructor() { }

  ngOnInit(): void {
  }

}
