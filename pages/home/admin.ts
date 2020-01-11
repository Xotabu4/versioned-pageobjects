import { AbstractHomePage } from './abstract';

export class AdminHomePage extends AbstractHomePage {
    static version = 'ADMIN'

    title() {
        return 'Admin title!'
    }
}