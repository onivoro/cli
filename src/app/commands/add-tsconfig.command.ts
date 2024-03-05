import { execSync } from 'child_process';
import { Command, CommandRunner } from 'nest-commander';
import { usingPackage } from '../functions/using-package.function';
import { getEngines } from '../functions/get-engines.function';
import { addTsconfig } from '../functions/add-tsconfig.function';

const packagePath = 'package.json';
const tsconfigPath = 'tsconfig.json';

@Command({ name: AddTsconfig.name })
export class AddTsconfig extends CommandRunner {
    constructor(
    ) {
        super();
    }

    async run(_args: string[], params: any): Promise<void> {
        return this.main([], params);
    }

    async main(_args: string[], params: any): Promise<void> {
       await addTsconfig(tsconfigPath);
    }
}