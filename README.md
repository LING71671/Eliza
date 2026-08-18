<div align="center">
  <img width="1200" height="475" alt="Modern Eliza" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />

  # Modern Eliza

  A bilingual, browser-only recreation of the classic ELIZA chatbot.

  [Live demo](https://eliza-zeta.vercel.app) · [Background](#background) · [Run locally](#run-locally)
</div>

> [!NOTE]
> **本项目已归档 (Archived)**
>
> 🌟 **梦开始的地方**（Gemini 3 Pro + Google AI Studio + Vercel）
>
> 本项目已停止维护，仅作为早期探索与历史留念归档。This project is archived and no longer actively maintained.

## About

Modern Eliza recreates the 1966 ELIZA experience with English and Chinese responses. It uses deterministic pattern matching, keyword rules, and pronoun reflection rather than a large language model.

Everything runs in the browser: conversations are not sent to a model API or stored on a server.

## Features

- English and Chinese conversation flows.
- Rule-based responses with reflection and lightweight conversational memory.
- Responsive chat interface with typing feedback and conversation reset.
- Fully local processing with no API key or backend service.
- Automated component and interaction tests.

## Run locally

Requirements: Node.js and npm.

```bash
git clone https://github.com/LING71671/Eliza.git
cd Eliza
npm install
npm run dev
```

Open the local URL printed by Vite.

## Commands

```bash
npm run dev       # start the development server
npm run build     # create a production build
npm run preview   # preview the production build
npm test          # run the test suite
```

## Tech stack

- React 19
- TypeScript
- Vite
- Vitest and Testing Library

## Background

ELIZA was created by Joseph Weizenbaum at MIT in the 1960s. Its best-known script simulated a Rogerian psychotherapist by transforming user input through carefully designed rules. This project keeps that deliberately limited, transparent approach instead of replacing it with generative AI.

Modern Eliza is an educational recreation, not a mental-health service or professional advice tool.
