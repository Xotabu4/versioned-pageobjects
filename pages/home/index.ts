import { versioned } from '../../lib/versioned';
import { AbstractHomePage } from './abstract';
import { AdminHomePage } from './admin';
import { GuestHomePage } from './guest';

export const HomePage = versioned<AbstractHomePage>({
    versions: [AdminHomePage, GuestHomePage],
    defaultVersion: GuestHomePage
})
