import { Injectable } from '@nestjs/common';
import { Post } from './schemas/post.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { v4 as uuidV4 } from 'uuid';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post.name) private postModel: Model<Post>) {}

  async findAll(): Promise<Post[]> {
    return this.postModel.find();
  }

  async findOne(postId: string): Promise<Post> {
    return this.postModel.findOne({ postId }).orFail();
  }

  async create(createPostDto: CreatePostDto): Promise<Post> {
    const createdPost = new this.postModel({
      postId: uuidV4(),
      ...createPostDto,
    });
    return createdPost.save();
  }

  async update(postId: string, updatePostDto: UpdatePostDto): Promise<Post> {
    return this.postModel.findOneAndUpdate({ postId }, updatePostDto, {
      returnOriginal: false,
    });
  }
}
