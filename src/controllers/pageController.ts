import {Request, Response} from 'express'

export const home = (req:Request, res: Response) =>{

   res.send('Home do Controller');
}

export const dogs = (req:Request, res: Response) =>{
    res.send('Dogs do Controller');
    //res.render('pages/page');
}

export const cats = (req:Request, res: Response) =>{
    res.send('Cats do Controller');
    //res.render('pages/page');
}

export const fishes = (req:Request, res: Response) =>{
    res.send('Fishes do Controller');
    //res.render('pages/page');
}