import updateManager from './common/updateManager';

App({
  onLaunch: function () {
    console.warn = () => {};
  },
  onShow: function () {
    updateManager();
  },
});
