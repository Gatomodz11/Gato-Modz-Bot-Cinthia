function _0x4b8d(){const _0x2389b3=['83907yJgHze','1459768ZxQbyx','readFileSync','3859065AQhmZw','1072086CqORHr','parse','10gFAImi','355956hoUwpr','39868AGEoFP','floor','72MafXmI','970MTzZYT','push','exports','8jzkjoX','./archivos/database/registros.json','forEach','11639925Nrmuot','random','length'];_0x4b8d=function(){return _0x2389b3;};return _0x4b8d();}function _0x1250(_0x42d2f4,_0x3458a1){const _0x4b8d3b=_0x4b8d();return _0x1250=function(_0x125064,_0x349670){_0x125064=_0x125064-0xf8;let _0x14b464=_0x4b8d3b[_0x125064];return _0x14b464;},_0x1250(_0x42d2f4,_0x3458a1);}const _0x26f233=_0x1250;(function(_0x343269,_0x3ca8d6){const _0x41b437=_0x1250,_0x44c07b=_0x343269();while(!![]){try{const _0x2a5656=-parseInt(_0x41b437(0xff))/0x1+-parseInt(_0x41b437(0x103))/0x2*(-parseInt(_0x41b437(0x105))/0x3)+parseInt(_0x41b437(0xfc))/0x4*(parseInt(_0x41b437(0x101))/0x5)+-parseInt(_0x41b437(0x102))/0x6+-parseInt(_0x41b437(0xfe))/0x7*(-parseInt(_0x41b437(0x109))/0x8)+-parseInt(_0x41b437(0xfb))/0x9*(parseInt(_0x41b437(0x106))/0xa)+parseInt(_0x41b437(0xf8))/0xb;if(_0x2a5656===_0x3ca8d6)break;else _0x44c07b['push'](_0x44c07b['shift']());}catch(_0x357c7e){_0x44c07b['push'](_0x44c07b['shift']());}}}(_0x4b8d,0xbeecb));const fs=require('fs'),_registered=JSON[_0x26f233(0x100)](fs[_0x26f233(0xfd)](_0x26f233(0x10a))),getRegisteredRandomId=()=>{const _0x64165a=_0x26f233;return _registered[Math[_0x64165a(0x104)](Math[_0x64165a(0xf9)]()*_registered[_0x64165a(0xfa)])]['id'];},addRegisteredUser=(_0x562cbb,_0x4bf99d,_0x112143,_0x3af66d,_0x56e65d,_0x1bfd0b,_0x2fbd4c)=>{const _0x517712=_0x26f233,_0x52f6ef={'id':_0x562cbb,'name':_0x4bf99d,'data':_0x112143,'time':_0x3af66d,'serial':_0x56e65d,'celular':_0x1bfd0b,'solicitudes':_0x2fbd4c};_registered[_0x517712(0x107)](_0x52f6ef),fs['writeFileSync'](_0x517712(0x10a),JSON['stringify'](_registered));},checkRegisteredUser=_0x6df667=>{const _0x14e328=_0x26f233;let _0x3eccec=![];return Object['keys'](_registered)[_0x14e328(0x10b)](_0x160c34=>{_registered[_0x160c34]['id']===_0x6df667&&(_0x3eccec=!![]);}),_0x3eccec;};module[_0x26f233(0x108)]={'checkRegisteredUser':checkRegisteredUser,'addRegisteredUser':addRegisteredUser,'getRegisteredRandomId':getRegisteredRandomId};