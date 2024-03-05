import { Module } from '@nestjs/common';
import { ResetPassword } from './commands/reset-password.command';
@Module({
  providers: [ResetPassword],
  imports: [],
})
export class CliEvoModule {}
