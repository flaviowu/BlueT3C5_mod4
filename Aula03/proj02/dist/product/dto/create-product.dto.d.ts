import { Product } from '../entities/product.entity';
import { Prisma } from '@prisma/client';
export declare class CreateProductDto extends Product {
    name: string;
    price?: number;
    images?: Prisma.ImageUncheckedCreateNestedManyWithoutProductInput;
}
