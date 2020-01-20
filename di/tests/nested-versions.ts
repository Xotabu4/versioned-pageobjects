import { expect } from "chai"
import { PaymentPage } from '../pages/payment';

describe('Version', function () {
    it('should be returned correctly', function () {
        global['version'] = 'ADMIN'
        const home = new PaymentPage()
        expect(home.title()).to.equal('Admin desktop title!')

        global['version'] = 'GUEST'
        const home2 = new PaymentPage()
        expect(home2.title()).to.equal('Admin desktop title!')
    })

    it('should be returned correctly, and ignore upper/lower case', function () {
        global['version'] = 'guest'
        const home = new PaymentPage()
        expect(home.title()).to.equal('Guest title!')
    })

    it('should fallback to default, if config not provided', function () {
        global['version'] = undefined
        const home4 = new PaymentPage()
        expect(home4.title()).to.equal('desktop guest payment title!')
    })

    it('should fallback to default, if no matched versions', function () {
        global['version'] = 'INVALID VERSION'
        const home3 = new PaymentPage()
        expect(home3.title()).to.equal('Guest title!')
    })
})
