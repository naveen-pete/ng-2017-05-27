import { Subject } from 'rxjs/Subject';

export class UsersService {
    userActivated: Subject<number>;

    constructor() {
        this.userActivated = new Subject<number>();
    }
}
