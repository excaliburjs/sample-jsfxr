import { SoundConfig } from "@excaliburjs/excalibur-jsfxr";
import { sndPlugin } from "./main";
import { sounds } from "./sounds";

function playSound(model: any, snd: any) {
  let wavetype;
  if (model.squareWave.checked == true) {
    wavetype = 0;
  } else if (model.sawtoothWave.checked == true) {
    wavetype = 1;
  } else if (model.sineWave.checked == true) {
    wavetype = 2;
  } else {
    wavetype = 3;
  }

  let sampleRate = 44100;
  if (model.rate44k.checked == true) {
    sampleRate = 44100;
  } else if (model.rate22k.checked == true) {
    sampleRate = 22050;
  } else if (model.rate11k.checked == true) {
    sampleRate = 11025;
  } else {
    sampleRate = 5512;
  }

  let sampleSize;
  if (model.size8bit.checked == true) {
    sampleSize = 8;
  } else {
    sampleSize = 16;
  }

  let dutycycle;
  let dutyramp;
  if (model.disableTextGetter) {
    dutycycle = 0.0;
    dutyramp = 0.0;
  } else {
    dutycycle = model.dcCycle.value;
    dutyramp = model.dcSweep.value;
  }

  const tempSound: SoundConfig = {
    oldParams: true,
    wave_type: wavetype,
    p_env_attack: model.attack.value,
    p_env_sustain: model.sustain.value,
    p_env_punch: model.punch.value,
    p_env_decay: model.decay.value,
    p_base_freq: model.fstart.value,
    p_freq_limit: model.fmin.value,
    p_freq_ramp: model.fslide.value,
    p_freq_dramp: model.fdelta.value,
    p_vib_strength: model.vibDepth.value,
    p_vib_speed: model.vibSpeed.value,
    p_arp_mod: model.arpMult.value,
    p_arp_speed: model.arpChange.value,
    p_duty: dutycycle,
    p_duty_ramp: dutyramp,
    p_repeat_speed: model.reRate.value,
    p_pha_offset: model.flgOffset.value,
    p_pha_ramp: model.flgSweep.value,
    p_lpf_freq: model.lopassFreq.value,
    p_lpf_ramp: model.lopassSweep.value,
    p_lpf_resonance: model.lopassRes.value,
    p_hpf_freq: model.hipassFreq.value,
    p_hpf_ramp: model.hipassSweep.value,
    sound_vol: model.Gain.value,
    sample_rate: sampleRate, //441000, 22050, 11025, 5512
    sample_size: sampleSize, //16, 8
  };

  snd.playConfig(tempSound);
}

function addSound(model: any, snd: any) {
  let soundname = model.inutName.value;
  let wavetype;
  if (model.squareWave.checked == true) {
    wavetype = 0;
  } else if (model.sawtoothWave.checked == true) {
    wavetype = 1;
  } else if (model.sineWave.checked == true) {
    wavetype = 2;
  } else {
    wavetype = 3;
  }

  let sampleRate = 44100;
  if (model.rate44k.checked == true) {
    sampleRate = 44100;
  } else if (model.rate22k.checked == true) {
    sampleRate = 22050;
  } else if (model.rate11k.checked == true) {
    sampleRate = 11025;
  } else {
    sampleRate = 5512;
  }

  let sampleSize;
  if (model.size8bit.checked == true) {
    sampleSize = 8;
  } else {
    sampleSize = 16;
  }

  let dutycycle;
  let dutyramp;
  if (model.disableTextGetter) {
    dutycycle = 0.0;
    dutyramp = 0.0;
  } else {
    dutycycle = model.dcCycle.value;
    dutyramp = model.dcSweep.value;
  }

  const tempSound: SoundConfig = {
    oldParams: true,
    wave_type: wavetype,
    p_env_attack: parseFloat(model.attack.value),
    p_env_sustain: parseFloat(model.sustain.value), //model.sustain.value,model.sustain.value,
    p_env_punch: parseFloat(model.punch.value), //model.punch.value,
    p_env_decay: parseFloat(model.decay.value), //model.decay.value,
    p_base_freq: parseFloat(model.fstart.value),
    p_freq_limit: parseFloat(model.fmin.value),
    p_freq_ramp: parseFloat(model.fslide.value),
    p_freq_dramp: parseFloat(model.fdelta.value),
    p_vib_strength: parseFloat(model.vibDepth.value),
    p_vib_speed: parseFloat(model.vibSpeed.value),
    p_arp_mod: parseFloat(model.arpMult.value),
    p_arp_speed: parseFloat(model.arpChange.value),
    p_duty: parseFloat(dutycycle),
    p_duty_ramp: parseFloat(dutyramp), //dutyramp,
    p_repeat_speed: parseFloat(model.reRate.value),
    p_pha_offset: parseFloat(model.flgOffset.value),
    p_pha_ramp: parseFloat(model.flgSweep.value),
    p_lpf_freq: parseFloat(model.lopassFreq.value),
    p_lpf_ramp: parseFloat(model.lopassSweep.value),
    p_lpf_resonance: parseFloat(model.lopassRes.value),
    p_hpf_freq: parseFloat(model.hipassFreq.value),
    p_hpf_ramp: parseFloat(model.hipassSweep.value),
    sound_vol: parseFloat(model.Gain.value),
    sample_rate: sampleRate, //441000, 22050, 11025, 5512
    sample_size: sampleSize, //16, 8
  };

  snd.loadSoundConfig(soundname, tempSound);
  model.sounds.push(soundname);
}

