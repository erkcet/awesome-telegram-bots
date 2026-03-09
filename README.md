# Awesome Telegram Bots [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated list of Telegram Bot resources — libraries, frameworks, tools, examples, and community bots.

The Telegram Bot ecosystem has evolved massively — Bot API 8.0+, Mini Apps, payments, inline mode, web login widgets, and more. The previous community lists haven't been maintained since 2020. This is the updated, actively maintained replacement.

**Contributions welcome!** Read the [contribution guidelines](CONTRIBUTING.md) before submitting a PR.

---

## Contents

- [Official Resources](#official-resources)
- [Libraries & SDKs](#libraries--sdks)
  - [Python](#python)
  - [JavaScript / TypeScript](#javascript--typescript)
  - [Go](#go)
  - [Rust](#rust)
  - [PHP](#php)
  - [Java / Kotlin](#java--kotlin)
  - [C# / .NET](#c--net)
  - [Ruby](#ruby)
  - [Other Languages](#other-languages)
- [Frameworks & Boilerplates](#frameworks--boilerplates)
- [Mini Apps (Web Apps)](#mini-apps-web-apps)
- [Bot Hosting & Deployment](#bot-hosting--deployment)
- [Inline Bots](#inline-bots)
- [Payments & Commerce](#payments--commerce)
- [Media & File Bots](#media--file-bots)
- [Group Management](#group-management)
- [Utility Bots](#utility-bots)
- [AI & LLM Bots](#ai--llm-bots)
- [Developer Tools](#developer-tools)
- [Tutorials & Guides](#tutorials--guides)
- [Community](#community)

---

## Official Resources

- [Telegram Bot API Documentation](https://core.telegram.org/bots/api) - Official API reference (always up to date).
- [Telegram Bot FAQ](https://core.telegram.org/bots/faq) - Official frequently asked questions.
- [Bot API Changelog](https://core.telegram.org/bots/api-changelog) - All API updates and new features.
- [Telegram Mini Apps Docs](https://core.telegram.org/bots/webapps) - Official Web App / Mini App documentation.
- [Telegram Bot Payments](https://core.telegram.org/bots/payments) - Payment integration guide.
- [@BotFather](https://t.me/botfather) - The official bot for creating and managing bots.
- [@BotSupport](https://t.me/botsupport) - Official Telegram bot support channel.
- [tdlib](https://github.com/tdlib/td) - Official cross-platform Telegram client library by Telegram.

## Libraries & SDKs

### Python

- [python-telegram-bot](https://github.com/python-telegram-bot/python-telegram-bot) - Feature-rich, async-first wrapper with conversation handlers and job queue. Most popular Python library.
- [aiogram](https://github.com/aiogram/aiogram) - Modern async framework built on aiohttp. Fast, middleware-based, great for large bots.
- [Telethon](https://github.com/LonamiWebs/Telethon) - Full MTProto client (not just Bot API). Access user-level features.
- [Pyrogram](https://github.com/pyrogram/pyrogram) - MTProto client and Bot API wrapper. Elegant API, async support.
- [telebot (pyTelegramBotAPI)](https://github.com/eternnoir/pyTelegramBotAPI) - Simple, synchronous library. Good for small bots and beginners.

### JavaScript / TypeScript

- [grammY](https://github.com/grammyjs/grammY) - Modern, TypeScript-first framework. Plugin ecosystem, Deno support, excellent docs.
- [Telegraf](https://github.com/telegraf/telegraf) - Popular Node.js framework with middleware architecture.
- [node-telegram-bot-api](https://github.com/yagop/node-telegram-bot-api) - Lightweight, promise-based. Good for simple bots.
- [puregram](https://github.com/nitreojs/puregram) - TypeScript library with powerful context and plugin system.

### Go

- [telebot](https://github.com/tucnak/telebot) - Clean API, middleware support, inline mode. Most popular Go library.
- [telegram-bot-api](https://github.com/go-telegram-bot-api/telegram-bot-api) - Straightforward Go bindings for the Bot API.
- [gotd](https://github.com/gotd/td) - Full MTProto implementation in Go.

### Rust

- [teloxide](https://github.com/teloxide/teloxide) - Type-safe, async Rust framework with dialogue management.
- [frankenstein](https://github.com/ayrat555/frankenstein) - Rust client with async and blocking modes.

### PHP

- [Telegram Bot SDK](https://github.com/irazasyed/telegram-bot-sdk) - Laravel-friendly SDK with built-in support for commands.
- [Nutgram](https://github.com/nutgram/nutgram) - Modern PHP framework with middleware, conversations, and testing tools.
- [BotMan](https://github.com/botman/botman) - Multi-platform bot framework (Telegram, Slack, Facebook, etc.).

### Java / Kotlin

- [TelegramBots](https://github.com/rubenlagus/TelegramBots) - Java library with Spring Boot integration.
- [kotlin-telegram-bot](https://github.com/kotlin-telegram-bot/kotlin-telegram-bot) - Kotlin DSL for building bots.
- [tgbotapi](https://github.com/InsanusMokrassar/ktgbotapi) - Multiplatform Kotlin library with coroutine support.

### C# / .NET

- [Telegram.Bot](https://github.com/TelegramBots/Telegram.Bot) - .NET client library. Most popular C# option.
- [WTelegramClient](https://github.com/wiz0u/WTelegramClient) - Full MTProto client for .NET.

### Ruby

- [telegram-bot-ruby](https://github.com/atipugin/telegram-bot-ruby) - Simple Ruby wrapper for the Bot API.
- [telegram-bot](https://github.com/telegram-bot-rb/telegram-bot) - Async Ruby client with Rails integration.

### Other Languages

- [Elixir — ExGram](https://github.com/rockneurotiko/ex_gram) - Elixir framework for Telegram bots.
- [Dart — TeleDart](https://github.com/DinoLeung/TeleDart) - Dart library for Telegram Bot API.
- [Swift — telegram-vapor-bot](https://github.com/nerzh/telegram-vapor-bot) - Telegram bot framework for Swift Vapor.
- [Scala — telegramium](https://github.com/apimorphism/telegramium) - Pure functional Telegram Bot API for Scala.
- [Haskell — telegram-bot-simple](https://github.com/fizruk/telegram-bot-simple) - Easy-to-use Haskell library.

## Frameworks & Boilerplates

- [grammY Runner](https://github.com/grammyjs/runner) - Scale grammY bots with concurrent update processing.
- [Serverless Telegram Bot (AWS)](https://github.com/franalgaba/serverless-telegram-bot) - Template for running bots on AWS Lambda.
- [Vercel Telegram Bot](https://github.com/vercel-community/telegram-bot) - Deploy bots to Vercel as serverless functions.
- [Cloudflare Workers Telegram Bot](https://github.com/cvzi/telegram-bot-cloudflare) - Run bots on Cloudflare Workers (free tier friendly).

## Mini Apps (Web Apps)

- [Telegram Mini Apps Documentation](https://core.telegram.org/bots/webapps) - Official docs for building Mini Apps.
- [Mini Apps SDK](https://github.com/Telegram-Mini-Apps/telegram-apps) - Official SDK and utilities for Telegram Mini Apps.
- [twa-dev/sdk](https://github.com/AweAwe17/twa-dev-sdk) - Community React hooks and utilities for TWA development.
- [Mini App React Template](https://github.com/nicegram/nicegram-mini-app-template) - React + TypeScript starter for Mini Apps.

## Bot Hosting & Deployment

- [Railway](https://railway.app/) - Simple deployment from GitHub. Free tier with 500 hours/month.
- [Fly.io](https://fly.io/) - Deploy bots globally with persistent volumes. Free tier available.
- [Render](https://render.com/) - Auto-deploy from Git. Background workers for long-polling bots.
- [Deta Space](https://deta.space/) - Free cloud hosting, good for small bots.
- [Oracle Cloud Free Tier](https://www.oracle.com/cloud/free/) - Always-free ARM instances (4 OCPU, 24 GB RAM) — great for bots.
- [PythonAnywhere](https://www.pythonanywhere.com/) - Free tier for Python bots (webhook mode only).
- [Self-hosted with PM2](https://pm2.keymetrics.io/) - Process manager for Node.js bots on your own server.
- [Self-hosted with systemd](https://www.freedesktop.org/software/systemd/man/systemd.service.html) - Run bots as Linux services.

## Inline Bots

- [@gif](https://t.me/gif) - Search and share GIFs inline.
- [@pic](https://t.me/pic) - Search and share images inline.
- [@vid](https://t.me/vid) - Search and share videos inline.
- [@wiki](https://t.me/wiki) - Search Wikipedia inline.
- [@sticker](https://t.me/sticker) - Find stickers inline.
- [@vote](https://t.me/vote) - Create polls inline.

## Payments & Commerce

- [Telegram Payments Guide](https://core.telegram.org/bots/payments) - Official payment integration documentation.
- [Telegram Stars](https://core.telegram.org/bots/payments-stars) - Telegram's digital currency for in-bot purchases.
- [Stripe Provider](https://core.telegram.org/bots/payments#supported-payment-providers) - Accept credit card payments via Stripe.
- [TON Connect](https://docs.ton.org/develop/dapps/ton-connect/overview) - Connect TON wallets to your bot for crypto payments.

## Media & File Bots

- [yt-dlp](https://github.com/yt-dlp/yt-dlp) - Download engine for 1000+ sites. The backbone of most media download bots.
- [gallery-dl](https://github.com/mikf/gallery-dl) - Download images from galleries and image hosting sites.
- [Telegram Bot API Server](https://github.com/tdlib/telegram-bot-api) - Self-hosted Bot API server for 2 GB file uploads (vs 50 MB default).
- [Stickerify](https://github.com/Stickerifier/Stickerify) - Telegram bot to convert media into the format required to be used as Telegram stickers.

## Group Management

- [Rose Bot](https://t.me/MissRose_bot) - Popular group management bot with moderation, filters, and notes.
- [Combot](https://combot.org/) - Analytics and moderation for Telegram groups.
- [Group Butler](https://github.com/group-butler/GroupButler) - Open source Lua-based group management bot.
- [Shield Bot](https://t.me/ShieldBOTt) - Anti-spam and verification for groups.

## Utility Bots

- [@RateStickerBot](https://t.me/RateStickerBot) - Rate and discover stickers.
- [@Shieldy](https://t.me/shaboroshka_bot) - CAPTCHAs for group entry (anti-spam).
- [@ControllerBot](https://t.me/ControllerBot) - Schedule and manage channel posts.
- [@Combot](https://t.me/comaboroshka_bot) - Group analytics and statistics.
- [Paperless Telegram Bot](https://github.com/GeiserX/paperless-telegram-bot) - Manage Paperless-NGX documents entirely through Telegram: upload, search, tag, and organize.

## AI & LLM Bots

- [chatgpt-telegram-bot](https://github.com/karfly/chatgpt_telegram_bot) - ChatGPT integration with streaming, voice messages, and group support.
- [claude-telegram-bot](https://github.com/KTrain5169/claude-telegram-bot) - Claude API integration for Telegram.
- [Gemini Telegram Bot](https://github.com/nichuanfang/gemini-telegram-bot) - Google Gemini integration.
- [LangChain Telegram Bot](https://github.com/langchain-ai/langchain) - Build conversational AI bots with LangChain.

## Developer Tools

- [Telegram Bot API Tester](https://t.me/botfather) - Test API calls directly via BotFather.
- [Postman Telegram Collection](https://www.postman.com/telegr/telegram-bot-api/) - Pre-built API collection for Postman.
- [telegram-bot-api (local server)](https://github.com/tdlib/telegram-bot-api) - Run the Bot API server locally for development.
- [Webhook Inspector](https://webhook.site/) - Debug webhook payloads from Telegram.
- [mitmproxy](https://mitmproxy.org/) - Inspect API calls between your bot and Telegram.

## Tutorials & Guides

- [From BotFather to Hello World (Python)](https://core.telegram.org/bots/tutorial) - Official beginner tutorial.
- [grammY Guide](https://grammy.dev/guide/) - Comprehensive guide for building bots with grammY (TypeScript/JS).
- [aiogram 3.x Documentation](https://docs.aiogram.dev/en/latest/) - Full docs for the aiogram Python framework.
- [Building Telegram Mini Apps](https://core.telegram.org/bots/webapps) - Official Mini Apps development guide.
- [Webhook vs Long Polling](https://core.telegram.org/bots/webhooks) - Official comparison and setup guide.
- [Deploy Telegram Bot to AWS Lambda](https://aws.amazon.com/blogs/compute/) - Serverless deployment walkthrough.

## Community

- [@BotTalk](https://t.me/bottalk) - English-speaking bot developer community.
- [Telegram Bot Developers (Reddit)](https://www.reddit.com/r/TelegramBots/) - Reddit community for bot developers.
- [grammY Chat](https://t.me/grammyjs) - grammY framework community.
- [python-telegram-bot Chat](https://t.me/pythontelegrambotgroup) - python-telegram-bot community group.
- [aiogram Chat](https://t.me/aiogram) - aiogram framework community.
- [Telegraf Chat](https://t.me/telegrafjs) - Telegraf.js community.

---

## Contributing

Contributions are welcome! Please read the [contribution guidelines](CONTRIBUTING.md) first.

## Maintainer

**Erkan**

- GitHub: [@erkcet](https://github.com/erkcet)

## License

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, the maintainer has waived all copyright and related rights to this work.
