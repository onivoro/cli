import { execSync } from 'child_process';
import { Command, CommandRunner } from 'nest-commander';

@Command({ name: Test.name })
export class Test extends CommandRunner {
    constructor(

    ) {
        super();
    }

    async run(_args: string[], params: any): Promise<void> {
        return this.main([], params);
    }

    async main(_args: string[], params: any): Promise<void> {
     execSync(`npx -y bun test`);
    }
}