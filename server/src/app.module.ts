import { Module } from "@nestjs/common";
import { AuthModule } from "./auth/auth.module";
import { ConfigModule } from "@nestjs/config";
import { UserModule } from "./user/user.module";
import { WatchItemModule } from './watch_item/watch_item.module';
import { ReviewModule } from './review/review.module';

@Module({
  imports: [ConfigModule.forRoot(), AuthModule, UserModule, WatchItemModule, ReviewModule],
})
export class AppModule {}
