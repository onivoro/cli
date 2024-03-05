import { execSync } from 'child_process';
import { Command, CommandRunner } from 'nest-commander';

@Command({ name: Publish.name })
export class Publish extends CommandRunner {
    constructor(

    ) {
        super();
    }

    async run(_args: string[], params: any): Promise<void> {
        return this.main([], params);
    }

    async main(_args: string[], params: any): Promise<void> {
        execSync(`npm publish --access public`);
    }
}