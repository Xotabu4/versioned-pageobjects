import { versionedDecorator } from '../../versioned';
import { AbstractHomePage } from './abstract'
import { AdminHomePage } from './admin';
import { GuestHomePage } from './guest';

// export const HomePage = versioned<DefaultHomePage>(
//     DefaultHomePage,
//     {
//         'GUEST': GuestHomePage, 'ADMIN': AdminHomePage
//     }
// )


@versionedDecorator({
    versions: [AdminHomePage, GuestHomePage],
    defaultVersion: GuestHomePage
})
class Exported { }

export const HomePage: new () => AbstractHomePage = Exported as any
