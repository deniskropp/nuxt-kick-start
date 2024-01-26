import BardieTS from "bardie-ts";

const bard = new BardieTS();

const options = {
  ask: "Keep it simple... What is Google Bard?"
};

async function askQuestion() {
  try {
    const result = await bard.question(options);
    console.log(result.content);
  } catch (error: any) {
    console.error("Error:", error.message);
  }
};

askQuestion();