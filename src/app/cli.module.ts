import { Module } from '@nestjs/common';
import { AddEngines } from './commands/add-engines.command';
import { Update } from './commands/update.command';
@Module({
  providers: [AddEngines, Update],
  imports: [],
})
export class CliModule { }
