/*
 * Copyright (c) 2021.
 * 作者：杨新杰(Jack Young)
 * 邮箱：yangxj96@gmail.com
 * 日期：2021-11-28 02:11:05
 * Copyright (c) 2021.
 */
import CryptoJS from "crypto-js";
import {Key} from "@element-plus/icons-vue";

export default {

    /**
     * 加密
     * @param origin 元数据
     * @return 加密后的数据
     */
    encrypt(origin: string) {
        let encrypt = CryptoJS.AES.encrypt(origin, `Key`, {
            iv: CryptoJS.enc.Base64.parse('iv'),
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        return encrypt.ciphertext.toString(CryptoJS.enc.Utf8)
    },
    /**
     * 解密
     * @param ciphertext 密文
     * @return 解密后的数据
     */
    decrypt(ciphertext: string) {
        let atob = window.atob(ciphertext);
        let key = new Uint8Array(32);
        let iv = new Uint8Array(16);
        let array = new Uint8Array(atob.length - key.length - iv.length);

        for (let i = 0; i < key.length; i++) {
            key[i] = atob.charCodeAt(i);
        }

        for (let i = 0; i < iv.length; i++) {
            iv[i] = atob.charCodeAt(i + key.length);
        }

        for (let i = 0; i < array.length; i++) {
            array[i] = atob.charCodeAt(i + key.length + iv.length)
        }

        let decrypt = CryptoJS.AES.decrypt(this.uint8ArrayToBase64(array), CryptoJS.enc.Base64.parse(this.uint8ArrayToBase64(key)), {
            iv: CryptoJS.enc.Base64.parse(this.uint8ArrayToBase64(iv)),
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        })
        return decrypt.toString(CryptoJS.enc.Utf8)
    },
    uint8ArrayToBase64(array: Uint8Array) {
        let binary = "";
        for (let len = array.byteLength, i = 0; i < len; i++) {
            binary += String.fromCharCode(array[i]);
        }
        return window.btoa(binary);
    }
}
