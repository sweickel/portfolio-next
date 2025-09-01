import { getBlogPostsMock, getProjectsMock } from '@/app/lib/mock/reponse';
import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function seedPosts() {
  await sql`
    CREATE TABLE IF NOT EXISTS posts (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      summary VARCHAR(255) NOT NULL,
      link TEXT NOT NULL,
      date DATE NOT NULL
    );
  `;

  const posts = await Promise.all(
    getBlogPostsMock.map(async (post) => {
      return sql`
        INSERT INTO posts (id, title, summary, link, date)
        VALUES (${post.id}, ${post.title}, ${post.summary}, ${post.link}, ${post.date})
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );

  return posts;
}

async function seedProjects() {
  await sql`
    CREATE TABLE IF NOT EXISTS projects (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      description VARCHAR(255) NOT NULL,
      link TEXT NOT NULL,
    );
  `;

  const projects = await Promise.all(
    getProjectsMock.map(async (project) => {
      return sql`
        INSERT INTO projects (id, title, description, link)
        VALUES (${project.id}, ${project.title}, ${project.description}, ${project.link})
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );

  return projects;
}

export async function GET() {
  try {
    return await sql.begin(() => [
      seedPosts(),
      seedProjects(),
    ]);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}