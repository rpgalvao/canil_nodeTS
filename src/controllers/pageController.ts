import {Request, Response} from 'express';

export const home = (req: Request, res: Response) => {
    res.send('Página home do Controller!');
    //res.send('pages/page');
};

export const dogs = (req: Request, res: Response) => {
    //res.send('pages/page');
};

export const cats = (req: Request, res: Response) => {
    //res.send('pages/page');
};

export const fishes = (req: Request, res: Response) => {
    //res.send('pages/page');
};