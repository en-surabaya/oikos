import { Injectable } from '@nestjs/common';
import { FindManyOptions, Repository } from 'typeorm';
import { Page, PaginatedParameter, PaginatedResponse } from './pagination.entity';

@Injectable()
export class PaginationService {
  async handleRequest<Filter, Entity>(
    param: PaginatedParameter<Filter>,
    repo: Repository<Entity>,
    options?: FindManyOptions<Entity>,
  ): Promise<PaginatedResponse<Entity>> {
    const {
      filter,
      page: { take, skip },
    } = param;

    const [nodes, totalCount] = await repo.findAndCount({
      where: filter ? { ...filter, isActive: 1 } : {},
      take,
      skip,
      ...options,
    });

    const prevPage = this.getPrevPage({ take, skip });
    const nextPage = this.getNextPage<Entity>({ take, skip }, [nodes, totalCount]);

    return {
      totalCount,
      nodes,
      pageInfo: {
        prevPage,
        nextPage,
      },
    };
  }

  private getPrevPage(page: Page) {
    if (page.skip > 0) {
      return {
        take: page.take,
        skip: Math.max(page.skip - page.take, 0),
      };
    }
    return null;
  }

  private getNextPage<Entity>(page: Page, [, totalCount]: [Entity[], number]) {
    const nextSkip = page.skip + page.take;
    if (nextSkip < totalCount) {
      return {
        take: page.take,
        skip: Math.min(nextSkip, totalCount),
      };
    }
    return null;
  }
}
