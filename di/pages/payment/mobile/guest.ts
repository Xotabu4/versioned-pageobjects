import { AbstractMobilePaymentPage } from './abstract';

export class MobileGuestPaymentPage extends AbstractMobilePaymentPage {
    static version = 'GUEST'

    title() {
        return 'mobile guest payment title!'
    }
}