import { Module } from '@nestjs/common';
import { AddEngines } from './commands/add-engines.command';
@Module({
  providers: [AddEngines],
  imports: [],
})
export class CliModule { }
