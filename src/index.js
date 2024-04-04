import dotenv from "dotenv";

import connectDB from "./db/index.js";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 9000, () => {
      console.log(`Server is running at port : ${process.env.PORT}`);
    });
  })

  .catch((err) => {
    console.log("MNGO DB connection failed !!! ", err);
  });

app.on("error", (err) => {
  console.error("Server error:", err);
  process.exit(1); // Exit the process with a non-zero exit code
});

/**
 (async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    app.on("error", () => {
      console.log("Error: ", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Error: ", error);
    throw err;
  }
})();
*/
