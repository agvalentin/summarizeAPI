# Text Summarization API

A Node.js API that uses HuggingFace's DistilBART model to generate summaries of text.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file with:
```env
PORT=3000
HUGGINGFACE_API_KEY=your_huggingface_token
```

3. Get your HuggingFace API token:
- Go to [HuggingFace Tokens](https://huggingface.co/settings/tokens)
- Create new token with 'inference-api' permission
- Copy token and paste it in `.env` file

## Usage

Start the server:
```bash
node server.js
```

Make a POST request to summarize text:
```bash
curl -X POST http://localhost:3000/api/summarize \
  -H "Content-Type: application/json" \
  -d '{"text": "Your text to summarize here"}'
```

## API Endpoints

- `POST /api/summarize`
  - Body: `{ "text": "string" }`
  - Returns: `{ "summary": "string" }`

## Technologies
- Node.js
- Express
- HuggingFace Inference API (DistilBART model)
