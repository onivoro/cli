import { Command, CommandRunner } from 'nest-commander';
import { addGitignore } from '../functions/add-gitignore.function';

@Command({ name: AddGitignore.name })
export class AddGitignore extends CommandRunner {
    constructor() {
        super();
    }

    async run(_args: string[], params: any): Promise<void> {
        return this.main([], params);
    }

    async main(_args: string[], params: any): Promise<void> {
        await addGitignore();
    }
}