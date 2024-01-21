import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

function MyDatabase() {
  const myDB = {};

  // uri
  const uri = process.env.URI;

  // create new client
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  // get user
  myDB.getUser = async (user) => {
    await client.connect();

    try {
      const resp = await client
        .db("Medication-Reminder")
        .collection("users")
        .findOne({ email: user.email });

      if (!resp) {
        await myDB.createUser(user);
      }
      return true;
    } catch (err) {
      console.error("error", err);
    } finally {
      await client.close();
    }
  };

  // authenticate user
  myDB.authenticate = async (user) => {
    await client.connect();

    try {
      const resp = await client
        .db("Medication-Reminder")
        .collection("users")
        .findOne({ email: user.email });

      if (resp && resp.password === user.password) {
        return true;
      }

      return false; // error authenticating
    } catch (err) {
      console.error("error", err);
    } finally {
      await client.close();
    }
  };

  // create user
  myDB.createUser = async (user) => {
    await client.connect();

    try {
      await client.db("Medication-Reminder").collection("users").insertOne({
        email: user.email,
        password: user.password,
        firstname: user.firstname,
        lastname: user.lastname,
      });

      return true;
    } catch (err) {
      console.error("error", err);
    } finally {
      await client.close();
    }
  };

  return myDB;
}

export default MyDatabase();
