import { Query, Resolver } from '@nestjs/graphql';
import { Domain } from './domain.entity';
import { DomainService } from './domain.service';

@Resolver((of) => Domain)
export class DomainResolver {
  constructor(private readonly domainService: DomainService) {}

  @Query((returns) => [Domain])
  async getDomains(): Promise<Domain[]> {
    return this.domainService.getDomains();
  }
}
