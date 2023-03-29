/*
 * Copyright (c) 2021.
 * 作者：杨新杰(Jack Young)
 * 邮箱：yangxj96@gmail.com
 * 日期：2021-11-28 02:11:05
 * Copyright (c) 2021.
 */


const AesEncryption = {
    /**
     * 加密
     * @param src 需要加密的数据
     * @return 加密后的数据
     */
    encryption(src: string): string {
        // let encrypt = CryptoJS.AES.encrypt(src, CryptoJS.enc.Utf8.parse(this.KEY), {
        // 	mode: CryptoJS.mode.ECB,
        // 	padding: CryptoJS.pad.Pkcs7
        // });
        // return encrypt.ciphertext.toString();
        return "";
    },
    /**
     * 解密
     * @param data 需要解密的数据
     * @return 加密后的数据
     */
    decryption(data: string): string {

        let en = new TextEncoder();
        console.log(en.encode(data));

        let bytes = new TextEncoder().encode(data);


        let key = bytes.slice(0,32);
        let iv  = bytes.slice(33,49);
        let datum = bytes.slice(50);

        console.log(`key`, key);
        console.log(`iv`, iv);
        console.log(`datum`, datum);

        // crypto.createCipheriv('aes-256-gcm',key,iv)



        // let decipheriv = Crypto.createDecipheriv('aes-256-gcm',key,iv);
        // // decipheriv.setAuthTag()
        // let msg = decipheriv.update(datum);
        // let fin = decipheriv.final();
        // let r = new TextDecoder('utf8').decode(Buffer.concat([msg, fin]));
        // console.log(r);

        // let buffer = Buffer.from(data);
        // let key = Buffer.alloc(32);
        // let iv = Buffer.alloc(16)
        // let datum = Buffer.alloc(buffer.length - 32 - 16)
        // buffer.copy(key, 0, 0, 32);
        // buffer.copy(iv, 0, 33, 33 + 16);
        // buffer.copy(datum, 0, 32 + 16 + 1);
        //
        // console.log(key.toString("utf-8"))
        // console.log(iv.toString("utf-8"))
        // console.log(datum.toString("utf-8"))

        return "";

    }
}

export default AesEncryption;
