import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-quill',
  templateUrl: './quill.component.html',
  styleUrls: [
    './quill.component.scss',
    './quill-snow-theme.scss'
  ]
})
export class QuillComponent implements OnInit {

  @Input() editorContent: string;

  @Output() editorContentChange: EventEmitter<string> = new EventEmitter<string>();

  options = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      [{ 'align': [] }],
      ['bold', 'italic', 'underline'],                  // toggled buttons

      [{ 'size': ['small', false, 'large', 'huge'] }],  // size drop-down

      ['blockquote', 'code-block'],

      [{ 'list': 'ordered'}, { 'list': 'bullet' }],

      ['clean'],                                         // remove formatting button

      ['link', 'image']                                 // link and image, video
    ],
    clipboard: {
      matchVisual: false
    }
  };

  constructor() { }

  ngOnInit() {
  }

  onEditorChange() {
    this.editorContentChange.emit(this.editorContent);
  }

}
