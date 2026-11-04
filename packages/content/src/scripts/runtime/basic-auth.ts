type BasicAuthEnv = {
  CLOUDFLARE_BASIC_USER: string;
  CLOUDFLARE_BASIC_PASS: string;
};

declare global {
  interface Uint8ArrayConstructor {
    fromBase64(base64: string): Uint8Array;
  }
}

const unauthorized = () =>
  new Response('認証が必要です。', {
    headers: {
      'WWW-Authenticate': 'Basic realm="Login Required", charset="UTF-8"',
    },
    status: 401,
  });

const malformedAuthorization = () =>
  new Response('不正な形式の認証ヘッダーです。', {
    status: 400,
  });

const stringsEqual = (first: string, second: string) => {
  if (first.length !== second.length) {
    return false;
  }

  let difference = 0;
  for (let index = 0; index < first.length; index += 1) {
    difference |= first.charCodeAt(index) ^ second.charCodeAt(index);
  }

  return difference === 0;
};

export const verifyBasicAuth = (request: Request, env: BasicAuthEnv): Response | undefined => {
  const authorization = request.headers.get('Authorization');
  if (!authorization) {
    return unauthorized();
  }

  const [scheme, encoded] = authorization.split(' ');
  if (scheme !== 'Basic' || !encoded) {
    return malformedAuthorization();
  }

  try {
    const decoded = new TextDecoder().decode(Uint8Array.fromBase64(encoded));
    const separator = decoded.indexOf(':');
    if (separator === -1) {
      return malformedAuthorization();
    }

    const user = decoded.slice(0, separator);
    const pass = decoded.slice(separator + 1);
    if (!user || !pass || !env.CLOUDFLARE_BASIC_USER || !env.CLOUDFLARE_BASIC_PASS) {
      return unauthorized();
    }

    if (
      !stringsEqual(user, env.CLOUDFLARE_BASIC_USER) ||
      !stringsEqual(pass, env.CLOUDFLARE_BASIC_PASS)
    ) {
      return unauthorized();
    }
  } catch {
    return malformedAuthorization();
  }
};
