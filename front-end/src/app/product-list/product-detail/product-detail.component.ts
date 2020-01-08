import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  @Input() selectedProject;
  displayProject;
  constructor() { }

  ngOnInit() {
    this.displayProject = this.selectedProject
  }

  ngOnChanges(changes: SimpleChanges) {
    this.displayProject = changes.selectedProject.currentValue;
  }

}
