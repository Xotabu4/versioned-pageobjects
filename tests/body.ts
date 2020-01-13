import { expect } from "chai"

export function testsBody(HomePage) {
    describe('Version', function () {
        it('should be returned correctly', function () {
            global['version'] = 'GUEST'
            const home = new HomePage()
            expect(home.title()).to.equal('Guest title!')

            global['version'] = 'ADMIN'
            const home2 = new HomePage()
            expect(home2.title()).to.equal('Admin title!')
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
}