import { execSync } from 'child_process';
import { Command, CommandRunner } from 'nest-commander';
import { usingPackage } from '../functions/using-package.function';
import { getEngines } from '../functions/get-engines.function';

const packagePath = './package.json';
const tsconfigPath = './tsconfig.json';

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
        await usingPackage(packagePath, async (json) => {

            try {
                const { node } = json.engines || getEngines();
                const [major] = node.split('.');

                execSync(`curl https://raw.githubusercontent.com/tsconfig/bases/main/bases/node${major}.json >> ${tsconfigPath}`);
            } catch (e: any) {
                console.error(`Failed to create tsconfig.json`, e);
                return;
            }
        });
    }
}