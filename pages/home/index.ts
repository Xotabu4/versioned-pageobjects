import { versionedDecorator, versioned } from '../../lib/versioned';
import { AbstractHomePage } from './abstract';
import { AdminHomePage } from './admin';
import { GuestHomePage } from './guest';

// For testing purposes, in production project will be just export const HomePage

// Exporting decorated class
// @deprecated
@versionedDecorator({
    versions: [AdminHomePage, GuestHomePage],
    defaultVersion: GuestHomePage
})
class Exported { }
export const DecoratedHomePage: new () => AbstractHomePage = Exported as any







////////////////////////////////////////
// Using special function that returns wrapped proxy 
export const FunctionHomePage = versioned<AbstractHomePage>({
    versions: [AdminHomePage, GuestHomePage, class extends AbstractHomePage {title() {return 'test'}}],
    defaultVersion: GuestHomePage
})