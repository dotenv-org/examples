class Client {
  constructor(apiKey) {
    this.apiKey = apiKey
  }

  report(err) {
    console.log(this.apiKey, err)
  }
}
export default new Client(process.env.API_KEY)
