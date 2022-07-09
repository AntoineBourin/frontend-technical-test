# Leboncoin technical test

This technical test goal was to create the interface to consult & send some messages.

## Stack

- React
- Next.JS
- Typescript

## Methodology

Atomic design has been used inside this project to ensure a good reuse of some basical components.
Also, I used NextJS concepts to optimize page loading performance.

## Pages

There is 2 pages inside this app : 

- `index.tsx` (used as an homepage)
- `conversation/[id].tsx` (used as the conversation details page, who redirect to not found page if conversation is not found or if user doesn't appear inside)

## API calls

All API calls function are inside services/api folder.
The API server URL configuration is under environment variable as `NEXT_PUBLIC_SERVER_URL`
