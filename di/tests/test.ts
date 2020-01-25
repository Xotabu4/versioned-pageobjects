import { expect } from "chai"
import { initApp, APP } from '../app';

describe('Version', function () {
    let APP;
    it('should be returned correctly', function () {
        global['version'] = 'ADMIN'
        APP = initApp()
        expect(APP.home.title()).to.equal('Admin title!')

        global['version'] = 'GUEST'
        APP = initApp()
        expect(APP.home.title()).to.equal('Guest title!')
    })

})
