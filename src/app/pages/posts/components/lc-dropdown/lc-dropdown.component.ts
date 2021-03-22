import { PropertyRead } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lc-dropdown',
  templateUrl: './lc-dropdown.component.html',
  styleUrls: ['./lc-dropdown.component.scss']
})
export class LcDropdownComponent implements OnInit {
  @Input() defaultText?: string;
  @Input() menuItems?: string[];


  publicconstructor() { }

  ngOnInit(): void {
  }

}
