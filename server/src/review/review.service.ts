import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { ReviewDto } from "./dto/review.dto";

@Injectable()
export class ReviewService {
  constructor(private prisma: PrismaService) {}

  async getAllByItemId(watchItemId: string) {
    return this.prisma.review.findMany({ where: { watchItemId } });
  }

  async getAllByUserId(userId: string) {
    return this.prisma.review.findMany({ where: { userId } });
  }

  async getReview(reviewId: string) {
    return this.prisma.review.findUnique({ where: { id: reviewId } });
  }

  async create(dto: ReviewDto, userId: string) {
    return this.prisma.review.create({
      data: {
        content: dto.content,
        rating: dto.rating,
        user: { connect: { id: userId } },
        watchItem: { connect: { id: dto.watchItemId } },
      },
    });
  }

  async update(dto: Partial<ReviewDto>, reviewId: string, userId: string) {
    return this.prisma.review.update({
      where: { userId, id: reviewId },
      data: dto,
    });
  }

  async delete(reviewId: string) {
    return this.prisma.review.delete({
      where: { id: reviewId },
    });
  }
}
