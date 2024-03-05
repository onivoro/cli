import { execSync } from 'child_process';
import { readFile, writeFile } from 'fs/promises';
import { Command, CommandRunner, Option } from 'nest-commander';

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
        let content: string;
        let json: any;

        try {
            content = await readFile(packagePath, {encoding: 'utf-8'});
        } catch (e: any) {
            console.error(`Failed to read package.json`, e);
            return;
        }

        try {
            execSync('npx --yes npm-check-updates');
        } catch (e: any) {
            console.error(`Failed to check for updates`, e);
            return;
        }
    }
}