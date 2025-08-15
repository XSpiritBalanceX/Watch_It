import { Injectable } from "@nestjs/common";
import { WatchItemDto } from "./dto/watch_item.dto";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class WatchItemService {
  constructor(private prisma: PrismaService) {}

  async getAll(userId: string) {
    return this.prisma.watchItem.findMany({ where: { userId } });
  }

  async create(dto: WatchItemDto, userId: string) {
    return this.prisma.watchItem.create({ data: { ...dto, user: { connect: { id: userId } } } });
  }

  async update(dto: Partial<WatchItemDto>, itemId: string, userId: string) {
    return this.prisma.watchItem.update({
      where: { userId, id: itemId },
      data: dto,
    });
  }

  async delete(itemId: string) {
    return this.prisma.watchItem.delete({
      where: { id: itemId },
    });
  }
}
