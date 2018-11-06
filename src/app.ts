import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as logger from 'morgan'
import * as cors from 'cors'
import chalk from 'chalk'
import {Api} from './routes/api.routes'

class App {
  public express

  constructor () {
    console.log(chalk.blue('starting express..'))
    this.express = express()
    console.log(chalk.blue('setting configurations..'))
    this.setConfig()
    console.log(chalk.blue('mounting routes..'))
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

  /*
  mount database orm here.
  */
}

export default new App().express