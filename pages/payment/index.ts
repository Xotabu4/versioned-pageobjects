import { versioned } from '../../lib/versioned';
import { AbstractPaymentPage } from './abstract';
import { MobilePaymentPage } from './mobile/index';
import { DesktopPaymentPage } from './desktop/index';

export const PaymentPage = versioned<AbstractPaymentPage>({
    versions: [MobilePaymentPage, DesktopPaymentPage],
    defaultVersion: DesktopPaymentPage
})