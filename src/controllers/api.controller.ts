import {Request, Response} from 'express'

export class ApiController {
  public static getallApis (req: Request, res: Response):void {
    res.status(200).json([{
      'GET /api': 'All api list'
    }])
  }
}