import { versionedDecorator, versioned } from '../../versioned';
import { AbstractHomePage } from './abstract'
import { AdminHomePage } from './admin';
import { GuestHomePage } from './guest';

// For testing purposes, in production project will be just export const HomePage

// Exporting decorated class
@versionedDecorator({
    versions: [AdminHomePage, GuestHomePage],
    defaultVersion: GuestHomePage
})
class Exported { }
export const DecoratedHomePage: new () => AbstractHomePage = Exported as any

// Using special function that returns wrapped proxy 
export const FunctionHomePage = versioned<AbstractHomePage>({
    versions: [AdminHomePage, GuestHomePage],
    defaultVersion: GuestHomePage
})