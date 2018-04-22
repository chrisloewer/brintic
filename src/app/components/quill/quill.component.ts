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

  @Input() editorContent: String;

  @Output() editorContentChange: EventEmitter<String> = new EventEmitter<String>();

  options = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      [{ 'align': [] }],
      ['bold', 'italic', 'underline'],        // toggled buttons

      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown

      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme

      ['blockquote', 'code-block'],

      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent

      ['clean'],                                         // remove formatting button

      ['link', 'image', 'video']                         // link and image, video
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
