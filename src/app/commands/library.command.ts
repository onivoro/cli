import { mkdir } from 'fs/promises';
import { Command, CommandRunner, Option } from 'nest-commander';
import { addTsconfig } from '../functions/add-tsconfig.function';
import { addPackageJson } from '../functions/add-package-json.function';
import { addEngines } from '../functions/add-engines.function';
import { addGitignore } from '../functions/add-gitignore.function';

type IParams = { name: string, platform: string };

@Command({ name: Library.name })
export class Library extends CommandRunner {
    constructor(

    ) {
        super();
    }

    async run(_args: string[], params: IParams): Promise<void> {
        return this.main([], params);
    }

    async main(_args: string[], { name, platform }: IParams): Promise<void> {
        const packagePath = 'package.json';
        const directory = name.split('/').pop();
        await mkdir(directory);
        process.chdir(directory);
        await addTsconfig('tsconfig.json');
        await addPackageJson(name, packagePath, platform);
        await addEngines(packagePath);
        await addGitignore();
    }

    @Option({
        flags: '-p, --platform [platform]',
        description:
            'The platform that the library will be built for: isomorphic|server|browser',
        required: true
    })
    parsePlatform(val: string) {
        return val;
    }

    @Option({
        flags: '-n, --name [name]',
        description:
            'Fully qualified name including the npm scope: @my-org/lib-name',
        required: true
    })
    parseName(val: string) {
        return val;
    }
}
