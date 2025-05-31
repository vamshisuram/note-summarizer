
const response = await fetch('http://0.0.0.0:1234/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    messages: [
      {
        role: 'user',
        content: 'What is the capital of France?',
      },
    ]
  }),
});

const data = await response.json();
console.log(JSON.stringify(data, null, 2));