import { Controller, Get, Post, Body, Put, Param, Delete, UsePipes, ValidationPipe, HttpCode } from "@nestjs/common";
import { ReviewService } from "./review.service";
import { Auth } from "src/auth/decorators/auth.decorator";
import { CurrentUser } from "src/auth/decorators/user.decorator";
import { ReviewDto } from "./dto/review.dto";

@Controller("review")
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Get("watch_item/:id")
  async getAllByItemId(@Param("id") watchItemId: string) {
    return this.reviewService.getAllByItemId(watchItemId);
  }

  @Get()
  @Auth()
  async getAllByUserId(@CurrentUser("id") userId: string) {
    return this.reviewService.getAllByUserId(userId);
  }

  @Get(":id")
  async getReview(@Param("id") reviewId: string) {
    return this.reviewService.getReview(reviewId);
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post()
  @Auth()
  async create(@Body() dto: ReviewDto, @CurrentUser("id") userId: string) {
    return this.reviewService.create(dto, userId);
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put(":id")
  @Auth()
  async update(@Body() dto: ReviewDto, @CurrentUser("id") userId: string, @Param("id") reviewId: string) {
    return this.reviewService.update(dto, reviewId, userId);
  }

  @HttpCode(200)
  @Delete(":id")
  @Auth()
  async delete(@Param("id") id: string) {
    return this.reviewService.delete(id);
  }
}
