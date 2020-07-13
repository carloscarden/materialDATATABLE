import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <mat-toolbar color="primary">
  <span>Application Title</span>

  <!-- This fills the remaining space of the current row -->
  <span class="example-fill-remaining-space"></span>

  <span>Right Aligned Text</span>
</mat-toolbar>

  `,
  styles: [
    '.example-fill-remaining-space { flex: 1 1 auto;}'
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
