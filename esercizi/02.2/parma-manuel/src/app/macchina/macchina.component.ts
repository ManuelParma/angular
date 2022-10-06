import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-macchina',
  templateUrl: './macchina.component.html',
  styleUrls: ['./macchina.component.css']
})
export class MacchinaComponent implements OnInit {

  @Input() macchina: string = '';
  componenti: string[] = ['Bulloni', 'Viti', "Ferro"];

  constructor() { }

  ngOnInit(): void {
  }

}
