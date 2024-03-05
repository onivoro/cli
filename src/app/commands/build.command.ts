import { execSync } from 'child_process';
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
        execSync(`rm -rf dist && tsc -b ./tsconfig.cjs.json ./tsconfig.esm.json ./tsconfig.types.json`);
        execSync(`echo '{"type": "module"}' > dist/esm/package.json`);
    }
}