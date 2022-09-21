import { Module } from '@nestjs/common';
import { BasicCommand } from './basic.command';
import { ZipCommand } from './zip.command';

@Module({
  imports: [],
  providers: [BasicCommand, ZipCommand],
})
export class AppCliModule {}
