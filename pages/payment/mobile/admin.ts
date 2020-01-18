import { AbstractMobilePaymentPage } from './abstract';

export class MobileAdminPaymentPage extends AbstractMobilePaymentPage {
    static version = 'ADMIN'

    title() {
        return 'mobile admin payment title!'
    }
}