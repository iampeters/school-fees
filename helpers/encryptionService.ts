import crypto from 'crypto'
interface EncryptionServiceHandler {
  keyLength: number
  iterationCount: number
  password: string
  salt: string
  iv: string
  cipherAlgorithm: string
}
// eslint-disable-next-line no-redeclare
class EncryptionServiceHandler {
  constructor() {
    this.keyLength = parseInt(process.env.ALGORITHM_KEY_LEN ?? '128')
    this.iterationCount = parseInt(process.env.ITERATION_COUNT ?? '1000')
    this.password =
      process.env.ENCRYPTION_PASSWORD ?? '2D80D21C1622288584A6DB01'
    this.salt =
      process.env.ENCRYPTION_SALT ?? 'e176f574af0abdc0ca4d221584cb1a8b'
    this.iv = process.env.ENCRYPTION_IV ?? '7933806f650a373f80cd3a824bb03905'
    this.cipherAlgorithm =
      process.env.ENCRYPTION_CIPHER_ALGORITHM ?? 'AES-128-CBC'
  }

  generateKey(salt: string, password: string) {
    let key = crypto.pbkdf2Sync(
      password,
      Buffer.from(salt, 'hex'),
      this.iterationCount,
      this.keyLength / 8,
      'sha1'
    )
    if (key == null) {
      key = Buffer.from('')
    }
    return key
  }

  encryption(salt: string, iv: string, password: string, plainString: string) {
    const key = this.generateKey(salt, password)
    //  encrypt
    const cipher = crypto.createCipheriv(
      this.cipherAlgorithm,
      key,
      Buffer.from(iv, 'hex')
    )
    return Buffer.concat([cipher.update(plainString), cipher.final()]).toString(
      'base64'
    )
  }

  decryption(
    salt: string,
    iv: string,
    password: string,
    encodedString: string
  ) {
    const key = this.generateKey(salt, password)
    const encryptedText = Buffer.from(encodedString, 'base64') // change to hex
    const decipher = crypto.createDecipheriv(
      this.cipherAlgorithm,
      key,
      Buffer.from(iv, 'hex')
    )
    return Buffer.concat([
      decipher.update(encryptedText),
      decipher.final(),
    ]).toString()
  }

  encrypt(plainText: string) {
    return this.encryption(this.salt, this.iv, this.password, plainText)
  }

  decrypt(encryptedText: string) {
    return this.decryption(this.salt, this.iv, this.password, encryptedText)
  }
}

const EncryptionService = new EncryptionServiceHandler()

export default EncryptionService
// export default EncryptionServiceHandler
