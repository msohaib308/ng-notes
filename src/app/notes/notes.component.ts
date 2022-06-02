import { NotesDto } from './../Models/notes.model';
import { NotesService } from './../core/notes.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from '../core/security.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  noteObj = new NotesDto();
  notesList: NotesDto[] = [];
  closeResult!: string;
  email!: string;
  toastnfo = '';

  constructor(private security: SecurityService, private router: Router, private notes: NotesService,
    private modalService: NgbModal) {
    this.email = localStorage.getItem('currentUser') || ''
    if (!this.email) {
      router.navigateByUrl('/login')
    }
   }

  ngOnInit(): void {
    this.GetAllNotes();
  }
  AddNote() {
    this.noteObj.email = this.email || '';
    this.notes.AddNote(this.noteObj);
    this.toastnfo = 'Toast added successfully';
    setTimeout(() => {
      this.toastnfo = '';
    }, 3000);
  }
  GetAllNotes() {
    this.notesList = this.notes.GetAllNotes().filter(x => x.email?.toLowerCase() === this.email.toLowerCase());
  }
  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any) {
    // if (reason === ModalDismissReasons.ESC) {
    //   return 'by pressing ESC';
    // } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    //   return 'by clicking on a backdrop';
    // } else {
    //   return `with: ${reason}`;
    // }
  }
}
