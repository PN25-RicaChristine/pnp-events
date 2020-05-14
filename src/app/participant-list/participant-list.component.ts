import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-participant-list',
  templateUrl: './participant-list.component.html',
  styleUrls: ['./participant-list.component.css']
})
export class ParticipantListComponent implements OnInit {
  @Input() event: any;
  @Output() back= new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  backBtn(){
    this.back.emit("true")
  }

}
