import { connect } from "mongoose";

export const startConnection = async () => {
  try {
    const db = await connect(
      "mongodb+srv://admin:Kl1BtIY9e4Pez2CL@cluster0.2pvbv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    );
    console.log(db.connection.name);
  } catch (error) {
    console.error(error);
  }
};
