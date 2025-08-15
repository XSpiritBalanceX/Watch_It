import { Injectable, NotFoundException } from "@nestjs/common";
import { AuthDto } from "src/auth/dto/auth.dto";
import { PrismaService } from "src/prisma.service";
import { hash } from "argon2";
import { startOfDay, subDays } from "date-fns";
import { UserDto } from "./dto/user.dto";

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  getById(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
      include: { watchItems: true, reviews: true },
    });
  }

  getByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  async getProfile(id: string) {
    const profile = await this.getById(id);

    if (!profile) {
      throw new NotFoundException("User not found");
    }

    const totalWatchItems = profile.watchItems.length;
    const watchedItems = await this.prisma.watchItem.count({
      where: { userId: id, isWatched: true },
    });
    const toWatchItems = await this.prisma.watchItem.count({
      where: { userId: id, isWatched: false },
    });

    const totalReviews = profile.reviews.length;

    //eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...rest } = profile;

    return {
      user: rest,
      statistics: [
        { label: "Total", value: totalWatchItems },
        { label: "Watched items", value: watchedItems },
        { label: "To watch items", value: toWatchItems },
        { label: "Your reviews", value: totalReviews },
      ],
    };
  }

  async create(dto: AuthDto) {
    const user = { email: dto.email, name: "", password: await hash(dto.password) };

    return this.prisma.user.create({
      data: user,
    });
  }

  async update(id: string, dto: UserDto) {
    let data = dto;

    if (dto.password) {
      data = { ...dto, password: await hash(dto.password) };
    }

    return this.prisma.user.update({
      where: { id },
      data,
      select: { name: true, email: true },
    });
  }
}
