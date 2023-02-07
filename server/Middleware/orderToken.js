const orderToken = () => {
  let counter = 1;
  let pervRand = 1;
  const rand = (max = 10) => {
    time = new Date().getTime();
    randValue = (time / counter / (prevRand + 1)) % max;
    counter++;
    prevRand = randValue;
    return randValue;
  };
  console.log(rand());
};

export { orderToken };
