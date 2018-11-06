import app from './app'

const port = process.env.PORT || 3000

export const server = app.listen(port, (err) => {
  if (err) {
    return console.log(err)
  }

  return console.log(`server is listening on ${port}`)
})