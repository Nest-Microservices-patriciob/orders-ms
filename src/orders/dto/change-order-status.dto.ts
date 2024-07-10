import { IsUUID, IsEnum } from 'class-validator';
import { OrderStatusList } from '../enum/order-status.enum';
import { OrderStatus } from '@prisma/client';

export class ChangeOrderStatusDto {
  @IsUUID()
  id: string;

  @IsEnum(OrderStatusList, {
    message: `Valid Statuses are ${OrderStatusList}`,
  })
  status: OrderStatus;
}
