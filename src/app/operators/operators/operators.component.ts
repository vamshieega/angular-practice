import { Component, OnInit } from '@angular/core';
import { OperatorsModule } from '../operators.module';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss']
})
export class OperatorsComponent implements OnInit {

  constructor(private route: Router) { }
  public operators: any = [];
  ngOnInit(): void {
    this.route.config.forEach((element: any) => {
      if (element['path'] == this.route.url.split('/')[1]) {
        element?._loadedConfig.routes.forEach((val: any) => {
          if (val.path != '') {
            let obj = {
              path: val.path
            }
            this.operators.push(obj);
          }
        })
      }
    })
  }

}
