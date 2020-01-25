import { HomePage } from './index';
import { container } from 'tsyringe';

export class AdminHomePage extends HomePage {
    version = 'ADMIN'

    title() {
        return 'Admin title!'
    }
}

