import User from './User';
import axios from 'axios';
import { config } from '../config';
import {isToday, isYesterday, format} from 'date-fns';

const mainUrl = `${config.host}/api/stories`;
export default class Story {
    id: number;
    image: {
        id: number;
        url: string;
        hasApproved: number;
        imagableId: number 
        imageableType: string
    };
    createdAt: string;
    user: User;

    constructor(json: {
        id: number;
        image: {
            id: number;
            url: string;
            hasApproved: number;
            imagableId: number;
            imageableType: string ;
        };
        created_at: string;
        createdAt: string;
        user: User;
    }) {
        this.id = json.id;
        this.image = json.image;
        this.createdAt = json.createdAt;
        this.user = json.user;
    }

    static fromJson(json: any): Story {
        return new Story(json);
    }

    static async all(): Promise<Story[]> {
            try{
                const response = await axios.get(mainUrl);
                return response.data.map((story : any) => new Story(story));
            }
            catch{
                throw new Error('Error fetching users')
            }
    }

      getFormattedDate = () => {
        if (isToday(this.createdAt)) {
            return `Toady at ${format((this.createdAt), 'HH:mm')}`
        }
        if (isYesterday(this.createdAt)) {
            return `Yesterday at ${format((this.createdAt), 'HH:mm')}`
        }
        return format((this.createdAt), 'dd/MM/yyyy')
    };

    getFormattedStory = () => {
        return {
            id: this.id,
            imageUrl: this.image.url,
            duration: 5000,
            storyHeader: {
                profile: this.user.profileImage,
                time: this.getFormattedDate(),
                name: this.user.name,
            }
        }
    }
}
