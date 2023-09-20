import { User } from './user';
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
import { UserService } from './user.service';

export class UserJSONService implements UserService {
    add(username: string): User {
        const newUser = new User(uuidv4(), username);
        const userList: User[] = this.readFile();
        userList.push(newUser);
        fs.writeFileSync('./src/data/user.json', JSON.stringify(userList));
        return newUser;
    }

    getById(id: string): User | null {
        const userList: User[] = this.readFile();
        const user = userList.find((user) => user.id == id);
        if (!user) {
            return null;
        }

        return user;
    }

    readFile(): User[] | [] {
        try {
            const data = fs.readFileSync('./src/data/user.json', 'utf-8');
            return JSON.parse(data) as User[];
        } catch (error) {
            console.log({ error });
            return [];
        }
    }
}
