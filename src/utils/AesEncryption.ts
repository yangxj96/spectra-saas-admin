/*
 * Copyright (c) 2021.
 * 作者：杨新杰(Jack Young)
 * 邮箱：yangxj96@gmail.com
 * 日期：2021-11-28 02:11:05
 * Copyright (c) 2021.
 */

const CryptoJS = require('crypto-js');

const AesEncryption = {
	KEY: '1236547896541236',
	/**
	 * 加密
	 * @param src 需要加密的数据
	 * @return 加密后的数据
	 */
	encryption(src: string): string {
		let encrypt = CryptoJS.AES.encrypt(src, CryptoJS.enc.Utf8.parse(this.KEY), {
			mode: CryptoJS.mode.ECB,
			padding: CryptoJS.pad.Pkcs7
		});
		return encrypt.ciphertext.toString();
	},
	/**
	 * 解密
	 * @param data 需要解密的数据
	 * @return 加密后的数据
	 */
	decryption(data: string): string {
		let stringify = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Hex.parse(data));
		let decrypt = CryptoJS.AES.decrypt(stringify, CryptoJS.enc.Utf8.parse(this.KEY), {
			mode: CryptoJS.mode.ECB,
			padding: CryptoJS.pad.Pkcs7
		});
		// CryptoJS.enc.Utf8
		return decrypt.toString(CryptoJS.enc.Utf8);
	}
}

export default AesEncryption;
