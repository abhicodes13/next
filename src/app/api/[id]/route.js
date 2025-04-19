import { run, User } from "../route";

export async function DELETE(req, { params }) {
  const { id } = await params;
  try {
    await run();
    User.findByIdAndDelete(id);
    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ erro: "Failed to delete user" }, { status: 500 });
  }
}
