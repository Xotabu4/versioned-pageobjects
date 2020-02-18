export abstract class Page {
    static get versions() {
        return {
            DESKTOP: {
                DEFAULT: MobilePage
            },
            MOBILE: {
                DEFAULT: DesktopPage
            }
        }
    }

    title() {
        return 'Page title!'
    }

    abstract doSearch()
}

class DesktopPage extends Page {
    doSearch() {
        console.log('Doing DESKTOP search')
    }
}

class MobilePage extends Page {
    doSearch() {
        console.log('Doing MOBILE search')
    }
}
