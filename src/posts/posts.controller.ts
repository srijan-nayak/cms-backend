import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { Post as BlogPost } from './schemas/post.schema';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async findAll(): Promise<BlogPost[]> {
    return this.postsService.findAll();
  }

  @Post()
  async create(@Body() createPostDto: CreatePostDto): Promise<BlogPost> {
    return this.postsService.create(createPostDto);
  }
}
