import { Module } from '@nestjs/common';
import { BasicCommand } from './commands/basic.command';
import { ZipCommand } from './commands/zip.command';
import { UpdateFunctionCommand } from './commands/update-function.command';

@Module({
  imports: [],
  providers: [BasicCommand, UpdateFunctionCommand, ZipCommand],
})
export class AppCliModule {}
