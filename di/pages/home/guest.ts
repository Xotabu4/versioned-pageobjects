import { AbstractHomePage } from './abstract';

export class GuestHomePage extends AbstractHomePage {
    static version = 'GUEST'

    title() {
        return 'Guest title!'
    }
}