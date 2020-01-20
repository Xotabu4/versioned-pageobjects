import { AbstractDesktopPaymentPage } from './abstract';

export class DesktopGuestPaymentPage extends AbstractDesktopPaymentPage {
    static version = 'GUEST'

    title() {
        return 'desktop guest payment title!'
    }
}