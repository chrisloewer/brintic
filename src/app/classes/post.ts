import { ContentBlock } from './content-block';

type PostType = 'home' | 'default';

export class Post {
  id: string;
  title: string;
  postType: PostType;
  contentBlocks: ContentBlock[];

  constructor() { }
}
