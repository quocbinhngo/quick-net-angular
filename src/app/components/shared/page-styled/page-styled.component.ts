import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-styled',
  templateUrl: './page-styled.component.html',
  styleUrls: ['./page-styled.component.css'],
})
export class PageStyledComponent implements OnInit {
  @Input()
  alignItems?: string = '';

  @Input()
  justifyContent?: string = '';

  @Input()
  display?: string = '';

  @Input()
  height = 'h-full';

  constructor() {}

  ngOnInit(): void {}
}
