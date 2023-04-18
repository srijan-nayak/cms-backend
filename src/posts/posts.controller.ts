import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { Post as BlogPost } from './schemas/post.schema';
import { PostsService } from './posts.service';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async findAll(): Promise<BlogPost[]> {
    return this.postsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') postId: string): Promise<BlogPost> {
    try {
      return await this.postsService.findOne(postId);
    } catch (error) {
      throw new NotFoundException();
    }
  }

  @Post()
  async create(@Body() createPostDto: CreatePostDto): Promise<BlogPost> {
    return this.postsService.create(createPostDto);
  }

  @Put(':id')
  async update(
    @Param('id') postId: string,
    @Body() updatePostDto: UpdatePostDto,
  ): Promise<BlogPost> {
    try {
      return await this.postsService.update(postId, updatePostDto);
    } catch (error) {
      throw new NotFoundException();
    }
  }
}
