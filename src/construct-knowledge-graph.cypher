MERGE (abk:Person {name: "Andreas Kollegger"})
MERGE (graphRagWithKG:Blog {title:"GraphRAG with a Knowledge Graph"})
MERGE (abk)-[:WROTE]->(graphRagWithKG)
SET graphRagWithKG.text = """
A blog about knowledge graphs.
"""