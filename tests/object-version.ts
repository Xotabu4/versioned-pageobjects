import { expect } from "chai"
import { HomePage } from '../pages/home';

describe('Version', function () {
    it('should be returned correctly', function () {
        global['version'] = {
            user: 'ADMIN',
            screen: 'MOBILE'
        };
        const home = new HomePage()
        expect(home.title()).to.equal('Admin desktop title!')

        global['version'] = {
            user: 'ADMIN',
            screen: 'DESKTOP'
        };
        const home2 = new HomePage()
        expect(home2.title()).to.equal('Admin desktop title!')
    })

    it('should be returned correctly, and ignore upper/lower case', function () {
        global['version'] = 'guest'
        const home = new HomePage()
        expect(home.title()).to.equal('Guest title!')
    })

    it('should fallback to default, if config not provided', function () {
        global['version'] = undefined
        const home4 = new HomePage()
        expect(home4.title()).to.equal('Guest title!')
    })

    it('should fallback to default, if no matched versions', function () {
        global['version'] = 'INVALID VERSION'
        const home3 = new HomePage()
        expect(home3.title()).to.equal('Guest title!')
    })
})
