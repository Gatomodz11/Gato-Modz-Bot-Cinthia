// Constantes Nuevas // 
 const enviar = (sock,from,info,texto) => {
 sock.sendMessage(from,{ text : texto }, {quoted : info})
 }
 
  const enviarfoto2 = (sock,from,info,imagen,texto) => {
 sock.sendMessage(from,{ image : { url : imagen}, caption : texto }, {quoted : info})
 } 
 
const enviarfoto = (sock,from,info,imagen,texto) => {
 sock.sendMessage(from,{ image : imagen, caption : texto }, {quoted : info})
 }  
 
const enviaraudio = (sock,from,info,audioS) => { 
sock.sendMessage(from, { audio: { url : audioS }, mimetype: 'audio/mp4', ptt: true }, { quoted: info })    
 }
 const enviarsticker = (sock,from,info,pupii) => { 
 sock.sendMessage(from,{ sticker : pupii},{ quoted : info})
 }
 module.exports = {enviarsticker,enviar, enviarfoto2,enviarfoto,enviaraudio}
 
