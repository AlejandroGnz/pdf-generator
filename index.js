const { app } = require('./src/server');
const { setupConsumer } = require('./src/consumers/orders-consumer');

const { PORT = 3000 } = process.env;

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT} 🚀`);

  await setupConsumer();
});
