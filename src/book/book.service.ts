import { UpdateBookDto } from './dto/update-book.dto';
import { CreateBookDto } from './dto/create-book.dto';
import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './entities/book.entity';

// function randomNum() {
//     return Math.floor(Math.random() * 1000000);
// }

@Injectable()
export class BookService {
    @InjectRepository(Book)
    private bookRepository: Repository<Book>;

    async list(name) {
        return await this.bookRepository.find({
            where: {
                name,
            },
            order: {
                id: 'DESC'
            }
        });
    }

    async detail(id: number) {
        const book: Book = await this.bookRepository.findOneBy({ id });
        return book;
    }

    async create(createBookDto: CreateBookDto) {
        return await this.bookRepository.save(createBookDto);
    }

    async update(updateBookDto: UpdateBookDto) {
        await this.bookRepository.update(updateBookDto.id, updateBookDto)
        return null;
    }

    async delete(id: number) {
        await this.bookRepository.delete(id);
        return null;
    }
}
