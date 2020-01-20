import { versioned } from '../../lib/versioned';
import { AbstractHomePage } from './abstract';
import { AdminHomePage } from './admin';
import { GuestHomePage } from './guest';

////////////////////////////////////////
// Using special function that returns wrapped proxy 
export const HomePage = versioned<AbstractHomePage>({
    versions: [AdminHomePage, GuestHomePage],
    defaultVersion: GuestHomePage
})