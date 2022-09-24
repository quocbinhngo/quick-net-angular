import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-form-section',
  templateUrl: './form-section.component.html',
  styleUrls: ['./form-section.component.css'],
})
export class FormSectionComponent implements OnInit {
  @Input()
  label: string = '';

  @Input()
  control: UntypedFormControl = new UntypedFormControl();

  constructor() {}

  ngOnInit(): void {}
}
