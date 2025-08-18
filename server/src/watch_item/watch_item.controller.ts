import { Controller, Get, Post, Body, Put, Param, Delete, UsePipes, ValidationPipe, HttpCode } from "@nestjs/common";
import { WatchItemService } from "./watch_item.service";
import { Auth } from "src/auth/decorators/auth.decorator";
import { CurrentUser } from "src/auth/decorators/user.decorator";
import { WatchItemDto } from "./dto/watch_item.dto";

@Controller("user/watch_items")
export class WatchItemController {
  constructor(private readonly watchItemService: WatchItemService) {}

  @Get()
  @Auth()
  async getAll(@CurrentUser("id") userId: string) {
    return this.watchItemService.getAll(userId);
  }

  @Get(":id")
  @Auth()
  async getWatchItem(@Param("id") itemId: string) {
    return this.watchItemService.getWatchItem(itemId);
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post()
  @Auth()
  async create(@Body() dto: WatchItemDto, @CurrentUser("id") userId: string) {
    return this.watchItemService.create(dto, userId);
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put(":id")
  @Auth()
  async update(@Body() dto: WatchItemDto, @CurrentUser("id") userId: string, @Param("id") itemId: string) {
    return this.watchItemService.update(dto, itemId, userId);
  }

  @HttpCode(200)
  @Delete(":id")
  @Auth()
  async delete(@Param("id") id: string) {
    return this.watchItemService.delete(id);
  }
}
