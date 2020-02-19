const browser = {
    params: {
        screenType: 'DESKTOP',
        applicationType: 'RIDE',
    }
}

class Page2 {
    static get versions() {
        return {
            DESKTOP: DesktopPage,
            MOBILE: MobilePage
        }
    }
}
class Page3 {
    static get versions() {
        return {
            DESKTOP: DesktopPage,
            MOBILE: MobilePage
        }
    }
}

export abstract class Page {
    static get versions() {
        return {
            DESKTOP: DesktopPage,
            MOBILE: MobilePage
        }
    }

    title() {
        return 'Page title!'
    }

    abstract doSearch()
}

class DesktopPage extends Page {
    doSearch() {
        return 'Doing DESKTOP search'
    }
}

class MobilePage extends Page {
    doSearch() {
        return 'Doing MOBILE search'
    }
}

function initialize<T>(constrctor): T {
    return new constrctor.versions[browser.params.screenType]()
}


const page = initialize<Page>(Page);
console.log(page.title())
console.log(page.doSearch())

browser.params.screenType = 'MOBILE'

const page2 = initialize<Page>(Page);
console.log(page2.title())
console.log(page2.doSearch())



export class Application {
    public readonly page: Page;
    public readonly page2: Page2;
    public readonly page3: Page3;

    constructor() {
        this.page = initialize<Page>(Page)
        this.page2 = initialize<Page2>(Page2)
        this.page3 = initialize<Page3>(Page3)
    }
}

const APP = new Application();
console.log(APP.page.doSearch())




