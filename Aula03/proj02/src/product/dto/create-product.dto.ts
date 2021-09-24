import { Product } from '../entities/product.entity';
import { Prisma } from '@prisma/client';
import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateProductDto extends Product {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt()
  @IsOptional()
  price?: number;

  @IsOptional()
  images?: Prisma.ImageUncheckedCreateNestedManyWithoutProductInput;
}
