let H={chars:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encLookup:[],Init:function(){for(var t=0;t<4096;t++)this.encLookup[t]=this.chars[t>>6]+this.chars[t&63]},Encode:function(t){for(var i=t.length,a="",r=0;i>2;){let u=t[r]<<16|t[r+1]<<8|t[r+2];a+=this.encLookup[u>>12]+this.encLookup[u&4095],i-=3,r+=3}if(i>0){var p=(t[r]&252)>>2,o=(t[r]&3)<<4;if(i>1&&(o|=(t[++r]&240)>>4),a+=this.chars[p],a+=this.chars[o],i==2){var f=(t[r++]&15)<<2;f|=(t[r]&192)>>6,a+=this.chars[f]}i==1&&(a+="="),a+="="}return a}};H.Init();const D=function(t){this.data,this.wav,this.dataURI,this.data=[],this.wav=[],this.dataURI="",this.header={chunkId:[82,73,70,70],chunkSize:0,format:[87,65,86,69],subChunk1Id:[102,109,116,32],subChunk1Size:16,audioFormat:1,numChannels:1,sampleRate:8e3,byteRate:0,blockAlign:0,bitsPerSample:8,subChunk2Id:[100,97,116,97],subChunk2Size:0};function i(r){return[r&255,r>>8&255,r>>16&255,r>>24&255]}function a(r){return[r&255,r>>8&255]}this.Make=function(r){r instanceof Array&&(this.data=r),this.header.byteRate=this.header.sampleRate*this.header.numChannels*this.header.bitsPerSample>>3,this.header.blockAlign=this.header.numChannels*this.header.bitsPerSample>>3,this.header.subChunk2Size=this.data.length,this.header.chunkSize=36+this.header.subChunk2Size,this.wav=this.header.chunkId.concat(i(this.header.chunkSize),this.header.format,this.header.subChunk1Id,i(this.header.subChunk1Size),a(this.header.audioFormat),a(this.header.numChannels),i(this.header.sampleRate),i(this.header.byteRate),a(this.header.blockAlign),a(this.header.bitsPerSample),this.header.subChunk2Id,i(this.header.subChunk2Size),this.data),this.dataURI="data:audio/wav;base64,"+H.Encode(this.wav)},t instanceof Array&&this.Make(t)};var k=0,S=1,N=2,I=3,G=1,R=8;function d(){this.oldParams=!0,this.wave_type=k,this.p_env_attack=0,this.p_env_sustain=.3,this.p_env_punch=0,this.p_env_decay=.4,this.p_base_freq=.3,this.p_freq_limit=0,this.p_freq_ramp=0,this.p_freq_dramp=0,this.p_vib_strength=0,this.p_vib_speed=0,this.p_arp_mod=0,this.p_arp_speed=0,this.p_duty=0,this.p_duty_ramp=0,this.p_repeat_speed=0,this.p_pha_offset=0,this.p_pha_ramp=0,this.p_lpf_freq=1,this.p_lpf_ramp=0,this.p_lpf_resonance=0,this.p_hpf_freq=0,this.p_hpf_ramp=0,this.sound_vol=.5,this.sample_rate=44100,this.sample_size=8}function P(t){return t*t}function W(t){return t*t*t}function e(t){return Math.random()*t}function M(t,i){return Math.random()*(i-t)+t}function h(t){return Math.floor(Math.random()*(t+1))}function A(t,i,a){return t<<31|i<<23|a}function Q(t){if(isNaN(t))return A(0,255,4919);var i=t<0?1:0;if(t=Math.abs(t),t==0)return A(i,0,0);var a=Math.floor(Math.log(t)/Math.LN2);if(a>127||a<-126)return A(i,255,0);var r=t/Math.pow(2,a);return A(i,a+127,r*Math.pow(2,23)&8388607)}function Y(t){var i=t&2147483648?-1:1,a=(t>>23&255)-127,r=t&~(-1<<23);if(a==128)return i*(r?Number.NaN:Number.POSITIVE_INFINITY);if(a==-127){if(r==0)return i*0;a=-126,r/=1<<22}else r=(r|1<<23)/(1<<23);return i*r*Math.pow(2,a)}var J="123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",z=["wave_type","p_env_attack","p_env_sustain","p_env_punch","p_env_decay","p_base_freq","p_freq_limit","p_freq_ramp","p_freq_dramp","p_vib_strength","p_vib_speed","p_arp_mod","p_arp_speed","p_duty","p_duty_ramp","p_repeat_speed","p_pha_offset","p_pha_ramp","p_lpf_freq","p_lpf_ramp","p_lpf_resonance","p_hpf_freq","p_hpf_ramp"];d.prototype.toB58=function(){var t=[];for(var i in z){var a=z[i];if(a=="wave_type")t.push(this[a]);else if(a.indexOf("p_")==0){var r=this[a];r=Q(r),t.push(255&r),t.push(255&r>>8),t.push(255&r>>16),t.push(255&r>>24)}}return function(p,o){var f=[],u="",s,n,v,l;for(s in p)for(n=0,v=p[s],u+=v||u.length^s?"":1;n in f||v;)l=f[n],l=l?l*256+v:v,v=l/58|0,f[n]=l%58,n++;for(;n--;)u+=o[f[n]];return u}(t,J)};d.prototype.fromB58=function(t){return this.fromJSON(m.b58decode(t)),this};d.prototype.fromJSON=function(t){for(var i in t)t.hasOwnProperty(i)&&(this[i]=t[i]);return this};d.prototype.pickupCoin=function(){return this.wave_type=S,this.p_base_freq=.4+e(.5),this.p_env_attack=0,this.p_env_sustain=e(.1),this.p_env_decay=.1+e(.4),this.p_env_punch=.3+e(.3),h(1)&&(this.p_arp_speed=.5+e(.2),this.p_arp_mod=.2+e(.4)),this};d.prototype.laserShoot=function(){return this.wave_type=h(2),this.wave_type===N&&h(1)&&(this.wave_type=h(1)),h(2)===0?(this.p_base_freq=.3+e(.6),this.p_freq_limit=e(.1),this.p_freq_ramp=-.35-e(.3)):(this.p_base_freq=.5+e(.5),this.p_freq_limit=this.p_base_freq-.2-e(.6),this.p_freq_limit<.2&&(this.p_freq_limit=.2),this.p_freq_ramp=-.15-e(.2)),this.wave_type===S&&(this.p_duty=1),h(1)?(this.p_duty=e(.5),this.p_duty_ramp=e(.2)):(this.p_duty=.4+e(.5),this.p_duty_ramp=-e(.7)),this.p_env_attack=0,this.p_env_sustain=.1+e(.2),this.p_env_decay=e(.4),h(1)&&(this.p_env_punch=e(.3)),h(2)===0&&(this.p_pha_offset=e(.2),this.p_pha_ramp=-e(.2)),this.p_hpf_freq=e(.3),this};d.prototype.explosion=function(){return this.wave_type=I,h(1)?(this.p_base_freq=P(.1+e(.4)),this.p_freq_ramp=-.1+e(.4)):(this.p_base_freq=P(.2+e(.7)),this.p_freq_ramp=-.2-e(.2)),h(4)===0&&(this.p_freq_ramp=0),h(2)===0&&(this.p_repeat_speed=.3+e(.5)),this.p_env_attack=0,this.p_env_sustain=.1+e(.3),this.p_env_decay=e(.5),h(1)&&(this.p_pha_offset=-.3+e(.9),this.p_pha_ramp=-e(.3)),this.p_env_punch=.2+e(.6),h(1)&&(this.p_vib_strength=e(.7),this.p_vib_speed=e(.6)),h(2)===0&&(this.p_arp_speed=.6+e(.3),this.p_arp_mod=.8-e(1.6)),this};d.prototype.powerUp=function(){return h(1)?(this.wave_type=S,this.p_duty=1):this.p_duty=e(.6),this.p_base_freq=.2+e(.3),h(1)?(this.p_freq_ramp=.1+e(.4),this.p_repeat_speed=.4+e(.4)):(this.p_freq_ramp=.05+e(.2),h(1)&&(this.p_vib_strength=e(.7),this.p_vib_speed=e(.6))),this.p_env_attack=0,this.p_env_sustain=e(.4),this.p_env_decay=.1+e(.4),this};d.prototype.hitHurt=function(){return this.wave_type=h(2),this.wave_type===N&&(this.wave_type=I),this.wave_type===k&&(this.p_duty=e(.6)),this.wave_type===S&&(this.p_duty=1),this.p_base_freq=.2+e(.6),this.p_freq_ramp=-.3-e(.4),this.p_env_attack=0,this.p_env_sustain=e(.1),this.p_env_decay=.1+e(.2),h(1)&&(this.p_hpf_freq=e(.3)),this};d.prototype.jump=function(){return this.wave_type=k,this.p_duty=e(.6),this.p_base_freq=.3+e(.3),this.p_freq_ramp=.1+e(.2),this.p_env_attack=0,this.p_env_sustain=.1+e(.3),this.p_env_decay=.1+e(.2),h(1)&&(this.p_hpf_freq=e(.3)),h(1)&&(this.p_lpf_freq=1-e(.6)),this};d.prototype.blipSelect=function(){return this.wave_type=h(1),this.wave_type===k?this.p_duty=e(.6):this.p_duty=1,this.p_base_freq=.2+e(.4),this.p_env_attack=0,this.p_env_sustain=.1+e(.1),this.p_env_decay=e(.2),this.p_hpf_freq=.1,this};d.prototype.synth=function(){return this.wave_type=h(1),this.p_base_freq=[.2723171360931539,.19255692561524382,.13615778746815113][h(2)],this.p_env_attack=h(4)>3?e(.5):0,this.p_env_sustain=e(1),this.p_env_punch=e(1),this.p_env_decay=e(.9)+.1,this.p_arp_mod=[0,0,0,0,-.3162,.7454,.7454][h(6)],this.p_arp_speed=e(.5)+.4,this.p_duty=e(1),this.p_duty_ramp=h(2)==2?e(1):0,this.p_lpf_freq=[1,.9*e(1)*e(1)+.1][h(1)],this.p_lpf_ramp=M(-1,1),this.p_lpf_resonance=e(1),this.p_hpf_freq=h(3)==3?e(1):0,this.p_hpf_ramp=h(3)==3?e(1):0,this};d.prototype.tone=function(){return this.wave_type=N,this.p_base_freq=.35173364,this.p_env_attack=0,this.p_env_sustain=.6641,this.p_env_decay=0,this.p_env_punch=0,this};d.prototype.click=function(){const t=["explosion","hitHurt"][h(1)];return this[t](),h(1)&&(this.p_freq_ramp=-.5+e(1)),h(1)&&(this.p_env_sustain=(e(.4)+.2)*this.p_env_sustain,this.p_env_decay=(e(.4)+.2)*this.p_env_decay),h(3)==0&&(this.p_env_attack=e(.3)),this.p_base_freq=1-e(.25),this.p_hpf_freq=1-e(.1),this};d.prototype.random=function(){return this.wave_type=h(3),h(1)?this.p_base_freq=W(e(2)-1)+.5:this.p_base_freq=P(e(1)),this.p_freq_limit=0,this.p_freq_ramp=Math.pow(e(2)-1,5),this.p_base_freq>.7&&this.p_freq_ramp>.2&&(this.p_freq_ramp=-this.p_freq_ramp),this.p_base_freq<.2&&this.p_freq_ramp<-.05&&(this.p_freq_ramp=-this.p_freq_ramp),this.p_freq_dramp=Math.pow(e(2)-1,3),this.p_duty=e(2)-1,this.p_duty_ramp=Math.pow(e(2)-1,3),this.p_vib_strength=Math.pow(e(2)-1,3),this.p_vib_speed=M(-1,1),this.p_env_attack=W(M(-1,1)),this.p_env_sustain=P(M(-1,1)),this.p_env_decay=M(-1,1),this.p_env_punch=Math.pow(e(.8),2),this.p_env_attack+this.p_env_sustain+this.p_env_decay<.2&&(this.p_env_sustain+=.2+e(.3),this.p_env_decay+=.2+e(.3)),this.p_lpf_resonance=M(-1,1),this.p_lpf_freq=1-Math.pow(e(1),3),this.p_lpf_ramp=Math.pow(e(2)-1,3),this.p_lpf_freq<.1&&this.p_lpf_ramp<-.05&&(this.p_lpf_ramp=-this.p_lpf_ramp),this.p_hpf_freq=Math.pow(e(1),5),this.p_hpf_ramp=Math.pow(e(2)-1,5),this.p_pha_offset=Math.pow(e(2)-1,3),this.p_pha_ramp=Math.pow(e(2)-1,3),this.p_repeat_speed=e(2)-1,this.p_arp_speed=e(2)-1,this.p_arp_mod=e(2)-1,this};d.prototype.mutate=function(){return h(1)&&(this.p_base_freq+=e(.1)-.05),h(1)&&(this.p_freq_ramp+=e(.1)-.05),h(1)&&(this.p_freq_dramp+=e(.1)-.05),h(1)&&(this.p_duty+=e(.1)-.05),h(1)&&(this.p_duty_ramp+=e(.1)-.05),h(1)&&(this.p_vib_strength+=e(.1)-.05),h(1)&&(this.p_vib_speed+=e(.1)-.05),h(1)&&(this.p_vib_delay+=e(.1)-.05),h(1)&&(this.p_env_attack+=e(.1)-.05),h(1)&&(this.p_env_sustain+=e(.1)-.05),h(1)&&(this.p_env_decay+=e(.1)-.05),h(1)&&(this.p_env_punch+=e(.1)-.05),h(1)&&(this.p_lpf_resonance+=e(.1)-.05),h(1)&&(this.p_lpf_freq+=e(.1)-.05),h(1)&&(this.p_lpf_ramp+=e(.1)-.05),h(1)&&(this.p_hpf_freq+=e(.1)-.05),h(1)&&(this.p_hpf_ramp+=e(.1)-.05),h(1)&&(this.p_pha_offset+=e(.1)-.05),h(1)&&(this.p_pha_ramp+=e(.1)-.05),h(1)&&(this.p_repeat_speed+=e(.1)-.05),h(1)&&(this.p_arp_speed+=e(.1)-.05),h(1)&&(this.p_arp_mod+=e(.1)-.05),this};var m;const X=m={};m.toBuffer=function(t){return new q(t).getRawBuffer().buffer};m.toWebAudio=function(t,i){var a=new q(t),r=a.getRawBuffer().normalized;if(i){for(var p=i.createBuffer(1,r.length,a.sampleRate),o=p.getChannelData(0),f=0;f<r.length;f++)o[f]=r[f];var u=i.createBufferSource();return u.buffer=p,u}};m.toWave=function(t){return new q(t).generate()};m.toAudio=function(t){return m.toWave(t).getAudio()};m.play=function(t){return m.toAudio(t).play()};m.b58decode=function(t){var i=function(u,s){var n=[],v=[],l,c,w,b;for(l in u){if(c=0,w=s.indexOf(u[l]),w<0)return;for(w||v.length^l||v.push(0);c in n||w;)b=n[c],b=b?b*58+w:w,w=b>>8,n[c]=b%256,c++}for(;c--;)v.push(n[c]);return new Uint8Array(v)}(t,J),a={};for(var r in z){var p=z[r],o=(r-1)*4+1;if(p=="wave_type")a[p]=i[0];else{var f=i[o]|i[o+1]<<8|i[o+2]<<16|i[o+3]<<24;a[p]=Y(f)}}return a};m.b58encode=function(t){var i=new d;return i.fromJSON(t),i.toB58()};m.generate=function(t,i){const a=new d,r=i||{};return a.sound_vol=r.sound_vol||.25,a.sample_rate=r.sample_rate||44100,a.sample_size=r.sample_size||8,a[t]()};function q(t){if(typeof t=="string"){var i=new d;t.indexOf("#")==0&&(t=t.slice(1)),t=i.fromB58(t)}this.init(t)}q.prototype.init=function(t){this.parameters=t,this.initForRepeat(),this.waveShape=parseInt(t.wave_type),this.fltw=Math.pow(t.p_lpf_freq,3)*.1,this.enableLowPassFilter=t.p_lpf_freq!=1,this.fltw_d=1+t.p_lpf_ramp*1e-4,this.fltdmp=5/(1+Math.pow(t.p_lpf_resonance,2)*20)*(.01+this.fltw),this.fltdmp>.8&&(this.fltdmp=.8),this.flthp=Math.pow(t.p_hpf_freq,2)*.1,this.flthp_d=1+t.p_hpf_ramp*3e-4,this.vibratoSpeed=Math.pow(t.p_vib_speed,2)*.01,this.vibratoAmplitude=t.p_vib_strength*.5,this.envelopeLength=[Math.floor(t.p_env_attack*t.p_env_attack*1e5),Math.floor(t.p_env_sustain*t.p_env_sustain*1e5),Math.floor(t.p_env_decay*t.p_env_decay*1e5)],this.envelopePunch=t.p_env_punch,this.flangerOffset=Math.pow(t.p_pha_offset,2)*1020,t.p_pha_offset<0&&(this.flangerOffset=-this.flangerOffset),this.flangerOffsetSlide=Math.pow(t.p_pha_ramp,2)*1,t.p_pha_ramp<0&&(this.flangerOffsetSlide=-this.flangerOffsetSlide),this.repeatTime=Math.floor(Math.pow(1-t.p_repeat_speed,2)*2e4+32),t.p_repeat_speed===0&&(this.repeatTime=0),this.gain=Math.exp(t.sound_vol)-1,this.sampleRate=t.sample_rate,this.bitsPerChannel=t.sample_size};q.prototype.initForRepeat=function(){var t=this.parameters;this.elapsedSinceRepeat=0,this.period=100/(t.p_base_freq*t.p_base_freq+.001),this.periodMax=100/(t.p_freq_limit*t.p_freq_limit+.001),this.enableFrequencyCutoff=t.p_freq_limit>0,this.periodMult=1-Math.pow(t.p_freq_ramp,3)*.01,this.periodMultSlide=-Math.pow(t.p_freq_dramp,3)*1e-6,this.dutyCycle=.5-t.p_duty*.5,this.dutyCycleSlide=-t.p_duty_ramp*5e-5,t.p_arp_mod>=0?this.arpeggioMultiplier=1-Math.pow(t.p_arp_mod,2)*.9:this.arpeggioMultiplier=1+Math.pow(t.p_arp_mod,2)*10,this.arpeggioTime=Math.floor(Math.pow(1-t.p_arp_speed,2)*2e4+32),t.p_arp_speed===1&&(this.arpeggioTime=0)};q.prototype.getRawBuffer=function(){for(var t=0,i=0,a=0,r=Array(32),p=0;p<32;++p)r[p]=Math.random()*2-1;for(var o=0,f=0,u=0,s=0,n=0,v=Array(1024),p=0;p<1024;++p)v[p]=0;for(var l=0,c=[],w=[],b=0,B=0,E=Math.floor(44100/this.sampleRate),L=0;this.repeatTime!=0&&++this.elapsedSinceRepeat>=this.repeatTime&&this.initForRepeat(),this.arpeggioTime!=0&&L>=this.arpeggioTime&&(this.arpeggioTime=0,this.period*=this.arpeggioMultiplier),this.periodMult+=this.periodMultSlide,this.period*=this.periodMult,!(this.period>this.periodMax&&(this.period=this.periodMax,this.enableFrequencyCutoff));++L){var U=this.period;this.vibratoAmplitude>0&&(u+=this.vibratoSpeed,U=this.period*(1+Math.sin(u)*this.vibratoAmplitude));var g=Math.floor(U);if(g<R&&(g=R),this.dutyCycle+=this.dutyCycleSlide,this.dutyCycle<0&&(this.dutyCycle=0),this.dutyCycle>.5&&(this.dutyCycle=.5),++f>this.envelopeLength[o]&&(f=0,++o>2))break;var C,T=f/this.envelopeLength[o];o===0?C=T:o===1?C=1+(1-T)*2*this.envelopePunch:C=1-T,this.flangerOffset+=this.flangerOffsetSlide;var F=Math.abs(Math.floor(this.flangerOffset));F>1023&&(F=1023),this.flthp_d!=0&&(this.flthp*=this.flthp_d,this.flthp<1e-5&&(this.flthp=1e-5),this.flthp>.1&&(this.flthp=.1));for(var _=0,V=0;V<R;++V){var y=0;if(s++,s>=g&&(s%=g,this.waveShape===I))for(var p=0;p<32;++p)r[p]=Math.random()*2-1;var x=s/g;if(this.waveShape===k)x<this.dutyCycle?y=.5:y=-.5;else if(this.waveShape===S)x<this.dutyCycle?y=-1+2*x/this.dutyCycle:y=1-2*(x-this.dutyCycle)/(1-this.dutyCycle);else if(this.waveShape===N)y=Math.sin(x*2*Math.PI);else if(this.waveShape===I)y=r[Math.floor(s*32/g)];else throw"ERROR: Bad wave type: "+this.waveShape;var j=t;this.fltw*=this.fltw_d,this.fltw<0&&(this.fltw=0),this.fltw>.1&&(this.fltw=.1),this.enableLowPassFilter?(i+=(y-t)*this.fltw,i-=i*this.fltdmp):(t=y,i=0),t+=i,a+=t-j,a-=a*this.flthp,y=a,v[n&1023]=y,y+=v[n-F+1024&1023],n=n+1&1023,_+=y*C}if(b+=_,++B>=E)B=0,_=b/E,b=0;else continue;_=_/R*G,_*=this.gain,w.push(_),this.bitsPerChannel===8?(_=Math.floor((_+1)*128),_>255?(_=255,++l):_<0&&(_=0,++l),c.push(_)):(_=Math.floor(_*32768),_>=32768?(_=32767,++l):_<-32768&&(_=-32768,++l),c.push(_&255),c.push(_>>8&255))}return{buffer:c,normalized:w,clipped:l}};q.prototype.generate=function(){var t=this.getRawBuffer(),i=new D;return i.header.sampleRate=this.sampleRate,i.header.bitsPerSample=this.bitsPerChannel,i.Make(t.buffer),i.clipping=t.clipped,i.buffer=t.normalized,i.getAudio=K(i),i};var O=null,K=function(t){return function(){var i=null;if(O||("AudioContext"in window?O=new AudioContext:"webkitAudioContext"in window&&(O=new webkitAudioContext)),i=O,i){for(var a=i.createBuffer(1,t.buffer.length,t.header.sampleRate),r=a.getChannelData(0),p=0;p<t.buffer.length;p++)r[p]=t.buffer[p];var o=1,f={channels:[],setVolume:function(s){return o=s,f},play:function(){var s=i.createBufferSource();s.buffer=a;var n=i.createGain();return n.gain.value=o,n.connect(i.destination),s.connect(n),s.start?s.start():s.noteOn&&s.noteOn(0),this.channels.push(s),s}};return f}else{var u=new Audio;return u.src=t.dataURI,u}}};export{X as default};