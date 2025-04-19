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

const User = mongoose.models.users || mongoose.model("users", userSchema);

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

export async function DELETE(req, { params }) {
  const { id } = await params;
  try {
    User.findByIdAndDelete(id);
    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ erro: "Failed to delete user" }, { status: 500 });
  }
}
