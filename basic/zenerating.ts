// ================================================================ //
// Generating
// In this section we would generate the answer based on the query
// ================================================================ //

import { Chroma } from "@langchain/community/vectorstores/chroma";
import { OpenAIEmbeddings } from "@langchain/openai";

const embeddings = new OpenAIEmbeddings({
  model: "text-embedding-3-large",
});

const vectorStore = new Chroma(embeddings, {
  collectionName: "collectionName",
});

const filter = { source: "devscaleai" };

const retriever = vectorStore.asRetriever({
  filter: filter,
  k: 2,
});

const data = await retriever.invoke("What is the devscale");
console.log(data);
