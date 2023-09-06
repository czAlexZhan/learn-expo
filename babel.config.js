/*
 * @Author: zhanxw01 zhanxw01@mingyuanyun.com
 * @Date: 2023-08-31 17:43:40
 * @LastEditors: zhanxw01 zhanxw01@mingyuanyun.com
 * @LastEditTime: 2023-09-05 17:32:48
 * @FilePath: \StickerSmash\babel.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      "@babel/plugin-proposal-export-namespace-from",
      "react-native-reanimated/plugin",
    ],
  };
};
