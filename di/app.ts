import "reflect-metadata";
import { container, injectable, inject, registry, injectAll } from 'tsyringe';
import { HomePage } from './pages/home/index';
import { GuestHomePage } from './pages/home/guest';
import { AdminHomePage } from './pages/home/admin';

@injectable()
@registry([
    {
        token: 'versions',
        useClass: GuestHomePage
    },
    {
        token: 'versions',
        useClass: AdminHomePage
    },
    {
        token: 'versions',
        useFactory: container => {
            const versions = container.resolveAll<HomePage>('home_pages')
            return versions.filter(inst => inst.version == global['version'])[0]
        }
    }
])
export class Application {

    constructor(
        @inject('home') public home: HomePage,
        
        @injectAll('home_versions') private home_versions: HomePage[]
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