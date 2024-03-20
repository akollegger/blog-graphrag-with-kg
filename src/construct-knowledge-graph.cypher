WITH "https://raw.githubusercontent.com/akollegger/blog-graphrag-with-kg/main/data/blog.json" as blog_url
CALL apoc.load.json(blog_url) YIELD value
WITH value as json
MERGE (abk:Person {name: json.metadata.author})
MERGE (blog:Blog {url:blog_url})
  ON CREATE SET blog += json.metadata, blog.content = json.content

MERGE (abk)-[:WROTE]->(blog)

