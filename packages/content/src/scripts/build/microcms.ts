import { getSecret } from 'astro:env/server';

import type { components } from '../../types/microcms';

type MicroCMSEndpoint = 'sample';

import type { MicroCMSListResponse, MicroCMSQueries } from 'microcms-js-sdk';
import { createClient } from 'microcms-js-sdk';

const MICROCMS_SERVICE_DOMAIN = getSecret('MICROCMS_SERVICE_DOMAIN');
const MICROCMS_API_KEY = getSecret('MICROCMS_API_KEY');

if (!MICROCMS_SERVICE_DOMAIN || !MICROCMS_API_KEY) {
  throw new Error('MICROCMS_SERVICE_DOMAIN と MICROCMS_API_KEY の環境変数を設定してください。');
}

/*
 * client
 */
export const client = createClient({
  apiKey: MICROCMS_API_KEY,
  retry: true,
  serviceDomain: MICROCMS_SERVICE_DOMAIN,
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
): Promise<MicroCMSListResponse<T>> => {
  return client.getList<T>({
    endpoint,
    queries,
  });
};

/*
 * Generic Detail
 */
export const getDetail = async <T>(
  endpoint: MicroCMSEndpoint,
  contentId: string,
  queries?: MicroCMSQueries,
): Promise<T> => {
  return client.getListDetail<T>({
    contentId,
    endpoint,
    queries,
  });
};

/*
 * Generic All Contents (101件以上の全件取得)
 */
export const getAllContents = async <T>(
  endpoint: MicroCMSEndpoint,
  queries?: MicroCMSQueries,
): Promise<T[]> => {
  return client.getAllContents<T>({
    endpoint,
    queries,
  });
};
