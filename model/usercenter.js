const userInfo = {
  avatarUrl: 'http://mms1.baidu.com/it/u=167347965,2784106361&amp;fm=253&amp;app=138&amp;f=JPEG&amp;fmt=auto&amp;q=75&amp;fmt=auto&amp;q=75?w=500&amp;h=500',
  nickName: 'ZWang 🌟',
  phoneNumber: '17851960237',
  gender: 1,
};
const countsData = [{
  num: 0,
  name: '收藏夹',
  type: 'favor',
}];



const customerServiceInfo = {
  servicePhone: '17851960237',
  serviceTimeDuration: '每周三至周五 9:00-12:00  13:00-15:00',
};

export const genSimpleUserInfo = () => ({
  ...userInfo
});

export const genUsercenter = () => ({
  userInfo,
  countsData,
  customerServiceInfo,
});