import { getSecret } from 'astro:env/server';
import type { components } from '../../../../ui/src/types/microcms';

type MicroCMSEndpoint = 'sample';

import type { MicroCMSListResponse, MicroCMSQueries } from 'microcms-js-sdk';
import { createClient } from 'microcms-js-sdk';

const MICROCMS_SERVICE_DOMAIN = getSecret('MICROCMS_SERVICE_DOMAIN');
const MICROCMS_API_KEY = getSecret('MICROCMS_API_KEY');

if (!MICROCMS_SERVICE_DOMAIN || !MICROCMS_API_KEY) {
  throw new Error(
    'MICROCMS_SERVICE_DOMAIN と MICROCMS_API_KEY の環境変数を設定してください。',
  );
}

/*
 * client
 */
export const client = createClient({
  serviceDomain: MICROCMS_SERVICE_DOMAIN,
  apiKey: MICROCMS_API_KEY,
});

/*
 * types
 */
export type SampleType = components['schemas']['Sample'];

/*
 * Generic List
 */
export const getList = async <T>(
  endpoint: MicroCMSEndpoint,
  queries?: MicroCMSQueries,
): Promise<MicroCMSListResponse<T> | null> => {
  try {
    const result = await client.getList<T>({
      endpoint,
      queries,
    });

    return result;
  } catch (_error) {
    return null;
  }
};

/*
 * Generic Detail
 */
export const getDetail = async <T>(
  endpoint: MicroCMSEndpoint,
  contentId: string,
  queries?: MicroCMSQueries,
): Promise<T | null> => {
  try {
    const result = await client.getListDetail<T>({
      endpoint,
      contentId,
      queries,
    });
    return result;
  } catch (_error) {
    return null;
  }
};

/*
 * Generic All Contents (101件以上の全件取得)
 */
export const getAllContents = async <T>(
  endpoint: MicroCMSEndpoint,
  queries?: MicroCMSQueries,
): Promise<T[] | null> => {
  try {
    const result = await client.getAllContents<T>({
      endpoint,
      queries,
    });
    return result;
  } catch (_error) {
    return null;
  }
};
