import { Command, CommandRunner, Option } from 'nest-commander';
import { zipDirectory } from '@oni/util';

interface ZipCommandOptions {
  src: string;
  dest?: string;
}

@Command({ name: 'zip', description: 'Zip a folder' })
export class ZipCommand extends CommandRunner {

  async run(
    _passedParam: string[],
    options?: ZipCommandOptions,
  ): Promise<void> {
    const {src, dest} = options;
    await zipDirectory(src, `${(dest || src)}.zip`.replace('.zip.zip', '.zip'))
  }

  @Option({
    flags: '-s, --src [src]',
    description: 'The directory to zip',
  })
  parseSrc(val: string): string {
    return val;
  }

  @Option({
    flags: '-d, --dest [dest]',
    description: 'The output directory',
  })
  parseDest(val: string): string {
    return val;
  }
}
