
export default function itemStore() {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res([{ id: 'EMIN08', artist: 'eminem', album: 'kamikaze', genre:'hip-hop', price:3330, stock:4},  
        { id: 'TYLER4', artist: 'tyler the creator', album: 'flower boy', genre:'hip-hop', price:2950, stock:6},  
        { id: 'KEND00', artist: 'kendrick lamar', album: 'damn.', genre:'hip-hop', price:2110, stock:7}, 
        { id: 'TAME33', artist: 'tame impala', album: 'the slow rush', genre:'alternativo', price:3440, stock:5}, 
        { id: 'BEAT15', artist: 'beatles', album: "a hard day's night", genre:'rock & pop', price:3000, stock:4},    
        { id: 'TAY013', artist: 'taylor swift', album: '1989', genre:'rock & pop', price:3300, stock:6},  
        { id: 'WEZER11', artist: 'weezer', album: 'weezer', genre:'rock & pop ', price:2730, stock:5},  
        { id: 'NORA22', artist: 'nora jones', album: 'feel like home', genre:'jazz', price:2565, stock:3},
        { id: 'JONES44', artist: 'quincy jones', album: 'at newport 61', genre:'jazz', price:1655, stock:2}, 
        { id: 'FRANK80', artist: 'frank sinatra', album: 'sinatra & swingin brass', genre:'jazz', price:3310, stock:3}, 
        { id: 'ROCKY07', artist: 'rocky horror show', album: 'rocky horror show', genre:'banda de sonido', price:2870, stock:2}, 
        { id: 'LALA09', artist: 'la la land pelicula', album: 'la la land', genre:'banda de sonido', price:3250, stock:3},   
      ]);
      }, 2000);
    });
  };
  
  //ItemQuantitySelector -Description -AddItemButton
