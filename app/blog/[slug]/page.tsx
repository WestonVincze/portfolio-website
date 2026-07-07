import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { LinedPaper } from "@components/LinedPaper";
import { Polaroid } from "@components/Polaroid";
import { PolaroidRow } from "@components/PolaroidRow";
import { Container } from "@components/Container";

const POSTS_DIR = path.join(process.cwd(), "public", "posts");

const mdxComponents = { LinedPaper, Polaroid, PolaroidRow };

export async function generateStaticParams() {
  const files = await fs.readdir(POSTS_DIR);
  return files
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => ({ slug: f.replace(/\.mdx$/, "") }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const raw = await fs.readFile(path.join(POSTS_DIR, `${slug}.mdx`), "utf8");
  const { content, data } = matter(raw);

  return (
    <Container>
      <article>
        <header>
          <h1>{data.title}</h1>
          <time dateTime={data.date}>{data.date}</time>
        </header>
        <MDXRemote source={content} components={mdxComponents} />
      </article>
    </Container>
  );
}
