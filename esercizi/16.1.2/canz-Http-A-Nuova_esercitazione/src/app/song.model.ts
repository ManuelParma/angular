import { Album } from './album.model';

export class Song
{
    constructor(
        public album : Album,
        public data_uscita: Date,
        public durata : number,
        public title : String,
        public colorClass: string = "text-body",
    ) {}
    
}