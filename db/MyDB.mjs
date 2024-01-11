import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

function MyMongoDB() {
  const myDB = {};
  const connectionString = process.env.URI;
  const DB_NAME = "medication_reminder";
  const USER_COLLECTION = "Users";
  console.log("Connection String:", connectionString);
  // function to authenticate users
  myDB.authenticate = async (inputData) => {
    let client;
    try {
      client = new MongoClient(connectionString);
      // ensure client properly connected before performing any operations
      await client.connect();

      const db = client.db(DB_NAME);
      const usersCollection = db.collection(USER_COLLECTION);

      // findOne method
      // 1-10: use await to wait for promise to resolve
      const user = await usersCollection.findOne({ email: inputData.email });

      // user does exists in db, now check to see if passwords match
      // use === for strict equality comparison
      if (user && user.password === inputData.password) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("authentication error:", error.message);
      return false;
    } finally {
      client.close();
    }
  };

  // register new users
  myDB.registerUser = async (newUser) => {
    let client;
    try {
      client = new MongoClient(connectionString);
      const db = client.db(DB_NAME);
      const usersCollection = db.collection(USER_COLLECTION);
      // console.log(newUser);

      // 1-9: check if user already exists
      //-- check is not working properly
      // issue: maybe resolved
      const userExist = await usersCollection.findOne({ email: newUser.email });
      if (userExist) {
        console.error("User already exist!");
        return false;
      }

      const result = await usersCollection.insertOne({
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        password: newUser.password,
      });
      return true;
    } catch (error) {
      console.error("Register error", error.message);
      return false;
    } finally {
      client.close();
    }
  };

  return myDB;
}

export default MyMongoDB();
