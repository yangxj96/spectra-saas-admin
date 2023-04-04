/*
 * Copyright (c) 2021.
 * 作者：杨新杰(Jack Young)
 * 邮箱：yangxj96@gmail.com
 * 日期：2021-11-28 02:11:05
 * Copyright (c) 2021.
 */

export default {

    /**
     * 加密
     * @param origin 元数据
     * @return 加密后的数据
     */
    encrypt(origin: string) {

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
        console.log(key)
        console.log(iv)
        console.log(array);
    }
}
