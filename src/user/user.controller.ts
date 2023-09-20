import { User } from './user';
import { UserService } from './user.service';

export class UserController {
    constructor(private userService: UserService) {}

    add(username: string): User {
        if (username.length == 0) {
            throw new Error('username must not be empty!');
        } else if (/\s/g.test(username)) {
            throw new Error('Invalid username !');
        }

        return this.userService.add(username);
    }

    getById(id: string): User | null {
        return this.userService.getById(id);
    }
}
