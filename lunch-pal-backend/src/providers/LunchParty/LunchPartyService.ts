import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LunchPartyDto } from '../../dto/LunchParty.dto'
import { UserDto } from 'src/dto/user.dto';
import { UserMongoSchema } from 'src/mongo-schemas/user-mongo.schema'

@Injectable()
export class LunchPartyService {


  constructor(@InjectModel('LunchParty') private readonly lunchPartyModel: Model<LunchPartyDto>) { }


  async match(input: LunchPartyDto) {

    let newParty = new this.lunchPartyModel(input) // Create model to compare
    let compParty = await this.lunchPartyModel.find({ "mensa": newParty.mensa, "starttime": newParty.starttime, "maxpals": newParty.maxpals, "interests": newParty.interests })
    let added = false

    //Check if eligible partys are free
    for (let entry of compParty) {
      if (entry.currentpals < entry.maxpals) {
        let userid = newParty.users[0]
        let alreadyIn = false;
        for(let identity of entry.users){
          if (identity === userid){
            alreadyIn = true;
          }
        }
        if (alreadyIn === true){
          continue
        }
        entry.currentpals = entry.currentpals + 1
        entry.users.push(userid)
        entry.save()
        //console.log("Pushed Array" + entry.users)
        added = true
        //console.log("SAVED TO NEW PARTY")
        return entry

      }
    }
    if (added === false) {
      newParty.save()
      console.log("NEW PARTY SAVED")
      return newParty
    }
  }


  async getAllById(input: String) {
    let party = await this.lunchPartyModel.find({ "users": input })
    return party
  }

  async getPartyById(id: String) {
    let party = await this.lunchPartyModel.findById(id)
    return party
  }


}
