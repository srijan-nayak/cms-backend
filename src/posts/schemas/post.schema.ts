import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type PostDocument = HydratedDocument<Post>;

@Schema()
export class Post {
  @Prop({ isRequired: true })
  postId: string;

  @Prop({ isRequired: true })
  title: string;

  @Prop({ isRequired: true })
  author: string;

  @Prop()
  image: string;

  @Prop({ isRequired: true })
  content: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);
