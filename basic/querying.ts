// ================================================================ //
// Querying
// In this section, you need to query the data
// This process called retrieval
// ================================================================ //

import { Chroma } from "@langchain/community/vectorstores/chroma";
import { OpenAIEmbeddings } from "@langchain/openai";

const embeddings = new OpenAIEmbeddings({
  model: "text-embedding-3-large",
});

const vectorStore = new Chroma(embeddings, {
  collectionName: "collectionName",
});

const similaritySearchResults = await vectorStore.similaritySearchWithScore("What is the devscale", 2);
console.log(similaritySearchResults);
