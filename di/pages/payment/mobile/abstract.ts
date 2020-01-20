import { AbstractPaymentPage } from "../abstract";

export abstract class AbstractMobilePaymentPage extends AbstractPaymentPage {
    static version = 'MOBILE'
    abstract title(): string
}