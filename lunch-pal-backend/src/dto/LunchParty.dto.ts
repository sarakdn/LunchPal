import { UserDto} from './user.dto'



export class LunchPartyDto {

    mensa: String
    maxpals: Number
    starttime: Date
    endtime: Date
    currentpals: Number
    users: [String]
    interests: [String]
}
