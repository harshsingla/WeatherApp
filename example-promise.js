function getTempPromise(location) {
  return new Promise(function (resolve, reject){
    setTimeout(function(){
      resolve(79);
      reject('City Not Found');
    },1000);
  });
}

getTempPromise('India23@').then(function (temp) {
  console.log('success',temp);
}, function (err) {
  console.log('Error', err);
});

function getPromise (a,b){
  return new Promise(function (resolve, reject) {
    if(typeof a && b ==='number'){
      resolve(a + b);
    }else {
    reject('Error');
  }
  });
}

getPromise(2,'hg').then(function (sum){
  console.log('success', sum);
}, function(err){
  console.log('Fail',err);
});
