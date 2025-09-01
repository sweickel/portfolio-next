import { getBlogPostsMock, getProjectsMock } from '@/app/lib/mock/reponse';
import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function seedPosts() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
    CREATE TABLE IF NOT EXISTS posts (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      summary VARCHAR(255) NOT NULL,
      link TEXT NOT NULL,
      date DATE NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
    );
  `;

  const posts = await Promise.all(
    getBlogPostsMock.map(async (post) => {
      return sql`
        INSERT INTO posts (title, summary, link, date)
        VALUES (${post.title}, ${post.summary}, ${post.link}, ${post.date})
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );

  return posts;
}

async function seedProjects() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
    CREATE TABLE IF NOT EXISTS projects (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      description VARCHAR(255) NOT NULL,
      link TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
    );
  `;

  const projects = await Promise.all(
    getProjectsMock.map(async (project) => {
      return sql`
        INSERT INTO projects (title, description, link)
        VALUES (${project.title}, ${project.description}, ${project.link})
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );

  return projects;
}

export async function GET() {
  try {
    await sql.begin(() => [
      seedPosts(),
      seedProjects(),
    ]);
    return Response.json({ message: "Seeding completed" }, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}