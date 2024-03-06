import { execSync, spawn } from 'child_process';
import { Command, CommandRunner, Option } from 'nest-commander';

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
        execSync(`echo '{"type": "module"}' > dist/esm/package.json`);
        execSync(`tsc --outDir './dist/types' --emitDeclarationOnly --declaration`);
        execSync(`tsc -m nodenext --outDir './dist/cjs'`);

    }
}