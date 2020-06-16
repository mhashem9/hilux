import { Component, OnInit } from '@angular/core';
import { FieldsService } from '../fields.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems$: Observable<any>;
  items: any;
  openSubMenu: boolean = false;
  openSubmenuIndex: any;

  constructor(private fieldsService: FieldsService, private http: HttpClient) { }

  ngOnInit(): void {
    this.menuItems$ = this.fieldsService.getUrl('https://wfe.ajm.re/AjmanLandProperty/index.php/ServiceCategories/getServices');
    // $(document).ready(() => {
    //   $(Selector.DATA_WIDGET).each(function () {
    //     Treeview._jQueryInterface.call($(this), 'init');
    //   });
    // });
  }

  getServiceProviderItem(data: any) {
    return data.serviceCategoryName && data.serviceCategoryName.en;
  }

  getServiceName(data: any) {
    return data && data.en;
  }

  hideRoot(data: any) {
    return (this.getServiceProviderItem(data) == 'root') ;
  }

  callServicehandler(item: any) {
    console.log('here submenu', item)
  }

  toggleClass(event: any) {
    let target = event.currentTarget;
    let attrs = target.attributes;
    var value = attrs.class.nodeValue;

    if (value.match(/menu-open/)) {
      $(target).removeClass('menu-open');
    } else {
      $(target).addClass('menu-open');
    }
  }
}
