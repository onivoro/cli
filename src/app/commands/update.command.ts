import { execSync } from 'child_process';
import { Command, CommandRunner, Option } from 'nest-commander';
import { usingPackage } from '../functions/using-package.function';

const packagePath = './package.json';

@Command({ name: Update.name })
export class Update extends CommandRunner {
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
                execSync('ncu -u');
            } catch (e: any) {
                console.error(`Failed to check for updates`, e);
                return;
            }
        });
    }
}