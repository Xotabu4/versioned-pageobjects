
// export const versioner: new <T>(versions) => T = new Proxy(DefaultHomePage, handler);

export function versioned<T>(Default, versions): new (...args) => T {
    const handler = {
        construct(target, args) {
            console.log('constructor called', target.name);
            // return new target(...args);
            if (versions && global['version'] && versions[global['version']]) {
                return new versions[global['version']](...args)
            } else {
                return new Default(...args)
            }
        }
    };
    return new Proxy(Default, handler);
}

export function versionedDecorator(options: { versions: any[], defaultVersion: any }) {
    // <T extends { new(...args: any[]): {} }>

    const handler = {
        construct(target, args) {
            if (global['version'] === undefined) {
                console.warn('Global version parameter is not defined, returning default version')
                if (options.defaultVersion) {
                    return new options.defaultVersion(...args) as any
                } else {
                    throw new Error(`No default version for ${target.name} specified!`)
                }
            }
            if (!options.versions || options.versions.length === 0) {
                console.warn('No versions passed to decorator. Looking for default version...')
                if (options.defaultVersion) {
                    new options.defaultVersion(...args) as any
                }
                throw new Error(`No any versions or default version provided to decorator ${target.name}`)
            } else {
                const matchedVersions = options.versions.filter(version => {
                    return version.version.toLowerCase() === global['version'].toLowerCase()
                });
                if (matchedVersions.length > 1) {
                    throw new Error(`More than one "${global['version']}" version matched for ${target.name} ! Defined versions are: ${options.versions.map(v => v.name).join(', ')}`)
                } else if (matchedVersions.length === 0) {
                    // No matched versions in versions array, falling back to default
                    console.warn(`No "${global['version']}" version for ${target.name} specified! Looking for default version...`)
                    if (options.defaultVersion) {
                        return new options.defaultVersion(...args) as any
                    } else {
                        throw new Error(`No default version for ${target.name} specified!`)
                    }
                }
                return new matchedVersions[0](...args) as any
            }
        }
    }

    return function (constructorFunction): any {
        return new Proxy(constructorFunction, handler);
    }
}