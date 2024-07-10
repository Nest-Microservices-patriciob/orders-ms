import { IsEnum, IsOptional } from 'class-validator';

import { OrderStatusList } from '../enum/order-status.enum';
import { OrderStatus } from '@prisma/client';
import { PaginationDto } from 'src/common';

export class OrderPaginationDto extends PaginationDto {
  @IsOptional()
  @IsEnum(OrderStatusList, {
    message: `Valid statuses are ${OrderStatusList}`,
  })
  status: OrderStatus;
}
