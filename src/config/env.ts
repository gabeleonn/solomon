export default {
    mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/word-bsb-api',
    port: process.env.PORT || 3333,
    jwtSecret: process.env.JWT_SECRET || 'Mathew8:10'
  }