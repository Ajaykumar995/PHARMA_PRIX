import mongoose from "mongoose";
import dotenv from "dotenv";


import dns from "dns";
dns.setServers(["8.8.8.8","1.1.1.1"]);
dotenv.config();

const uri = "mongodb+srv://pajaykumar9955_db_user:4yieOnXR9jE98Ok4@cluster0.eednaci.mongodb.net/?appName=Cluster0";

mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });