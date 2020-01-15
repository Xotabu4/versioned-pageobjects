
// class Page {
//     static version = {
//         screen: 'MOBILE',
//         user: 'GUEST'
//     }

//     title(): string {
//         return 'some title'
//     }
// }

// interface IConstructor<T> {
//     new(...args: any): T;
// }

// function create2<T extends>(PAGE: IConstructor<T>): void {
//     const a = new PAGE();
//     console.log(a.title())
// }

// const c = create2<Page>(Page)

// interface IVersioned {
//     version: {
//         screen: string,
//         user: string
//     }
// }

// function create<T extends Object>(PAGE: IConstructor<T> & IVersioned): void {
//     console.log(PAGE.version.screen)
//     const a = new PAGE();
//     console.log(a.title())
// }

// const b = create<Page>(Page)

