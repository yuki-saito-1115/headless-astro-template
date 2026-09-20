import {
  getAllContents,
  getDetail,
  type SampleType,
} from '@scripts/build/microcms';
import type { MicroCMSQueries } from 'microcms-js-sdk';

const ENDPOINT = 'sample';

/**
 * サンプル一覧を取得する
 * @returns サンプル一覧
 * @throws 取得に失敗した場合
 */
const getSampleList = async (): Promise<SampleType[]> => {
  const queries: MicroCMSQueries = {
    fields: 'id,title',
  };

  const samples = await getAllContents<SampleType>(ENDPOINT, queries);

  if (samples === null) {
    throw new Error('サンプル一覧の取得に失敗しました');
  }

  return samples;
};

/**
 * サンプル詳細を取得する
 * @param id サンプルID
 * @returns サンプル詳細
 * @throws IDが未指定、または取得に失敗した場合
 */
const getSampleDetail = async (id: string | undefined): Promise<SampleType> => {
  if (!id) {
    throw new Error('サンプルIDが指定されていません');
  }

  const sample = await getDetail<SampleType>(ENDPOINT, id);

  if (!sample) {
    throw new Error(`サンプル詳細（${id}）の取得に失敗しました`);
  }

  return sample;
};

export { getSampleDetail, getSampleList };
