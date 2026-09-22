import { defineMiddleware } from 'astro:middleware';
import { env } from 'cloudflare:workers';
import { verifyBasicAuth } from '@packages/content/runtime/basic-auth';

export const onRequest = defineMiddleware((context, next) => {
  const response = verifyBasicAuth(context.request, env);
  return response ?? next();
});
