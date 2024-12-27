//! ================================================================ //
//! Data Collection
//! In this section, you need to collect data from the user.
//! It can be from PDF, Text, or Website
//! ================================================================ //

const contentFilePath = "./assets/devscaleai.txt";
const file = Bun.file(contentFilePath);
const content = await file.text();
// console.log(content);

//! ================================================================ //
//! Preprocessing
//! In this section, you need to preprocess the data.
//! Process the data for RAG is Important
//! The process could be Cleaning, and Tokenization
//! ================================================================ //
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

const splitter = new RecursiveCharacterTextSplitter({
  chunkSize: 600,
  chunkOverlap: 120,
});

const documents = await splitter.splitText(content);
// console.log(documents);

//! ================================================================ //
//! Vectorization
//! In this section, you need to vectorize the data.
//! we would use OpenAIEmbeddings
//! ================================================================ //
import { OpenAIEmbeddings } from "@langchain/openai";

const embeddings = new OpenAIEmbeddings({
  model: "text-embedding-3-large",
});

const placeholder = ["I love ice cream"];
const vectorizeDocuments = await embeddings.embedDocuments(placeholder);
console.log(vectorizeDocuments);

//! ================================================================ //
//! Indexing
//! In this section, you need to index the data.
//! we would use ChromaDB for the vector store
//! ================================================================ //
