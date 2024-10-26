import { readFileSync } from 'node:fs';
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
        try {
            execSync(`tsc --outDir './dist/types' --emitDeclarationOnly --declaration`);

            const { onx } = JSON.parse(readFileSync('package.json', { encoding: 'utf-8' }) || '{}');

            execSync(`rm -rf dist`);

            execSync(`tsc -m nodenext --outDir './dist/esm'`);

            if(onx?.module === 'esm') {
                execSync(`echo '{"type": "module"}' > dist/esm/package.json`);
            }

            execSync(`tsc -m nodenext --outDir './dist/cjs'`);
        } catch (e: unknown) {
            process.exit(1)
        }
    }
}