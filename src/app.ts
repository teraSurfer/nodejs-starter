import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as logger from 'morgan'
import * as cors from 'cors'
import {Api} from './routes/api.routes'

class App {
  public express

  constructor () {
    this.express = express()
    this.setConfig()
    this.mountRoutes()
  }

  private mountRoutes (): void {
    const router = express.Router()
    new Api(router).routes;
    router.get('/', (req, res) => {
      res.json({
        message: 'Hello World!'
      })
    })
    this.express.use('/', router)
  }

  private setConfig(): void {
    this.express.use(bodyParser.json())
    if(process.env.NODE_ENV !== 'test'){
      this.express.use(logger('combined'))
    }
    this.express.use(cors());
  }
}

export default new App().express