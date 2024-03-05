import { Module } from '@nestjs/common';
import { AddEngines } from './commands/add-engines.command';
import { AddTsconfig } from './commands/add-tsconfig.command';
import { Library } from './commands/library.command';
import { Update } from './commands/update.command';

@Module({
  providers: [AddEngines, AddTsconfig, Library, Update],
  imports: [],
})
export class CliModule { }
