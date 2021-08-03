import {Component, Input, OnInit} from '@angular/core';
import {TagModel} from "@shared/models/tag.model";

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {
  @Input() public tag: TagModel;

  constructor() { }

  ngOnInit(): void {
  }

}
