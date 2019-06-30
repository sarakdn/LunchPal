import { Controller, Post, Put, Param, Body, Get, UsePipes ,Response, Delete , Res ,HttpException , HttpStatus, UseGuards, Req,Request} from '@nestjs/common';
import { LunchPartyDto } from "../../dto/LunchParty.dto";
import { LunchPartyService } from '../../providers/LunchParty/LunchPartyService';

@Controller('lunchparty')
export class LunchPartyController {

  constructor(private partyserv : LunchPartyService){}



  /* Needs following input:
  mensa: String,
  maxpals: Number,
  currentpals: Number,
  starttime: Date,
  endtime: Date,
  users: [String],
  interests: [String]
  where "users" is an array full of _id's - user id's.*/
  @Post('input')
  async match(@Body() input: LunchPartyDto){
    let party = await this.partyserv.match(input)
    return party
  }
  //requires userid
  @Get("/getallparties/:id")
  async get(@Param('id') userid: string){
    console.log(userid)
    let party = await this.partyserv.getAllById(userid)
    return party
  }


  //requires PartyID
  @Get("/getparty/:id")
  async getPartyById(@Param('id') id: string){
    console.log(id)
    let party = await this.partyserv.getPartyById(id)
    return party
  }
}
