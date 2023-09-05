/*
 * @Author: zhanxw01 zhanxw01@mingyuanyun.com
 * @Date: 2023-09-05 17:17:23
 * @LastEditors: zhanxw01 zhanxw01@mingyuanyun.com
 * @LastEditTime: 2023-09-05 17:17:35
 * @FilePath: \StickerSmash\components\EmojiSticker.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { View, Image } from 'react-native';

export default function EmojiSticker({ imageSize, stickerSource }) {
  return (
    <View style={{ top: -350 }}>
      <Image
        source={stickerSource}
        resizeMode="contain"
        style={{ width: imageSize, height: imageSize }}
      />
    </View>
  );
}
