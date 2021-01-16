const randomWordArray = () => {
  let result           = '';
  const characters       = 'AABCDEEFGHIIJKLMNOOPQRSTUUVWXYZ';
   const charactersLength = characters.length;
  for ( var i = 0; i < 10; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  console.log(result);
  return result.split('');
}

export { randomWordArray };