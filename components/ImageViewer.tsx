/*
 * @Author: zhanxw01 zhanxw01@mingyuanyun.com
 * @Date: 2023-09-05 15:07:04
 * @LastEditors: zhanxw01 zhanxw01@mingyuanyun.com
 * @LastEditTime: 2023-09-05 16:20:13
 * @FilePath: \StickerSmash\components\ImageViewer.tsx
 * @Description:
 */
import { StyleSheet, Image } from "react-native";

export default function ImageViewer({ placeholderImageSource }) {
  return (
    <Image source={{ uri: placeholderImageSource }} style={styles.image} />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
