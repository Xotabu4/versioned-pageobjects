import { versioned } from '../../../lib/versioned';
import { MobileGuestPaymentPage } from './guest';
import { MobileAdminPaymentPage } from './admin';
import { AbstractMobilePaymentPage } from './abstract';

export const MobilePaymentPage = versioned<AbstractMobilePaymentPage>({
    versions: [MobileGuestPaymentPage, MobileAdminPaymentPage],
    defaultVersion: MobileGuestPaymentPage
})