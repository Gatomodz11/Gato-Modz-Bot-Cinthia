function _0x4202(){const _0x38d52c=['utf8','125xEwBKi','3878352EcYuKq','node-webpmux','69848haqbBL','concat','crypto','5453595ZdUALC','hex','853787OuHAeb','110VeAnEH','load','91782ygEuOU','1251ZxWnpw','426058TeKiij','randomBytes','191260vuNuOc','save','length','63iLEwXD','writeUIntLE'];_0x4202=function(){return _0x38d52c;};return _0x4202();}const _0x46339e=_0xf758;(function(_0xd1473c,_0x472824){const _0x4c731e=_0xf758,_0x5afc8a=_0xd1473c();while(!![]){try{const _0x3fcdc0=-parseInt(_0x4c731e(0xc2))/0x1+parseInt(_0x4c731e(0xc0))/0x2*(-parseInt(_0x4c731e(0xc7))/0x3)+parseInt(_0x4c731e(0xc4))/0x4*(-parseInt(_0x4c731e(0xca))/0x5)+parseInt(_0x4c731e(0xcb))/0x6+parseInt(_0x4c731e(0xbb))/0x7+parseInt(_0x4c731e(0xcd))/0x8*(parseInt(_0x4c731e(0xc1))/0x9)+-parseInt(_0x4c731e(0xbe))/0xa*(-parseInt(_0x4c731e(0xbd))/0xb);if(_0x3fcdc0===_0x472824)break;else _0x5afc8a['push'](_0x5afc8a['shift']());}catch(_0x7f4583){_0x5afc8a['push'](_0x5afc8a['shift']());}}}(_0x4202,0xdd9d1));function _0xf758(_0x34fc0c,_0x33d5af){const _0x4202fa=_0x4202();return _0xf758=function(_0xf75828,_0x5bb389){_0xf75828=_0xf75828-0xbb;let _0xd7024a=_0x4202fa[_0xf75828];return _0xd7024a;},_0xf758(_0x34fc0c,_0x33d5af);}const crypto=require(_0x46339e(0xcf)),webp=require(_0x46339e(0xcc));async function addExif(_0x19174d,_0x521b29,_0x4b80ca,_0xd27fa3=[''],_0x1cdcb7={}){const _0x39d8ba=_0x46339e,_0xdbd30=new webp['Image'](),_0x75d195=crypto[_0x39d8ba(0xc3)](0x20)['toString'](_0x39d8ba(0xbc)),_0x4ad70f={'sticker-pack-id':_0x75d195,'sticker-pack-name':_0x521b29,'sticker-pack-publisher':_0x4b80ca,'emojis':_0xd27fa3,..._0x1cdcb7},_0x275320=Buffer['from']([0x49,0x49,0x2a,0x0,0x8,0x0,0x0,0x0,0x1,0x0,0x41,0x57,0x7,0x0,0x0,0x0,0x0,0x0,0x16,0x0,0x0,0x0]),_0x54f30a=Buffer['from'](JSON['stringify'](_0x4ad70f),_0x39d8ba(0xc9)),_0x2a5a28=Buffer[_0x39d8ba(0xce)]([_0x275320,_0x54f30a]);return _0x2a5a28[_0x39d8ba(0xc8)](_0x54f30a[_0x39d8ba(0xc6)],0xe,0x4),await _0xdbd30[_0x39d8ba(0xbf)](_0x19174d),_0xdbd30['exif']=_0x2a5a28,await _0xdbd30[_0x39d8ba(0xc5)](null);}module['exports']=addExif;