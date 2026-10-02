# Awesome Telegram Bots [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated list of Telegram Bot resources: libraries, frameworks, tools, examples, and community bots.

The Telegram Bot ecosystem has evolved massively: Bot API 10.x, Mini Apps, payments, inline mode, web login widgets, and more. The previous community lists have not been maintained since 2020. This is the updated, actively maintained replacement.

**Contributions welcome!** Read the [contribution guidelines](CONTRIBUTING.md) before submitting a PR.

---

## Contents

- [Official Resources](#official-resources)
- [Libraries and SDKs](#libraries--sdks)
  - [Python](#python)
  - [JavaScript / TypeScript](#javascript--typescript)
  - [Go](#go)
  - [Rust](#rust)
  - [PHP](#php)
  - [Java / Kotlin](#java--kotlin)
  - [C# / .NET](#c--net)
  - [Ruby](#ruby)
  - [Other Languages](#other-languages)
- [Frameworks and Boilerplates](#frameworks--boilerplates)
- [Mini Apps (Web Apps)](#mini-apps-web-apps)
- [Bot Hosting and Deployment](#bot-hosting--deployment)
- [Inline Bots](#inline-bots)
- [Payments and Commerce](#payments--commerce)
- [Media and File Bots](#media--file-bots)
- [Group Management](#group-management)
- [Utility Bots](#utility-bots)
- [AI and LLM Bots](#ai--llm-bots)
- [Developer Tools](#developer-tools)
- [Tutorials and Guides](#tutorials--guides)
- [Community](#community)
- [Maintainer](#maintainer)

---

## Official Resources

- [Telegram Bot API Documentation](https://core.telegram.org/bots/api) - Official API reference, always up to date.
- [Telegram Bot FAQ](https://core.telegram.org/bots/faq) - Official frequently asked questions.
- [Bot API Changelog](https://core.telegram.org/bots/api-changelog) - All API updates and new features.
- [BotFather](https://t.me/botfather) - The official bot for creating and managing bots.
- [BotSupport](https://t.me/botsupport) - Official Telegram bot support channel.
- [tdlib](https://github.com/tdlib/td) - Official cross-platform Telegram client library by Telegram.

## Libraries and SDKs

### Python

- [python-telegram-bot](https://github.com/python-telegram-bot/python-telegram-bot) - Feature-rich, async-first wrapper with conversation handlers and job queue.
- [aiogram](https://github.com/aiogram/aiogram) - Modern async framework built on aiohttp.
- [Telethon](https://github.com/LonamiWebs/Telethon) - Full MTProto client, not just Bot API.
- [telebot (pyTelegramBotAPI)](https://github.com/eternnoir/pyTelegramBotAPI) - Simple, synchronous library, good for small bots.

### JavaScript / TypeScript

- [grammY](https://github.com/grammyjs/grammY) - Modern, TypeScript-first framework with plugin ecosystem and Deno support.
- [Telegraf](https://github.com/telegraf/telegraf) - Popular Node.js framework with middleware architecture.
- [node-telegram-bot-api](https://github.com/yagop/node-telegram-bot-api) - Lightweight, promise-based library.
- [puregram](https://github.com/nitreojs/puregram) - TypeScript library with powerful context and plugin system.

### Go

- [telebot](https://github.com/tucnak/telebot) - Clean API, middleware support, inline mode.
- [telegram-bot-api](https://github.com/go-telegram-bot-api/telegram-bot-api) - Straightforward Go bindings for the Bot API.
- [gotd](https://github.com/gotd/td) - Full MTProto implementation in Go.

### Rust

- [teloxide](https://github.com/teloxide/teloxide) - Type-safe, async Rust framework with dialogue management.
- [frankenstein](https://github.com/ayrat555/frankenstein) - Rust client with async and blocking modes.

### PHP

- [Telegram Bot SDK](https://github.com/irazasyed/telegram-bot-sdk) - Laravel-friendly SDK with built-in command support.
- [Nutgram](https://github.com/nutgram/nutgram) - Modern PHP framework with middleware, conversations, and testing tools.
- [BotMan](https://github.com/botman/botman) - Multi-platform bot framework.

### Java / Kotlin

- [TelegramBots](https://github.com/rubenlagus/TelegramBots) - Java library with Spring Boot integration.
- [kotlin-telegram-bot](https://github.com/kotlin-telegram-bot/kotlin-telegram-bot) - Kotlin DSL for building bots.
- [tgbotapi](https://github.com/InsanusMokrassar/ktgbotapi) - Multiplatform Kotlin library with coroutine support.
- [Nyagram](https://github.com/kaleert/nyagram) - Reactive, type-safe framework based on Spring Boot 3 and Java 21.

### C# / .NET

- [Telegram.Bot](https://github.com/TelegramBots/Telegram.Bot) - .NET client library, most popular C# option.
- [WTelegramClient](https://github.com/wiz0u/WTelegramClient) - Full MTProto client for .NET.

### Ruby

- [telegram-bot-ruby](https://github.com/atipugin/telegram-bot-ruby) - Simple Ruby wrapper for the Bot API.
- [telegram-bot](https://github.com/telegram-bot-rb/telegram-bot) - Async Ruby client with Rails integration.

### Other Languages

- [Elixir, ExGram](https://github.com/rockneurotiko/ex_gram) - Elixir framework for Telegram bots.
- [Dart, TeleDart](https://github.com/DinoLeung/TeleDart) - Dart library for Telegram Bot API.
- [Swift, telegram-vapor-bot](https://github.com/nerzh/telegram-vapor-bot) - Telegram bot framework for Swift Vapor.
- [Scala, telegramium](https://github.com/apimorphism/telegramium) - Pure functional Telegram Bot API for Scala.
- [Haskell, telegram-bot-simple](https://github.com/fizruk/telegram-bot-simple) - Easy-to-use Haskell library.

## Frameworks and Boilerplates

- [grammY Runner](https://github.com/grammyjs/runner) - Scale grammY bots with concurrent update processing.
- [Cloudflare Workers Telegram Bot](https://github.com/cvzi/telegram-bot-cloudflare) - Run bots on Cloudflare Workers.

## Mini Apps (Web Apps)

- [Telegram Mini Apps Documentation](https://core.telegram.org/bots/webapps) - Official docs for building Mini Apps.
- [Mini Apps SDK](https://github.com/Telegram-Mini-Apps/telegram-apps) - Official SDK and utilities for Telegram Mini Apps.

## Bot Hosting and Deployment

- [Railway](https://railway.app/) - Deploy from GitHub with a 30-day trial.
- [Fly.io](https://fly.io/) - Deploy bots globally with persistent volumes.
- [Render](https://render.com/) - Auto-deploy from Git, background workers for long-polling bots.
- [Oracle Cloud Free Tier](https://www.oracle.com/cloud/free/) - Always-free ARM instances, great for bots.
- [PythonAnywhere](https://www.pythonanywhere.com/) - Free tier for Python bots in webhook mode.
- [Self-hosted with PM2](https://pm2.keymetrics.io/) - Process manager for Node.js bots.
- [Self-hosted with systemd](https://www.freedesktop.org/software/systemd/man/systemd.service.html) - Run bots as Linux services.

## Inline Bots

- [gif](https://t.me/gif) - Search and share GIFs inline.
- [pic](https://t.me/pic) - Search and share images inline.
- [vid](https://t.me/vid) - Search and share videos inline.
- [wiki](https://t.me/wiki) - Search Wikipedia inline.
- [sticker](https://t.me/sticker) - Find stickers inline.
- [vote](https://t.me/vote) - Create polls inline.

## Payments and Commerce

- [Telegram Payments Guide](https://core.telegram.org/bots/payments) - Official payment integration documentation.
- [Telegram Stars](https://core.telegram.org/bots/payments-stars) - Telegram digital currency for in-bot purchases.
- [Stripe Provider](https://core.telegram.org/bots/payments#supported-payment-providers) - Accept credit card payments via Stripe.
- [TON Connect](https://docs.ton.org/develop/dapps/ton-connect/overview) - Connect TON wallets to your bot.
- [MyStars FaaS](https://mystars.tg/docs) - Buy Telegram Stars and Premium via API.
- [Gategram](https://gategram.app) - Open-source Mini App for selling digital content with Stars payments.

## Media and File Bots

- [yt-dlp](https://github.com/yt-dlp/yt-dlp) - Download engine for 1000+ sites.
- [gallery-dl](https://github.com/mikf/gallery-dl) - Download images from galleries and image hosting sites.
- [Stickerify](https://github.com/Stickerifier/Stickerify) - Converts media into the format required for Telegram stickers.
- [Jellyfin Telegram Channel Sync](https://github.com/GeiserX/jellyfin-telegram-channel-sync) - Syncs Jellyfin access with channel membership.
- [VideoDownloaderBot](https://github.com/Avazbek22/VideoDownloaderBot) - Self-hosted media downloader with Docker deployment.
- [LinkDownloaderBotForGroups](https://github.com/Avazbek22/LinkDownloaderBotForGroups) - Turns shared video links into native posts.
- [MediaDownloaderBot](https://t.me/MediaDownloader2323Bot) - Download videos and photos from YouTube, X/Twitter and Reddit.

## Group Management

- [Rose Bot](https://t.me/MissRose_bot) - Popular group management bot with moderation, filters, and notes.
- [Combot](https://combot.org/) - Analytics and moderation for Telegram groups.
- [Group Butler](https://github.com/group-butler/GroupButler) - Open source Lua-based group management bot.
- [OmniGest](https://t.me/OmniGest_bot) - Free all-in-one group management bot with anti-spam and AI moderation.
- [jev-bouncer](https://github.com/gherardo200-glitch/jev-bouncer) - Self-hosted bot scoring spam, scams and toxicity with a fast typed-decision model instead of an LLM call per message.

## Utility Bots

- [RateStickerBot](https://t.me/RateStickerBot) - Rate and discover stickers.
- [Shieldy](https://t.me/shieldy_bot) - CAPTCHAs for group entry.
- [ControllerBot](https://t.me/ControllerBot) - Schedule and manage channel posts.
- [Combot](https://t.me/combot) - Group analytics and statistics.
- [Telegram Delay Channel Cloner](https://github.com/GeiserX/telegram-delay-channel-cloner) - Relays messages between channels with delay.
- [Paperless Telegram Bot](https://github.com/GeiserX/paperless-telegram-bot) - Manage Paperless-NGX documents via Telegram.
- [moreformbot](https://t.me/moreformbot) - Create forms and surveys, collect responses in Telegram.
- [RemoteJobRadarBot](https://t.me/RemoteJobRadarBot) - Search fresh remote jobs with keyword alerts.
- [TG Sender](https://github.com/MrStricxn/tgsender) - CLI that sends a different post per group via MTProto.
- [ozvuchka_free_bot](https://t.me/ozvuchka_free_bot) - Free Russian text-to-speech bot.
- [Weight Goal Bot](https://github.com/IgorShadurin/weight-telegram-bot) - Photo-backed weight goals and progress charts.
- [Junction Bot](https://t.me/junction_bot) - Automates channel broadcasts and AI digests.

## AI and LLM Bots

- [chatgpt-telegram-bot](https://github.com/karfly/chatgpt_telegram_bot) - ChatGPT integration with streaming and voice messages.
- [LangChain Telegram Bot](https://github.com/langchain-ai/langchain) - Build conversational AI bots with LangChain.
- [AskePub](https://github.com/GeiserX/AskePub) - Uses GPT-4o to generate AI study notes from ePub books.
- [Untether](https://github.com/littlebearapps/untether) - Self-hosted Telegram bridge for running AI coding agents remotely.

## Developer Tools

- [Postman Telegram Collection](https://www.postman.com/telegr/telegram-bot-api/) - Pre-built API collection for Postman.
- [telegram-bot-api (local server)](https://github.com/tdlib/telegram-bot-api) - Run the Bot API server locally.
- [Webhook Inspector](https://webhook.site/) - Debug webhook payloads from Telegram.
- [mitmproxy](https://mitmproxy.org/) - Inspect API calls between your bot and Telegram.

## Tutorials and Guides

- [From BotFather to Hello World (Python)](https://core.telegram.org/bots/tutorial) - Official beginner tutorial.
- [grammY Guide](https://grammy.dev/guide/) - Comprehensive guide for building bots with grammY.
- [aiogram 3.x Documentation](https://docs.aiogram.dev/en/latest/) - Full docs for the aiogram framework.
- [Webhook vs Long Polling](https://core.telegram.org/bots/webhooks) - Official comparison and setup guide.
- [Deploy Telegram Bot to AWS Lambda](https://aws.amazon.com/blogs/compute/) - Serverless deployment walkthrough.

## Community

- [BotTalk](https://t.me/bottalk) - English-speaking bot developer community.
- [Telegram Bot Developers (Reddit)](https://www.reddit.com/r/TelegramBots/) - Reddit community for bot developers.
- [grammY Chat](https://t.me/grammyjs) - grammY framework community.
- [python-telegram-bot Chat](https://t.me/pythontelegrambotgroup) - Community group for python-telegram-bot users.
- [aiogram Chat](https://t.me/aiogram) - International community for aiogram users.
- [Telegraf Discussions](https://github.com/telegraf/telegraf/discussions) - Community forum for Telegraf users.

---

## Maintainer

**Erkan**

- GitHub: @erkcet
