const getHash = () =>
  location
    .hash
    .slice(1)
    .toLocaleLowerCase()
    .split('/')[1] || '/'; //['', '1', ''] output

export default getHash;
