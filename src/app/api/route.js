import mongoose from "mongoose";

export async function run() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    console.log(error);
  }
}
run();

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

export const User =
  mongoose.models.users || mongoose.model("users", userSchema);

export async function GET() {
  const allUsers = await User.find();
  //const username = allUsers.map((user) => user.name);
  return new Response(JSON.stringify(allUsers));
}

export async function POST(req) {
  const { name, email } = await req.json();
  const newUser = await User.create({ name, email });

  return new Response(JSON.stringify(newUser));
}
