import { Command, CommandRunner, Option } from 'nest-commander';
import { addEngines } from '../functions/add-engines.function';

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
        await addEngines(packagePath);
    }
}