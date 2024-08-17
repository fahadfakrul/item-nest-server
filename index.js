const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config()
const port = process.env.PORT || 5000;

// Middleware
app.use(cors())
app.use(express.json())


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.cnltwph.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

   const productCollection = client.db("itemsNestDB").collection("products");


   app.get('/products', async (req, res) => {
    const searchQuery = req.query.search || '';
        const brandQuery = Array.isArray(req.query.brand) ? req.query.brand : req.query.brand ? [req.query.brand] : [];
        const categoryQuery = Array.isArray(req.query.category) ? req.query.category : req.query.category ? [req.query.category] : [];
        const minPrice = parseFloat(req.query.minPrice) || 0;
        const maxPrice = parseFloat(req.query.maxPrice) || 1500;

        const query = {
            ...(searchQuery && { productName: { $regex: searchQuery, $options: 'i' } }),
            ...(brandQuery.length > 0 && { brandName: { $in: brandQuery } }),
            ...(categoryQuery.length > 0 && { category: { $in: categoryQuery } }),
            price: { $gte: minPrice, $lte: maxPrice },
        };

        const result = await productCollection.find(query).toArray();
        res.send(result);
   })
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
   res.send('ItemNest server is running ')
})

app.listen(port, () => {
    console.log(`ItemNest server running on port ${port}`)
})