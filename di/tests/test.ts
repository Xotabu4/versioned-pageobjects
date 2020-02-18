import { expect } from "chai"
import { initApp } from '../app';

describe('Version', function () {
    it('should be returned correctly', function () {
        global['version'] = 'ADMIN'
        let APP = initApp()
        expect(APP.home.title()).to.equal('Admin title!')

        global['version'] = 'GUEST'
        APP = initApp()
        expect(APP.home.title()).to.equal('Guest title!')
    })

})
