import mockUsers from "./data";

export async function GET() {
  return new Response(JSON.stringify(mockUsers));
}

export async function POST(req) {
  const { name, email, role } = await req.json();
  let nextId = Math.max(...mockUsers.map((user) => user.id)) + 1;
  const newUser = {
    id: nextId++,
    name,
    email,
    role,
  };
  mockUsers.push(newUser);

  return new Response(JSON.stringify(newUser));
}
