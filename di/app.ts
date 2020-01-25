import "reflect-metadata";
import { container, autoInjectable, injectable, inject, predicateAwareClassFactory, registry } from 'tsyringe';
import { HomePage } from './pages/home/index';
import { GuestHomePage } from './pages/home/guest';
import { AdminHomePage } from './pages/home/admin';

@injectable()
@registry([
    {
        token: "home_pages",
        useClass: GuestHomePage
    },
    {
        token: "home_pages",
        useClass: AdminHomePage
    },
    {
        token: "home",
        useFactory: (c) => {
            const versions = c.resolveAll<HomePage>('home_pages')
            return versions.filter(inst => inst.version == global['version'])[0]
        }
    }
])
export class Application {
    constructor(
        @inject('home')public home: HomePage,
        // public payment?: DesktopAdminPaymentPage,
    ) { }
}

/**
 * For testing purposes, re-initialize container
 */
export const initApp = () => {
    return container.resolve(Application);
}

export const APP = container.resolve(Application)