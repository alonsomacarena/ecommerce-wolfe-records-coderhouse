
export default function itemStore() {
    return new Promise((res, rej) => {
      setTimeout(() => {
        const items=[{ id: 'EMIN08', artist: 'eminem', album: 'kamikaze', genre:'hip-hop', price:3330, stock:4, image:"/eminem-kamikaze.jpg", sello:'interscope records', date:"07 DEC 2018", imageDetails:'/eminem-kamikaze-detail.jpg'},  
        { id: 'TYLER4', artist: 'tyler the creator', album: 'flower boy', genre:'hip-hop', price:2950, stock:6, image:"/flower-boy-tyler.jpg", sello:'columbia records', date:"17 NOV 2017", imageDetails:'/tyler-flower-detail.jpg'},  
        { id: 'KEND00', artist: 'kendrick lamar', album: 'damn.', genre:'hip-hop', price:2110, stock:7, image:"/kendrick-damn.jpg", sello:'polydor records', date:"14 JUL 2017", imageDetails:'/kendrick-damn-details.jpg'}, 
        { id: 'TAME33', artist: 'tame impala', album: 'the slow rush', genre:'alternativo', price:3440, stock:5, image:"/tame-the-slow.png", sello:'fiction records', date:"14 FEB 2020", imageDetails:'/tame-slow-details.jpg'}, 
        { id: 'BEAT15', artist: 'beatles', album: "a hard day's night", genre:'rock & pop', price:3000, stock:4, image:"/beatles-hard-days.jpg", sello:'parlophone records', date:"10 JUL 1964", imageDetails:'/beatles-hard-details.jpg'},    
        { id: 'TAY013', artist: 'taylor swift', album: '1989', genre:'rock & pop', price:3300, stock:6, image:"/taylor-1989.jpg", sello:'virgin emi records', date:"08 DEC 2014", imageDetails:'/taylor-1989-details.jpg'},  
        { id: 'WEZER11', artist: 'weezer', album: 'weezer', genre:'rock & pop ', price:2730, stock:5,image:"/weezer-weezer.jpg", sello:'umc geffen records', date:"28 OCT 2016", imageDetails:'/weezer-details.jpg'},  
        { id: 'NORA22', artist: 'nora jones', album: 'feel like home', genre:'jazz', price:2565, stock:3, image:"/norah-feel-home.jpg", sello:'blue note records', date:"30 ABR 2020", imageDetails:'/norah-home-details.png'},
        { id: 'JONES44', artist: 'quincy jones', album: 'at newport 61', genre:'jazz', price:1655, stock:2, image:"/quincy-newport.jpg", sello:'vinyl passion records', date:"09 DEC 2016", imageDetails:'/quincy-details.jpg'}, 
        { id: 'FRANK80', artist: 'frank sinatra', album: 'sinatra & swingin brass', genre:'jazz', price:3310, stock:3, image:"/sinatra-brass.jpg", sello:'umc records', date:"07 OCT 2014", imageDetails:'/sinatra-details.jpg'}, 
        { id: 'ROCKY07', artist: 'rocky horror show', album: 'rocky horror show', genre:'banda de sonido', price:2870, stock:2, image:"/rocky-horror.jpg", sello:'ode records', date:"24 JUL 2015", imageDetails:'/rocky-horror-details.jpg'}, 
        { id: 'LALA09', artist: 'la la land pelicula', album: 'la la land', genre:'banda de sonido', price:1850, stock:3, image:"/la-la-land.jpg", sello:'interscope records', date:"16 DEC 2016", imageDetails:'/la-la-land-details.png'}, 
      ];
      res(items);
      }, 3000);
    });
  };
  
  //ItemQuantitySelector -Description -AddItemButton
