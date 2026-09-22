import { verifyBasicAuth } from '@packages/content/runtime/basic-auth';

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    return verifyBasicAuth(request, env) ?? env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;
