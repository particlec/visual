import instance from '../untils/axio';

const url_field_user = '/field-model-tool/user'; // 普通用户

export default {
  userGetDomainBriefInfo: ({ fieldIdList }) => {
    return instance.get(`${url_field_user}/field/fieldIdList/summary`, {
      params: {
        fieldIdList: fieldIdList?.join(','),
      },
    });
  },

  querySummary: ({ sort, page, size, keyword, publishStatus = 1 }) => {
    return instance.get(`${url_field_user}/field/Summary/query`, {
      params: {
        sort,
        page,
        size,
        keyword,
        publishStatus,
      },
    });
  },

  getInstanceRunStatisic: ({ startTime, endTime, span }) => {
    return instance.get(`lvmp/statistic/runStatisic`, {
      params: { startTime, endTime, span },
    });
  },
};
