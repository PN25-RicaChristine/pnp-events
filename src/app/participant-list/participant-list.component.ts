import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-participant-list',
  templateUrl: './participant-list.component.html',
  styleUrls: ['./participant-list.component.css']
})
export class ParticipantListComponent implements OnInit {
  @Input() event: any;
  @Output() back= new EventEmitter();
  @Output() participant = new EventEmitter();

  public firstname: string
  public lastname: string
  public position: string
  public company: string

  constructor() { }

  ngOnInit() {
  }

  backBtn(){
    this.back.emit("true")
  }
  
  onSubmit(){
    var data= {
      fullName: this.firstname + " " + this.lastname,
      position: this.position,
      company: this.company
    }
    // this.participant.emit(data)
    this.event.push(data)
    console.log(data)
  }
  

}
