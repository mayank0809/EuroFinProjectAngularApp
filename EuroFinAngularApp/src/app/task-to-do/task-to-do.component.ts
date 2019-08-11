import { Component, OnInit } from '@angular/core';
import { TaskToDoService } from '../task-to-do.service';

@Component({
  selector: 'app-task-to-do',
  templateUrl: './task-to-do.component.html',
  styleUrls: ['./task-to-do.component.css']
})
export class TaskToDoComponent implements OnInit {

  public taskList:any;

  public addTask:any;

  constructor(private taskService : TaskToDoService) { }

  ngOnInit() {
this.getTask();
    
  }

  newElement(){
this.taskService.saveTask(this.addTask).subscribe(
  (data) =>{
    this.getTask();
this.addTask="";

  },
  () =>{}
);
    // alert("Hi");
  };

  getTask(){

    this.taskService.getTask().subscribe(
      
      (data) =>{
    this.taskList=data;
      },
      () =>{}
    );
  };

  close(task:any){

    this.taskService.deleteTask(task).subscribe(
      (data) =>{
        this.getTask();
    //this.addTask="";
    
      },
      () =>{}
    );
    // alert("Hi");
  }

  

//   var myNodelist = document.getElementsByTagName("LI");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }

// // Click on a close button to hide the current list item
// var close = document.getElementsByClassName("close");
// var i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     var div = this.parentElement;
//     div.style.display = "none";
//   }
// }

// // Add a "checked" symbol when clicking on a list item
// var list = document.querySelector('ul');
// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'LI') {
//     ev.target.classList.toggle('checked');
//   }
// }, false);

// // Create a new list item when clicking on the "Add" button
// function newElement() {
//   var li = document.createElement("li");
//   var inputValue = document.getElementById("myInput").value;
//   var t = document.createTextNode(inputValue);
//   li.appendChild(t);
//   if (inputValue === '') {
//     alert("You must write something!");
//   } else {
//     document.getElementById("myUL").appendChild(li);
//   }
//   document.getElementById("myInput").value = "";

//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   li.appendChild(span);

//   for (i = 0; i < close.length; i++) {
//     close[i].onclick = function() {
//       var div = this.parentElement;
//       div.style.display = "none";
//     }
//   }
// }
}