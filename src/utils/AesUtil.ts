import CryptoJS from "crypto-js";

export default class AesUtil {
  /**
   * 加密
   * @param origin 元数据
   * @return 加密后的数据
   */
  static encrypt(origin: string) {
    const key = this.getRandomKey();
    const iv = this.getRandomIv();
    // 加密
    const encrypt = CryptoJS.AES.encrypt(origin, CryptoJS.enc.Base64.parse(this.uint8ArrayToBase64(key)), {
      iv: CryptoJS.enc.Base64.parse(this.uint8ArrayToBase64(iv)),
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });

    const string = encrypt.ciphertext.toString(CryptoJS.enc.Base64);
    const bytes = this.base64ToUint8Array(string);

    const result = new Uint8Array(32 + 16 + bytes.byteLength);
    for (let i = 0; i < key.byteLength; i++) {
      result[i] = key[i];
    }

    for (let i = 0; i < iv.byteLength; i++) {
      result[i + key.byteLength] = iv[i];
    }

    for (let i = 0; i < bytes.byteLength; i++) {
      result[i + key.byteLength + iv.byteLength] = bytes[i];
    }

    return this.uint8ArrayToBase64(result);
  }

  /**
   * 解密
   * @param ciphertext 密文
   * @return 解密后的数据
   */
  static decrypt(ciphertext: string) {
    const atob = window.atob(ciphertext);
    const key = new Uint8Array(32);
    const iv = new Uint8Array(16);
    const array = new Uint8Array(atob.length - key.length - iv.length);

    for (let i = 0; i < key.length; i++) {
      key[i] = atob.charCodeAt(i);
    }

    for (let i = 0; i < iv.length; i++) {
      iv[i] = atob.charCodeAt(i + key.length);
    }

    for (let i = 0; i < array.length; i++) {
      array[i] = atob.charCodeAt(i + key.length + iv.length);
    }

    const decrypt = CryptoJS.AES.decrypt(
      this.uint8ArrayToBase64(array),
      CryptoJS.enc.Base64.parse(this.uint8ArrayToBase64(key)),
      {
        iv: CryptoJS.enc.Base64.parse(this.uint8ArrayToBase64(iv)),
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      }
    );
    return decrypt.toString(CryptoJS.enc.Utf8);
  }

  /**
   * 获取随机向量
   * @private
   */
  private static getRandomIv() {
    const array = new Uint8Array(16);
    for (let i = 0; i < array.byteLength; i++) {
      array[i] = this.random(100, 0);
    }
    return array;
  }

  /**
   * 获取随机key
   * @private
   */
  private static getRandomKey() {
    const array = new Uint8Array(32);
    for (let i = 0; i < array.byteLength; i++) {
      array[i] = this.random(100, 0);
    }
    return array;
  }

  /**
   * 获取随机数
   * @param max 最大值
   * @param min 最小值
   * @private
   */
  private static random(max: number, min: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  /**
   * Uint8Array to Base64
   *
   * @param array
   */
  private static uint8ArrayToBase64(array: Uint8Array) {
    let binary = "";
    for (let len = array.byteLength, i = 0; i < len; i++) {
      binary += String.fromCharCode(array[i]);
    }
    return window.btoa(binary);
  }

  /**
   * Base64 to Uint8Array
   * @param origin
   */
  private static base64ToUint8Array(origin: string) {
    const padding = "=".repeat((4 - (origin.length % 4)) % 4);
    const base64 = origin + padding;
    // .replace(/\-/g, '+')
    // .replace(/_/g, '/');
    const rawData = atob(base64);
    const outputArray = new Uint8Array(rawData.length);
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }
}
