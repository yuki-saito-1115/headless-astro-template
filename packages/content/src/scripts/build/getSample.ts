import {
  getAllContents,
  getDetail,
  type SampleType,
} from '@scripts/build/microcms';
import type { MicroCMSQueries } from 'microcms-js-sdk';

const ENDPOINT = 'sample';

/**
 * サンプル一覧を取得する
 * @param queries microCMSのクエリパラメータ
 * @returns サンプル一覧
 * @throws 取得に失敗した場合
 */
const getSampleList = async (
  queries?: MicroCMSQueries,
): Promise<SampleType[]> => {
  const mergedQueries: MicroCMSQueries = {
    fields: 'id,title,slug',
    ...queries,
  };

  const samples = await getAllContents<SampleType>(ENDPOINT, mergedQueries);

  if (samples === null) {
    throw new Error('サンプル一覧の取得に失敗しました');
  }

  return samples;
};

/**
 * サンプル詳細を取得する
 * @param id サンプルID
 * @param queries microCMSのクエリパラメータ
 * @returns サンプル詳細
 * @throws IDが未指定、または取得に失敗した場合
 */
const getSampleDetail = async (
  id: string | undefined,
  queries?: MicroCMSQueries,
): Promise<SampleType> => {
  if (!id) {
    throw new Error('サンプルIDが指定されていません');
  }

  const sample = await getDetail<SampleType>(ENDPOINT, id, queries);

  if (!sample) {
    throw new Error(`サンプル詳細（${id}）の取得に失敗しました`);
  }

  return sample;
};

export { getSampleDetail, getSampleList };
