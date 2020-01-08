import { Component, OnInit } from '@angular/core';
import { ShareListService } from '../share-list.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  listData;
  projects;
  temptext;
  constructor(private listService: ShareListService) { }

  ngOnInit() {
    this.temptext = 'dummy text'
    this.listService.get().subscribe((res:any)=>{
      this.listData = res;
      this.projects = Object.assign({}, res[0])
      
    })
  }

  currentProject(sel){
    this.projects = sel
  }

  addClass(status) {
    if (!status) return;
    if (status == true) {
      return "text-info";
    } else if (status == false) {
      return "text-secondary";
    }
  }
  addBageClass(status) {
    if (status == true) {
      return "info";
    }else {
      return "warning";
    }
  }

}
