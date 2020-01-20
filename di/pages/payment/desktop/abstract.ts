import { AbstractPaymentPage } from "../abstract";

export abstract class AbstractDesktopPaymentPage extends AbstractPaymentPage {
    static version = 'DESKTOP'
    abstract title(): string
}