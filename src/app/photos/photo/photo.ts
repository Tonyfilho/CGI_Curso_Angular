

export interface PhotoInteface{
//pegamos todos os Objetos que a API retorna, e com eles criaremos nossa inteface
//nossa interface diz qual a forma do nosso OBJETO, com isto teremos 
//um autocomplite e evitatemos erros
id:number;
postDate:Date;
url:string;
description:string;
allowComments:boolean;
likes:number;
comments:number;
userId:number;


}// fim da interface