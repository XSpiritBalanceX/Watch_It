import { Module } from "@nestjs/common";
import { WatchItemService } from "./watch_item.service";
import { WatchItemController } from "./watch_item.controller";
import { PrismaService } from "src/prisma.service";

@Module({
  controllers: [WatchItemController],
  providers: [WatchItemService, PrismaService],
  exports: [WatchItemService],
})
export class WatchItemModule {}
