import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroller',
  templateUrl: './scroller.component.html',
  styleUrls: ['./scroller.component.css']
})
export class ScrollerComponent{

  active_dash: string = 'Сводная информация';
  dash_0: string = 'Сводная информация';
  dash_1: string = '1 дашборд';
  dash_2: string = '2 дашборд';
  dash_3: string = '3 дашборд';
  dash_4: string = '4 дашборд';
  dash_5: string = '5 дашборд';
  dash_6: string = '6 дашборд';
  dash_7: string = '7 дашборд';
  active_dash_link: string = '0_cat';
  dash_0_link: string = '0_cat';
  dash_1_link: string = '1_cat';
  dash_2_link: string = '2_cat';
  dash_3_link: string = '3_cat';
  dash_4_link: string = '4_cat';
  dash_5_link: string = '5_cat';
  dash_6_link: string = '6_cat';
  dash_7_link: string = '7_cat';

  DashSelect(dash: string) {
    if (dash == 'dash_1') {
      this.active_dash = dash
    } else if (dash == 'dash_2') {
      this.active_dash = dash
    } else if (dash == 'dash_3') {
      this.active_dash = dash
    } else if (dash == 'dash_4') {
      this.active_dash = dash
    } else if (dash == 'dash_5') {
      this.active_dash = dash
    } else if (dash == 'dash_6') {
      this.active_dash = dash
    } else if (dash == 'dash_7') {
      this.active_dash = dash
    } else if (dash == 'dash_0') {
      this.active_dash = dash
    }
  }
}
