import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TesteArgs } from './teste.args';
import { TesteSchema } from './teste.schema';

@Resolver('Teste')
export class TesteResolver {
  @Query(() => String, {
    description: 'Tentando buscar algo',
  })
  testes() {
    return 'Teste da poha';
  }

  @Mutation(() => TesteSchema, {
    description: 'Tentando criar algo',
  })
  createTeste(@Args() args: TesteArgs) {
    return args.data;
  }
}
