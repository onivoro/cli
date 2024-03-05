import { Module } from '@nestjs/common';
import { AddEngines } from './commands/add-engines.command';
import { AddTsconfig } from './commands/add-tsconfig.command';
import { Build } from './commands/build.command';
import { Library } from './commands/library.command';
import { Publish } from './commands/publish.command';
import { Update } from './commands/update.command';

@Module({
  providers: [AddEngines, AddTsconfig, Build, Library, Publish, Update],
  imports: [],
})
export class CliModule { }
