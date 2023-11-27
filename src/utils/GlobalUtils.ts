export default {
  /**
   * 退出程序需要的处理内容
   */
  exit() {
    window.localStorage.clear();
    window.sessionStorage.clear();
    location.reload();
  }
};
