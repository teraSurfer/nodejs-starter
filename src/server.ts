import app from './app'
import chalk from 'chalk'

const log = console.log

const port = process.env.PORT || 3000

export const server = app.listen(port, (err) => {
  if (err) {
    return log(chalk.red(err))
  }

  return log(chalk.green(`server is listening on ${port}`))
})