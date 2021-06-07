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
};
