import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

async function ListContact() {
    const data = await sql`
    SELECT * FROM contact_form
    `;
    return data;
}

export async function GET() {
    try {
        return Response.json(await ListContact());
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}