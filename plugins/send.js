const _0x33a108=_0x51b2;function _0x51b2(_0x51837d,_0x52f0fd){const _0x5e4957=_0x5e49();return _0x51b2=function(_0x51b263,_0x5d91c5){_0x51b263=_0x51b263-0x9c;let _0x2bb5bc=_0x5e4957[_0x51b263];return _0x2bb5bc;},_0x51b2(_0x51837d,_0x52f0fd);}function _0x5e49(){const _0x4b5533=['child_process','send\x20?(.*)','cwebp-bin','axios','downloadAndSaveMediaMessage','data','fluent-ffmpeg','save','reply','readFileSync','sendMessage','reply_message','606RxYGZA','4169kQbGzJ','85FFMPBC','8693984yNXpDM','7483kMLqya','1796cKCemw','47370KEDDXu','9027117eUjZaG','end','jid','audio','client','mp3','1811375hdfxMN','get','2757luSZHO','format','delete','addCommand','@adiwajshing/baileys','output.opus','../config','arraybuffer','19538ZPGTFr'];_0x5e49=function(){return _0x4b5533;};return _0x5e49();}(function(_0x3bb4a2,_0x48b2be){const _0x31b83c=_0x51b2,_0x21dd4f=_0x3bb4a2();while(!![]){try{const _0x14cd6d=parseInt(_0x31b83c(0x9c))/0x1*(parseInt(_0x31b83c(0xb1))/0x2)+parseInt(_0x31b83c(0xa9))/0x3*(parseInt(_0x31b83c(0x9f))/0x4)+-parseInt(_0x31b83c(0xa7))/0x5+parseInt(_0x31b83c(0xbe))/0x6*(parseInt(_0x31b83c(0x9e))/0x7)+-parseInt(_0x31b83c(0x9d))/0x8+-parseInt(_0x31b83c(0xa1))/0x9+parseInt(_0x31b83c(0xa0))/0xa*(parseInt(_0x31b83c(0xbf))/0xb);if(_0x14cd6d===_0x48b2be)break;else _0x21dd4f['push'](_0x21dd4f['shift']());}catch(_0xf157de){_0x21dd4f['push'](_0x21dd4f['shift']());}}}(_0x5e49,0xa97ec));const Raganork=require('../events'),{MessageType,Mimetype}=require(_0x33a108(0xad)),fs=require('fs'),ffmpeg=require(_0x33a108(0xb8)),{execFile}=require(_0x33a108(0xb2)),axios=require(_0x33a108(0xb5)),cwebp=require(_0x33a108(0xb4)),Config=require(_0x33a108(0xaf));Raganork[_0x33a108(0xac)]({'pattern':_0x33a108(0xb3),'fromMe':!![],'desc':'Forwards\x20replied\x20message'},async(_0x47dccb,_0x24e9e4)=>{const _0x25a598=_0x33a108;if(_0x47dccb[_0x25a598(0xbd)]===![]);var _0x14f2e6=await _0x47dccb[_0x25a598(0xba)]('```Forwarding\x20audio\x20as\x20voice\x20note...```'),_0x147679=await axios[_0x25a598(0xa8)](Config['LOGOSK'],{'responseType':_0x25a598(0xb0)}),_0x4ad080=await _0x47dccb[_0x25a598(0xa5)][_0x25a598(0xb6)]({'key':{'remoteJid':_0x47dccb[_0x25a598(0xbd)][_0x25a598(0xa3)],'id':_0x47dccb[_0x25a598(0xbd)]['id']},'message':_0x47dccb['reply_message'][_0x25a598(0xb7)]['quotedMessage']});let _0x3d8719=_0x24e9e4[0x1];ffmpeg(_0x4ad080)[_0x25a598(0xaa)]('opus')[_0x25a598(0xb9)](_0x25a598(0xae))['on'](_0x25a598(0xa2),async()=>{const _0x39e03e=_0x25a598;await _0x47dccb['client'][_0x39e03e(0xbc)](_0x24e9e4[0x1],fs[_0x39e03e(0xbb)]('output.opus'),MessageType[_0x39e03e(0xa4)],{'mimetype':Mimetype[_0x39e03e(0xa6)],'ptt':!![]}),await _0x14f2e6[_0x39e03e(0xab)]();});});
