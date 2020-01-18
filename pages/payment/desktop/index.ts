import { versioned } from '../../../lib/versioned';
import { DesktopAdminPaymentPage } from './admin';
import { DesktopGuestPaymentPage } from './guest';
import { AbstractDesktopPaymentPage } from './abstract';

export const DesktopPaymentPage = versioned<AbstractDesktopPaymentPage>({
    versions: [DesktopAdminPaymentPage, DesktopGuestPaymentPage],
    defaultVersion: DesktopGuestPaymentPage
})
