const express = require('express');
const router = express.Router();

// Example API endpoint
router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API!' });
});

router.post('/summarizer', async (req, res) => {
  const response = await fetch(
    "http://localhost:1234/v1/chat/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: [
          {
            role: "user",
            content: `You are a helpful assistant. Summarize this passage: "${req.body.text}"`,
          },
        ],
      }),
    }
  );
  const data = await response.json();
  const val = data.choices[0].message.content;
  console.log("LLM response:", val);

  res.status(200).send({
    message: "LLM response",
    data: val,
  });
});

module.exports = router;
