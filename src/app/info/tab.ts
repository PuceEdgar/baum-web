import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'tab',
  template: `
    <div [hidden]="!active" class="pane">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['tab.css']
})
export class Tab implements OnInit {

  @Input('tabTitle') title: string;
  @Input() active = false;

  constructor() { }

  ngOnInit() {
  }

}