function randomSound(model: any, object: any, snd: any) {
  let wavetype = Math.floor(Math.random() * 4);
  model.inutName.value = "random_" + Math.floor(Math.random() * 10000).toString();
  let sampleRate = 44100;
  if (model.rate44k.checked == true) {
    sampleRate = 44100;
  } else if (model.rate22k.checked == true) {
    sampleRate = 22050;
  } else if (model.rate11k.checked == true) {
    sampleRate = 11025;
  } else {
    sampleRate = 5512;
  }

  let sampleSize;
  if (model.size8bit.checked == true) {
    sampleSize = 8;
  }
  {
    sampleSize = 16;
  }

  //start algo from jsfx
  let fstart;
  if (Math.random() < 0.5) {
    let core = Math.random() * 2;
    core = core - 1;
    core = core * core * core;
    fstart = core + 0.5;
  } else {
    fstart = Math.sqrt(Math.random());
  }
  let fmin = 0;
  let fslide = Math.pow(Math.random() * 2 - 1, 5);
  if (fstart > 0.7 && fslide > 0.2) {
    fslide = -fslide;
  }
  if (fstart < 0.2 && fslide < -0.05) {
    fslide = -fslide;
  }
  let fdelta = Math.pow(Math.random() * 2 - 1, 3);
  let duty = Math.random() * 2 - 1;
  let dutySweep = Math.pow(Math.random() * 2 - 1, 3);

  let vibDepth = Math.pow(Math.random() * 2 - 1, 3);
  let vibSpeed = Math.random() * 2.0 - 1.0;

  let core = Math.random() * 2.0 - 1.0;
  let attack = core * core * core;
  core = Math.random() * 2.0 - 1.0;
  let sustain = core * core;
  let decay = Math.random() * 2.0 - 1.0;
  let punch = Math.pow(Math.random() * 0.8, 2);

  if (attack + sustain + decay < 0.2) {
    sustain += 0.2 + Math.random() * 0.3;
    decay += 0.2 + Math.random() * 0.3;
  }

  let lopassRes = Math.random() * 2 - 1;
  let lopassFreq = 1 - Math.pow(Math.random(), 3);
  let lopassSweep = Math.pow(Math.random() * 2 - 1, 3);

  if (lopassFreq < 0.1 && lopassSweep < -0.05) {
    lopassSweep = -lopassSweep;
  }

  let hipassFreq = Math.pow(Math.random(), 5);
  let hipassSweep = Math.pow(Math.random() * 2 - 1, 5);
  let flgOffset = Math.pow(Math.random() * 2 - 1, 3);
  let flgSweep = Math.pow(Math.random() * 2 - 1, 3);
  let reRate = Math.random() * 2 - 1;
  let arpChange = Math.random() * 2 - 1;
  let arpMult = Math.random() * 2 - 1;

  let gain = parseFloat(object.$model.Gain.value);

  let tempSound: SoundConfig = {
    oldParams: true,
    wave_type: wavetype,
    p_env_attack: attack,
    p_env_sustain: sustain,
    p_env_punch: punch,
    p_env_decay: decay,
    p_base_freq: fstart,
    p_freq_limit: fmin,
    p_freq_ramp: fslide,
    p_freq_dramp: fdelta,
    p_vib_strength: vibDepth,
    p_vib_speed: vibSpeed,
    p_arp_mod: arpMult,
    p_arp_speed: arpChange,
    p_duty: duty,
    p_duty_ramp: dutySweep,
    p_repeat_speed: reRate,
    p_pha_offset: flgOffset,
    p_pha_ramp: flgSweep,
    p_lpf_freq: lopassFreq,
    p_lpf_ramp: lopassSweep,
    p_lpf_resonance: lopassRes,
    p_hpf_freq: hipassFreq,
    p_hpf_ramp: hipassSweep,
    sound_vol: gain,
    sample_rate: sampleRate,
    sample_size: sampleSize,
  };

  //update UI
  //updating waveform
  if (wavetype == 0) {
    object.$model.squareWave.checked = true;
  } else if (wavetype == 1) {
    object.$model.sawtoothWave.checked = true;
  } else if (wavetype == 2) {
    object.$model.sineWave.checked = true;
  } else {
    object.$model.noiseWave.checked = true;
  }
  object.$model.attack.value = attack.toString();
  object.$model.sustain.value = sustain.toString();
  object.$model.punch.value = punch.toString();
  object.$model.decay.value = decay.toString();
  object.$model.fstart.value = fstart.toString();
  object.$model.fmin.value = fmin.toString();
  object.$model.fslide.value = fslide.toString();
  object.$model.fdelta.value = fdelta.toString();
  object.$model.vibDepth.value = vibDepth.toString();
  object.$model.vibSpeed.value = vibSpeed.toString();
  object.$model.arpMult.value = arpMult.toString();
  object.$model.arpChange.value = arpChange.toString();
  object.$model.dcCycle.value = duty.toString();
  object.$model.dcSweep.value = dutySweep.toString();
  object.$model.reRate.value = reRate.toString();
  object.$model.flgOffset.value = flgOffset.toString();
  object.$model.flgSweep.value = flgSweep.toString();
  object.$model.lopassFreq.value = lopassFreq.toString();
  object.$model.lopassSweep.value = lopassSweep.toString();
  object.$model.lopassRes.value = lopassRes.toString();
  object.$model.hipassFreq.value = hipassFreq.toString();
  object.$model.hipassSweep.value = hipassSweep.toString();

  snd.playConfig(tempSound);
}

