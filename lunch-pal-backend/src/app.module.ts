import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './modules/user/user.module';
import { UserService } from './providers/user-provider/user-service'
import {LunchPartyModule} from './modules/lunchparty/lunchparty.module'
import {LunchPartyService} from './providers/LunchParty/LunchPartyService'


let MongoseConfig = MongooseModule.forRoot('mongodb://lunch-pal-db/lunch-pal')

@Module({
  imports: [MongoseConfig,UserModule,LunchPartyModule],
  controllers: [AppController],
  providers: [AppService, UserService, LunchPartyService],
})
export class AppModule {}
