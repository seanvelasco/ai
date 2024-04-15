# Slater - your virtual foreign language friend

Conversational, context-aware, and multi-modal chatbot specialized in carrying basic conversations in foreign languages.

[Submission](https://dev.to/seanvelasco) to the [Cloudflare AI Challenge](https://dev.to/devteam/join-us-for-the-cloudflare-ai-challenge-3000-in-prizes-5f99).

Please check out the [demo](https://slater.sean.app).

## Problem and pain points

I want to learn Mandarin, but I don't have a Mandarin-speaking friend to practice with. I'm also not confident enough with my foreign language skills to speak with a Mandarin-speaking person online.

Duolingo doesn't teach me how to write or speak the things I want to express. For example, I want to say _This is my favorite coffee shop_. I know how to construct the sentence, but I don't know the Mandarin word for _favorite_. So, I end up saying - _Zhe tiao wo de **favorite** kafei guan_.

Google Translate lacks certain language nuances. It also doesn't keep track of the things I looked up.

Keeping notes of the words I learn takes effort - I have to write down the English word, hanzi, pinyin, and how it is used in a sentence.

## Develop or run locally

Clone the project

```bash
git clone https://github.com/seanvelasco/slater
```

Install dependencies

```bash
npm install
```

Populate .env with your API keys

```YAML
API=YOUR_API_KEY
```

Run the program

```bash
npm run dev
```

## Stack

#### Frontend

-   Solid.js

#### Backend

-   Cloudflare Workers

#### Models

-   Meta Llama 2 (conversations)
-   Meta M2M-100 1.2B (translations)
-   OpenAI Whisper (speech-to-text)

#### APIs

-   Google Text-to-Speech

## Notes from the author

This is my first time building an LLM app. Please let me know if there are things I should fix or improve - sean@sean.app. I appreciate all feedback!
