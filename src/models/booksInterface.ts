export interface Book{
    id:string;
    volumeInfo:{
        title:string;
        subtitle:string;
        authors:string[];
        description: string;
        imageLinks:{
            smallThumbnail:string;
            thumbnail:string;
        }
    }
    searchInfo:{
        textSnippet:string;
    }
}

export interface ApiResponce {
    items:Book[];
}