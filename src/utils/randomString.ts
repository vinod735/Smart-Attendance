const randString = (length: number, current: string) => {
  let randomString: string = length ? randString(--length, "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".charAt(Math.floor(Math.random() * 60)) + current) : current;
  return randomString
}

export default randString
