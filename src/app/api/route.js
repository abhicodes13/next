import mongoose from "mongoose";

async function run() {
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

const user = mongoose.models.users;

export async function GET() {
  const allUsers = await user.find();
  //const username = allUsers.map((user) => user.name);
  return new Response(JSON.stringify(allUsers));
}

export async function POST(req) {
  const { name, email } = await req.json();
  const newUser = await user.create({ name, email });

  return new Response(JSON.stringify(newUser));
}
