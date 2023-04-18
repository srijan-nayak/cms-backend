import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type PostDocument = HydratedDocument<Post>;

@Schema()
export class Post {
  @Prop()
  postId: string;

  @Prop()
  title: string;

  @Prop()
  author: string;

  @Prop()
  image: string;

  @Prop()
  content: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);
