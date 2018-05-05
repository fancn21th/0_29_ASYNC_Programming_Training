const a = new Promise((resolve, reject) => {
  if(Math.random() > 0.5)
    resolve('passed!');
  else
    reject('oh, no!');
});

a.then(res => console.log(res))
 .catch(error => console.log(error));
