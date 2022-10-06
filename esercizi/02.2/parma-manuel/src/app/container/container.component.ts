import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  macchine = ['Ruspa', 'Autocarro', 'Gru', 'Terna', 'Rullo Compattatore', 'Finitrice', 'Battipali', 'Piastra Vibrante', 'Bulldozer', 'Dumper'];

  constructor() { }

  ngOnInit(): void {
  }

}
