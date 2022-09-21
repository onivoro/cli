import { Command, CommandRunner, Option } from 'nest-commander';
import { updateFunction } from '@oni/lambda';

interface DeployLambdaCommandOptions {
  zip: string;
  functionName?: string;
}


@Command({ name: 'update-function', description: 'Deploy a new AWS lambda function' })
export class UpdateFunctionCommand extends CommandRunner {

  async run(
    _passedParam: string[],
    options?: DeployLambdaCommandOptions,
  ): Promise<void> {
    updateFunction('assess-dev01-dqa-request', 'us-east-1', options.zip);
  }

  @Option({
    flags: '-z, --zip [zip]',
    description: 'The zip to deploy',
  })
  parseZip(val: string): string {
    return val;
  }
}
