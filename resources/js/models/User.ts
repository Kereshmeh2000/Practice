import fakeUser from './user.json'

class User {
    id: number;
    name: string;
    gender: string;
    email: string;
    profileImage: string;

    constructor(json: {id: number, name: string, gender: string, email: string}) {
        this.id = json.id
        this.name = json.name
        this.gender = json.gender
        this.email = json.email
        this.profileImage = `https://picsum.photos/101/101`
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