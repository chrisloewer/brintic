type InputType = 'text' | 'wysiwyg' | 'img';

export class ContentBlock {
  id: string;
  displayName: string;
  inputType: InputType;
  content: string;
}
