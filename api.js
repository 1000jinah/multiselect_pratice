//마켓 정보 List Ticker 조회
MarketCoinList();
//마켓 Ticker 조회
// MarketCoin('KRW','BTC');
// //캔들 조회
// MarketCoincandles('KRW','STEEM',5,3);

function MarketCoinList() {
  const request = new XMLHttpRequest();
  const url = "https://api.upbit.com/v1/market/all";

  request.open("GET", url, false);
  request.send();
  var obj = JSON.parse(request.responseText);
  console.log(obj);
  for (let index = 0; index < obj.length; index++) {
    console.log(obj[index].market);
    listDropDown.innerHtml(obj[index].market);
    
  }
  for (let index = 0; index < obj.length; index++) {
    const element = obj[index];
    console.log(obj[index].korean_name);
  }
}

// function MarketCoin(market,coin){
//   const request = new XMLHttpRequest();
//   const url = 'https://api.upbit.com/v1/ticker?markets='+market+'-'+coin;;

//   request.open("GET", url, false);
//   request.send();
//   var obj = JSON.parse(request.responseText);
//   console.log(obj);
//  }

// function MarketCoincandles(market,coin,timeVal,count){
//   const request = new XMLHttpRequest();
//   const url = 'https://api.upbit.com/v1/candles/minutes/'+timeVal+'?market='+market+'-'+coin+'&count='+count;

//   request.open("GET", url, false);
//   request.send();
//   var obj = JSON.parse(request.responseText);
//   console.log(obj);
//  }