function exportSounds(snd: any, sounds: any) {
  console.log("*********************************");
  console.log("Sounds Object");
  console.log("*********************************");
  console.log(snd.getConfigs());
  let fileText = `//sounds.ts 
    import { SoundConfig } from "@excaliburjs/excalibur-jsfxr "; 
    export const sounds: { [key: string]: SoundConfig } = {}; 
       
    `;
  for (const sound in sounds) {
    fileText += `sounds["${sound}"] = ${JSON.stringify(sounds[sound])};\n`;
  }
  console.log(fileText);
  download("sounds.ts", fileText);
}

function download(filename: string, text: string) {
  var element = document.createElement("a");
  element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(text));
  element.setAttribute("download", filename);

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

export const model = {
  hudWidth: 850,
  hudHeight: 600,
  wavetype: 1,
  disableText: "",
  get disableTextGetter() {
    return this.disableText == "disabled";
  },
  setWaveType(e: any, m: any, a: any, o: any) {
    this.wavetype = parseInt(a.value);

    if (this.wavetype == 0 || this.wavetype == 1) {
      this.disableText = "";
    } else this.disableText = "disabled";
  },

  playSound: (e: any, m: any, a: any, o: any) => {
    playSound(m, sndPlugin);
  },
  addSound: (e: any, m: any, a: any, o: any) => {
    addSound(m, sndPlugin);
  },
  randomSound: (e: any, m: any, a: any, other: any, o: any) => {
    randomSound(m, o, sndPlugin);
  },
  playRecordedSound: (e: any, m: any, a: any, o: any) => {
    const b = (a as HTMLElement).parentNode?.parentNode;
    const c = b?.firstChild?.nextSibling?.firstChild;
    //@ts-ignore
    const tempSound = c?.wholeText;
    sndPlugin.playSound(tempSound);
  },
  deleteRecordedSound: (e: any, m: any, a: any, ev: any, o: any) => {
    const b = (a as HTMLElement).parentNode?.parentNode;
    const c = b?.firstChild?.nextSibling?.firstChild;
    //@ts-ignore
    const tempSound = c?.wholeText;
    sndPlugin.deleteSoundConfig(tempSound);

    o.$parent.$model.sounds = o.$parent.$model.sounds.filter((sound: string) => {
      return sound !== tempSound;
    });
  },
  exportObject: (e: any, m: any, a: any, o: any) => {
    exportSounds(sndPlugin, sounds);
  },
  sounds: [] as string[],
  inutName: undefined as HTMLInputElement | undefined,
};
