import { execSync } from 'child_process';
import { readFile, writeFile } from 'fs/promises';
import { Command, CommandRunner, Option } from 'nest-commander';

const packagePath = './package.json';

@Command({ name: AddEngines.name })
export class AddEngines extends CommandRunner {
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
            json = JSON.parse(content);
        } catch (e: any) {
            console.error(`Failed to parse package.json`, e);
            return;
        }

        const node = execSync('node -v').toString().replace('\n', '');
        const npm = execSync('npm -v').toString().replace('\n', '');

        json.engines = {
            node, npm
        };

        try {
            await writeFile(packagePath, JSON.stringify(json, null, 4));
        } catch (e: any) {
            console.error(`Failed to update package.json`, e);
            return;
        }
    }
}
