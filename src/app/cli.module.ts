import { Module } from '@nestjs/common';
import { AddEngines } from './commands/add-engines.command';
import { AddGitignore } from './commands/add-gitignore.command';
import { AddTsconfig } from './commands/add-tsconfig.command';
import { Build } from './commands/build.command';
import { Library } from './commands/library.command';
import { Publish } from './commands/publish.command';
import { Update } from './commands/update.command';

@Module({
  providers: [AddEngines, AddGitignore, AddTsconfig, Build, Library, Publish, Update],
  imports: [],
})
export class CliModule { }
