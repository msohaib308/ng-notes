import { NotesDto } from './../Models/notes.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor() { }
  AddNote(note: NotesDto) {
    const cnotes = this.GetAllNotes();
    const newList = [note, ...cnotes];
    localStorage.setItem('noteList', JSON.stringify(newList));
  }
  GetAllNotes(): NotesDto[] {
    const notes = localStorage.getItem('noteList') || '';
    return notes ? JSON.parse(notes) : [];
  }
}
