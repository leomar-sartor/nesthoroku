import { ArgsType, Field } from '@nestjs/graphql';
import { TesteInput } from './teste.input';

@ArgsType()
export class TesteArgs {
  @Field()
  data: TesteInput;
}
