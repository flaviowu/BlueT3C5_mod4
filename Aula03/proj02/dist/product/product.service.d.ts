import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ProductService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private readonly _include;
    create(data: CreateProductDto): import(".prisma/client").Prisma.Prisma__ProductClient<import(".prisma/client").Product & {
        images: {
            url: string;
        }[];
    }>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Product & {
        images: {
            url: string;
        }[];
    })[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__ProductClient<import(".prisma/client").Product & {
        images: {
            url: string;
        }[];
    }>;
    update(id: number, data: UpdateProductDto): import(".prisma/client").Prisma.Prisma__ProductClient<import(".prisma/client").Product & {
        images: {
            url: string;
        }[];
    }>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__ProductClient<import(".prisma/client").Product & {
        images: import(".prisma/client").Image[];
    }>;
}
