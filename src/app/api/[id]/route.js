import { User } from "../route";
export async function DELETE(req, { params }) {
  const { id } = await params;
  try {
    User.findByIdAndDelete(id);
    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ erro: "Failed to delete user" }, { status: 500 });
  }
}
