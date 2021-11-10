export default {
    mongoUrl: process.env.MONGO_URL || 'mongodb://root:root@localhost:27017',
    port: process.env.PORT || 3333,
    jwtSecret: process.env.JWT_SECRET || 'Mathew8:10'
  }