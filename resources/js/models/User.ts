import fakeUser from './user.json'

class User {
    id: number;
    name: string;
    gender: string;
    email: string;
    image: string;
    location: string;
    lastSeen: string;

    constructor(json: {id: number, name: string, gender: string, email: string, image: string, location: string, lastSeen: string}) {
        this.id = json.id
        this.name = json.name
        this.gender = json.gender
        this.email = json.email
        this.image = json.image
        this.location = json.location
        this.lastSeen = json.lastSeen
    }
    
    static fromJson (json: any): User {
        return new User(json)
    }

    static async all(): Promise <User[]> {
        try{
            return fakeUser.map((user) => User.fromJson(user))
        }
        catch{
            throw new Error('Error fetching users')
        }
    }
}
export default User;