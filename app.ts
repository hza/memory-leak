import { Firestore } from '@google-cloud/firestore';
import express from 'express';

async function main() {
  const app = express()

  const firestore = new Firestore({
    projectId: "test",
    host: "localhost:8080",
    ssl: false
  });

  await firestore.collection('memory').doc("leak").set({ "leak": true });

  app.get('/', async (req, res) => {
    const doc = await firestore.collection('memory').doc("leak").get();
    res.send({ message: doc.data() });
  })

  app.listen(3000)
}

main()
