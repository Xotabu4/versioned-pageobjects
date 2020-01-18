import { AbstractDesktopPaymentPage } from './abstract';


export class DesktopAdminPaymentPage extends AbstractDesktopPaymentPage {
    static version = 'ADMIN'

    title() {
        return 'desktop admin payment title!'
    }
}