# FoodRoute - Backend API

## Application Database

**Application DB Connection String:** `postgresql://db_appdb_6a1b2abe8fa524b9ce318a93_user:%21XieYQz5c%2AM9ojignH9xtJhIg%26G%40rxKR@ep-nameless-glitter-akup1abj.c-3.us-west-2.aws.neon.tech:5432/AppDB_6a1b2abe8fa524b9ce318a93?sslmode=require`

**Swagger API Tester URL:** /swagger

## Google APIs (Gemini, Maps, Speech-to-Text)

The backend can use a Google API key provided via the **GOOGLE_API_KEY** environment variable (set on Railway). Use it for Gemini LLM, Maps, and Speech-to-Text. Check **GET /api/google/status** and **GET /api/google/health** to verify the key is set and reachable.

## Recommended Tools

**Recommended SQL Editor tool (Free):** [pgAdmin](https://www.pgadmin.org/download/)

## Deployment

This backend is configured for Railway deployment using nixpacks.toml.
