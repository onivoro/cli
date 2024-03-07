import { shell as execSync } from '../functions/shell.function';
import { Command, CommandRunner } from 'nest-commander';

type IParams = any;

@Command({ name: Build.name })
export class Build extends CommandRunner {
    constructor(

    ) {
        super();
    }

    async run(_args: string[], params: IParams): Promise<void> {
        return this.main([], params);
    }

    async main(_args: string[], params: IParams): Promise<void> {
        execSync(`rm -rf dist`);
        execSync(`tsc -m nodenext --outDir './dist/esm'`);
        // this next line should only be run if it's a REAL esm module
        // execSync(`echo '{"type": "module"}' > dist/esm/package.json`);
        execSync(`tsc --outDir './dist/types' --emitDeclarationOnly --declaration`);
        execSync(`tsc -m nodenext --outDir './dist/cjs'`);

    }
}