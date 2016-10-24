// Some functions for preliminary generation, read PRE, not for real time.
// Should be run at news of market changes, or regular intervals.
// Static market lists from btc-e included for tests.

//const btce = require('./node.btce.js');

const marketSplit = [ // array split btce test pairs
  [ 'btc', 'usd' ],  // array with btce markets
  [ 'btc', 'rur' ],
  [ 'btc', 'eur' ],
  [ 'ltc', 'btc' ],
  [ 'ltc', 'usd' ],
  [ 'ltc', 'rur' ],
  [ 'ltc', 'eur' ],
  [ 'nmc', 'btc' ],
  [ 'nmc', 'usd' ],
  [ 'nvc', 'btc' ],
  [ 'nvc', 'usd' ],
  [ 'usd', 'rur' ],
  [ 'eur', 'usd' ],
  [ 'eur', 'rur' ],
  [ 'ppc', 'btc' ],
  [ 'ppc', 'usd' ],
  [ 'dsh', 'btc' ],
  [ 'eth', 'btc' ],
  [ 'eth', 'usd' ],
  [ 'eth', 'ltc' ],
  [ 'eth', 'rur' ]
];

const marketString = [ // underscore split test pairs
  'btc_usd',
  'btc_rur',
  'btc_eur',
  'ltc_btc',
  'ltc_usd',
  'ltc_rur',
  'ltc_eur',
  'nmc_btc',
  'nmc_usd',
  'nvc_btc',
  'nvc_usd',
  'usd_rur',
  'eur_usd',
  'eur_rur',
  'ppc_btc',
  'ppc_usd',
  'dsh_btc',
  'eth_btc',
  'eth_usd',
  'eth_ltc',
  'eth_rur'
];
console.log(matchThree(marketSplit));

function matchBoolish(a, b, c){ // returns -1 for none, 0, 1, or 2 for both
  c = 0;  // TWO ELEMENTS ONLY
  if((a[0] === b[0]) || (a[0] === b[1])){
    c = c + 1;
  };
  if((a[1] === b[0]) || (a[1] === b[1])){
    c = c + 2;
  };
  return c - 1;
}

function matchThree(a, b, c, d){ // returns array of market combinations based on valid markets
  d = a.length; // a is comma split market list, b is tmp, c is return collection, d is just a.length i guess
  c = [];
  for(z = 0; z < d; z++){
    b = [];
    for(let j of a){
      if((matchBoolish(a[z], j) == 1) || (matchBoolish(a[z], j) == 0)){
        inner:
        for(let k of a){
          var matchaz = matchBoolish(k, a[z]);
          var matchj = matchBoolish(k, j);
          if(((matchaz == 1) || (matchaz == 0)) && ((matchj == 1) || (matchj == 0))){
            if(matchaz != matchj){
              //console.log("matchaz: "+matchaz+" matchj: "+matchj)
              //console.log("a[z]: "+a[z]+" j: "+j+" k: "+k)
              b = [a[z], j, k];
              c.push(b);
              continue inner;
            }
          }
        }
      };
    }
  };
  return c;
}
