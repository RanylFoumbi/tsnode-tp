import { User } from './user';

export interface UserService {
    add(username: string): User;
    getById(id: string): User | null;
}
