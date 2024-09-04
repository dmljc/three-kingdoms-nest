import { UpdateBookDto } from './dto/update-book.dto';
import { CreateBookDto } from './dto/create-book.dto';
import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// import { DbService } from 'src/db/db.service';
import { Book } from './entities/book.entity';

function randomNum() {
    return Math.floor(Math.random() * 1000000);
}

@Injectable()
export class BookService {
    @InjectRepository(Book)
    private bookRepository: Repository<Book>;

    async list(name) {
        return await this.bookRepository.find(name);
    }

    // async findById(id: number) {
    //     const books: Book[] = await this.dbService.read();
    //     return books.find(book => book.id === id);
    // }

    async create(createBookDto: CreateBookDto) {
        return await this.bookRepository.save(createBookDto);
    }

    // async update(updateBookDto: UpdateBookDto) {
    //     const books: Book[] = await this.dbService.read();

    //     const foundBook = books.find(book => book.id === updateBookDto.id);
        
    //     if(!foundBook) {
    //         throw new BadRequestException('该图书不存在');
    //     }

    //     foundBook.author = updateBookDto.author;
    //     foundBook.cover = updateBookDto.cover;
    //     foundBook.description = updateBookDto.description;
    //     foundBook.name = updateBookDto.name;
        
    //     await this.dbService.write(books);
    //     return foundBook;
    // }

    // async delete(id: number) {
    //     const books: Book[] = await this.dbService.read();
    //     const index = books.findIndex(book => book.id === id);

    //     if(index !== -1) {
    //         books.splice(index, 1);
    //         await this.dbService.write(books);
    //     }
    // }
}
