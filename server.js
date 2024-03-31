const app = require('./src/app');
const app_config = require('./src/configs/app.config');

const PORT =  app_config.port || 3056;
const ENV = app_config.environment || 'development';

const server = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT} in ${ENV} mode`);
});

process.on('SIGINT', () => {
  server.close(() => {
    console.log('Process terminated');
  });
});