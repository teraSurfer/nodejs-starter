import {Router} from 'express'
import {ApiController} from '../controllers/api.controller'

export class Api {

  public router: Router

  constructor(router: Router) {
    this.router = router
  }
  get routes() {
    this.router.route('/api')
        .get(ApiController.getallApis)
    return this.router
  }
}