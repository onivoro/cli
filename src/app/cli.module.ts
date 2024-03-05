import { Module } from '@nestjs/common';
import { AddEngines } from './commands/add-engines.command';
import { Update } from './commands/update.command';
import { AddTsconfig } from './commands/add-tsconfig.command';
@Module({
  providers: [AddEngines, AddTsconfig, Update],
  imports: [],
})
export class CliModule { }
