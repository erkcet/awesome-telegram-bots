# Awesome Telegram Bots [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated list of Telegram Bot resources — libraries, frameworks, tools, examples, and community bots.

The Telegram Bot ecosystem has evolved massively — Bot API 10.x, Mini Apps, payments, inline mode, web login widgets, and more. The previous community lists haven't been maintained since 2020. This is the updated, actively maintained replacement.

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
- [Maintainer](#maintainer)

---

## Official Resources

- [Telegram Bot API Documentation](https://core.telegram.org/bots/api) - Official API reference (always up to date).
- [Telegram Bot FAQ](https://core.telegram.org/bots/faq) - Official frequently asked questions.
- [Bot API Changelog](https://core.telegram.org/bots/api-changelog) - All API updates and new features.
- [@BotFather](https://t.me/botfather) - The official bot for creating and managing bots.
- [@BotSupport](https://t.me/botsupport) - Official Telegram bot support channel.
- [tdlib](https://github.com/tdlib/td) - Official cross-platform Telegram client library by Telegram.

## Libraries & SDKs

### Python

- [python-telegram-bot](https://github.com/python-telegram-bot/python-telegram-bot) - Feature-rich, async-first wrapper with conversation handlers and job queue. Most popular Python library.
- [aiogram](https://github.com/aiogram/aiogram) - Modern async framework built on aiohttp. Fast, middleware-based, great for large bots.
- [Telethon](https://github.com/LonamiWebs/Telethon) - Full MTProto client (not just Bot API). Access user-level features.
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
- [Nyagram](https://github.com/kaleert/nyagram) - Reactive, type-safe framework for Telegram bots based on Spring Boot 3 and Java 21.

### C# / .NET

- [Telegram.Bot](https://github.com/TelegramBots/Telegram.Bot) - .NET client library. Most popular C# option.
- [WTelegramClient](https://github.com/wiz0u/WTelegramClient) - Full MTProto client for .NET.
- [PRTelegramBot](https://github.com/prethink/PRTelegramBot) - High-level .NET framework for Telegram bots with routing, menus, middleware, DI, and step-by-step flows.

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
- [Cloudflare Workers Telegram Bot](https://github.com/cvzi/telegram-bot-cloudflare) - Run bots on Cloudflare Workers (free tier friendly).

## Mini Apps (Web Apps)

- [Telegram Mini Apps Documentation](https://core.telegram.org/bots/webapps) - Official docs for building Mini Apps.
- [Mini Apps SDK](https://github.com/Telegram-Mini-Apps/telegram-apps) - Official SDK and utilities for Telegram Mini Apps.

## Bot Hosting & Deployment

- [Railway](https://railway.app/) - Deploy from GitHub with a 30-day $5 trial and a $1 monthly entry plan.
- [Fly.io](https://fly.io/) - Deploy bots globally with persistent volumes and usage-based pricing.
- [Render](https://render.com/) - Auto-deploy from Git. Background workers for long-polling bots.
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
- [MyStars FaaS](https://mystars.tg/docs) - Buy Telegram Stars & Premium for any @username via API, paid in GRAM or USDT on TON.
- [Gategram](https://gategram.app) - Open-source Telegram Mini App for selling digital content with Stars payments and instant delivery.

## Media & File Bots

- [yt-dlp](https://github.com/yt-dlp/yt-dlp) - Download engine for 1000+ sites. The backbone of most media download bots.
- [gallery-dl](https://github.com/mikf/gallery-dl) - Download images from galleries and image hosting sites.
- [Stickerify](https://github.com/Stickerifier/Stickerify) - Telegram bot to convert media into the format required to be used as Telegram stickers.
- [Jellyfin Telegram Channel Sync](https://github.com/GeiserX/jellyfin-telegram-channel-sync) - Syncs Jellyfin user access with Telegram channel membership, automatically disabling accounts when members leave.
- [VideoDownloaderBot](https://github.com/Avazbek22/VideoDownloaderBot) - Self-hosted Telegram media downloader with video, original file, and MP3 delivery, plus Docker deployment and rollback.
- [LinkDownloaderBotForGroups](https://github.com/Avazbek22/LinkDownloaderBotForGroups) - Self-hosted Telegram group bot that turns shared video links into native posts with media reuse and automatic updates.

## Group Management

- [Rose Bot](https://t.me/MissRose_bot) - Popular group management bot with moderation, filters, and notes.
- [Combot](https://combot.org/) - Analytics and moderation for Telegram groups.
- [Group Butler](https://github.com/group-butler/GroupButler) - Open source Lua-based group management bot.
- [OmniGest](https://t.me/OmniGest_bot) - Free all-in-one group management bot with anti-spam, captcha, AI moderation, and custom commands.

## Utility Bots

- [@RateStickerBot](https://t.me/RateStickerBot) - Rate and discover stickers.
- [@Shieldy](https://t.me/shieldy_bot) - CAPTCHAs for group entry (anti-spam).
- [@ControllerBot](https://t.me/ControllerBot) - Schedule and manage channel posts.
- [@Combot](https://t.me/combot) - Group analytics and statistics.
- [Telegram Delay Channel Cloner](https://github.com/GeiserX/telegram-delay-channel-cloner) - Relays messages between Telegram channels with configurable delay and batch processing.
- [Paperless Telegram Bot](https://github.com/GeiserX/paperless-telegram-bot) - Manage Paperless-NGX documents entirely through Telegram: upload, search, tag, and organize.
- [@moreformbot](https://t.me/moreformbot) - Create forms and surveys, share them with anyone, and collect responses — all inside Telegram.
- [@RemoteJobRadarBot](https://t.me/RemoteJobRadarBot) - Search fresh remote jobs and get keyword alerts, aggregated from Remotive, Remote OK and Arbeitnow.
- [TG Sender](https://github.com/MrStricxn/tgsender) - CLI that sends a different post per Telegram group via MTProto (Telethon), with per-group cooldowns and premium emoji.
- [@ozvuchka_free_bot](https://t.me/ozvuchka_free_bot) - Free Russian text-to-speech: turns text into a voice message with lifelike AI voices, no limits, no ads.
- [Weight Goal Bot](https://github.com/IgorShadurin/weight-telegram-bot) - Open-source bot for photo-backed weight goals, reminders, and progress charts.
- [@Junction Bot](https://t.me/junction_bot) - Automates channel broadcasts, content aggregation, AI digests, and message copying.

## AI & LLM Bots

- [chatgpt-telegram-bot](https://github.com/karfly/chatgpt_telegram_bot) - ChatGPT integration with streaming, voice messages, and group support.
- [LangChain Telegram Bot](https://github.com/langchain-ai/langchain) - Build conversational AI bots with LangChain.
- [AskePub](https://github.com/GeiserX/AskePub) - Telegram bot that uses GPT-4o to generate AI study notes from ePub books.
- [Untether](https://github.com/littlebearapps/untether) - Self-hosted Telegram bridge for running AI coding agents remotely.

## Developer Tools

- [Postman Telegram Collection](https://www.postman.com/telegr/telegram-bot-api/) - Pre-built API collection for Postman.
- [telegram-bot-api (local server)](https://github.com/tdlib/telegram-bot-api) - Run the Bot API server locally for development.
- [Webhook Inspector](https://webhook.site/) - Debug webhook payloads from Telegram.
- [mitmproxy](https://mitmproxy.org/) - Inspect API calls between your bot and Telegram.

## Tutorials & Guides

- [From BotFather to Hello World (Python)](https://core.telegram.org/bots/tutorial) - Official beginner tutorial.
- [grammY Guide](https://grammy.dev/guide/) - Comprehensive guide for building bots with grammY (TypeScript/JS).
- [aiogram 3.x Documentation](https://docs.aiogram.dev/en/latest/) - Full docs for the aiogram Python framework.
- [Webhook vs Long Polling](https://core.telegram.org/bots/webhooks) - Official comparison and setup guide.
- [Deploy Telegram Bot to AWS Lambda](https://aws.amazon.com/blogs/compute/) - Serverless deployment walkthrough.

## Community

- [@BotTalk](https://t.me/bottalk) - English-speaking bot developer community.
- [Telegram Bot Developers (Reddit)](https://www.reddit.com/r/TelegramBots/) - Reddit community for bot developers.
- [grammY Chat](https://t.me/grammyjs) - grammY framework community.
- [python-telegram-bot Chat](https://t.me/pythontelegrambotgroup) - Community group for python-telegram-bot users.
- [aiogram Chat](https://t.me/aiogram) - International community for aiogram users.
- [Telegraf Discussions](https://github.com/telegraf/telegraf/discussions) - Community forum for Telegraf users.

---

## Maintainer

**Erkan**

- GitHub: [@erkcet](https://github.com/erkcet)
