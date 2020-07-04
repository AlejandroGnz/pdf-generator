const { Kafka } = require('kafkajs');
const { buildPdf } = require('../controllers/render-pdf');

const kafka = new Kafka({
  clientId: 'kafka-render-pdf-app',
  brokers: ['localhost:9092', 'localhost:9092'],
});

const setupConsumer = async () => {
  const consumer = kafka.consumer({ groupId: 'render-pdf-app' });

  await consumer.connect();
  await consumer.subscribe({ topic: 'order-create' });
  await consumer.run({
    eachMessage: async ({ message }) => {
      const value = message.value.toString();
      const data = JSON.parse(value);

      await buildPdf(data);
    },
  });
};

module.exports = {
  setupConsumer,
};
