import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  @Output() eventData = new EventEmitter()
  data: object;

  reactiveForm = this.fb.group({
    name: ["", Validators.required],
    category: ["", Validators.required],
    speaker: ["", Validators.required],
    emcee: ["", Validators.required],
    time: ["", Validators.required],
    date: ["", Validators.required],
    duration: ["", Validators.required],
    address: ["", Validators.required],
    building: ["", Validators.required],
    room: ["", Validators.required],
    onlineUrl:  ["", Validators.required],
    description:  ["", Validators.required],
  })

  constructor(private fb: FormBuilder) { }


  ngOnInit() {
  }

  onSubmit() {
   
    console.log(this.data)
    this.eventData.emit(this.reactiveForm.value)
  }

}
