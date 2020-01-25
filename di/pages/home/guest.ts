import { HomePage } from './index';
import { container } from 'tsyringe';

export class GuestHomePage extends HomePage {
    version = 'GUEST'

    title() {
        return 'Guest title!'
    }
}

