import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-third-internal-part',
  templateUrl: './third-internal-part.component.html',
  styleUrls: ['./third-internal-part.component.css']
})
export class ThirdInternalPartComponent implements OnInit {
  @Input() type: string;
  @Input() typeNumber: number;
  constructor() { }

  ngOnInit() {
  }

}
