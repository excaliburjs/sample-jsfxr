export const template = `
<style> 
    hud-layer{
        position: fixed;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
        width: \${hudWidth}px;
        height: \${hudHeight}px;
        border: 1px solid black; 
        pointer-events: none;
        display: flex;
        justify-content: center;
        align-items: center;
        
    }
</style> 

<div> 
    <canvas id='cnv'> </canvas> 
    <hud-layer> 
        <button class=" playSound" \${click@=>playSound}> Play Sound </button>
        <button class=" addSound" \${click@=>addSound}> Add Sound </button>
        <button class=" randomSound" \${click@=>randomSound}> Randomize </button>
        <div style="width: 75%; height: 93%; top: 8px; position: relative; display: flex; flex-direction: column; align-items: flex-start; justify-content: center; flex-wrap: wrap; margin: 10px;gap: 3px;">
            <span style="font-size: 24px;"> Build a New Sound</span>
            <div>
                <label> Sound Name: </label>
                <input \${==>inutName} value="soundname"></input>
            </div>
            <div style="background-color: #d0e3e9; border: 1px solid #929fa4; border-radius: 5px; color: #131617;  pointer-events: all; gap: 5px;padding: 5px ">
                <spam> Waveform Type: </span>
                <div>
                    <label for="squareWave"> Square </label>
                    <input id="squareWave" type="radio" name="wave" \${==>squareWave} \${click@=>setWaveType} value="0"></input>
                </div>
                <div>
                    <label for="sawtoothWave"> Sawtooth </label>
                    <input id ="sawtoothWave" type="radio" name="wave" \${==>sawtoothWave} \${click@=>setWaveType} value="1" checked></input>
                </div>
                <div> 
                    <label for="sineWave"> Sine </label>
                    <input id ="sineWave" type="radio" name="wave" \${==>sineWave} \${click@=>setWaveType} value="2"></input>
                </div>
                <div> 
                <label for="noiseWave"> Noise </label>
                <input id ="noiseWave" type="radio" name="wave" \${==>noiseWave} \${click@=>setWaveType} value="3"></input>
            </div>
            </div>
            <div style="background-color: #d0e3e9; border: 1px solid #929fa4; border-radius: 5px; color: #131617;  pointer-events: all; gap: 5px;padding: 5px ">
                <span> Envelope: </span>
                <div>
                    <label for="attack"> Attack </label>
                    <input id="attack" type="range" min="0.00" max="1.0" step="0.001" \${==>attack} value="0"></input>
                </div>
                <div>
                    <label for="sustain"> Sustain </label>
                    <input id="sustain" type="range"  min="0.00" max="1.0" step="0.001" \${==>sustain} value="0.072"></input>
                </div>
                <div>

                    <label for="punch"> Punch </label>
                    <input id="punch" type="range"  min="0.00" max="1.0" step="0.001" \${==>punch} value="0.489"></input>
                </div>
                <div>
                    <label for="decay"> Decay </label>
                    <input id="decay" type="range"  min="0.00" max="1.0" step="0.001" \${==>decay} value="0.254"></input>
                </div>
            </div>

            <div style="background-color: #d0e3e9; border: 1px solid #929fa4; border-radius: 5px; color: #131617;  pointer-events: all; gap: 5px;padding: 5px ">
                <span> Frequency: </span>
                <div>
                    <label for="fstart">Start</label>
                    <input id="fstart" type="range" min="0.00" max="1.0" step="0.01" \${==>fstart} value="0.683"></input>
                </div>
                <div>
                    <label for="fmin"> Min </label>
                    <input id="fmin" type="range" min="0.00" max="1.0" step="0.01" \${==>fmin} value="0.00"></input>
                </div>
                <div>

                    <label for="fslide"> Slide </label>
                    <input id="fslide" type="range" min="-1.00" max="1.00" step="0.01" \${==>fslide} value="0"></input>
                </div>
                <div>
                    <label for="fdelta"> Delta </label>
                    <input id="fdelta" type="range" min="-1.00" max="1.00" step="0.01" \${==>fdelta} value="0"></input>
                </div>
            </div>


            <div style="background-color: #d0e3e9; border: 1px solid #929fa4; border-radius: 5px; color: #131617;  pointer-events: all; gap: 5px;padding: 5px ">
                <span> Vibrato: </span>
                <div>
                    <label for="vibDepth">Depth</label>
                    <input id="vibDepth" type="range" min="0.00" max="1.0" step="0.01" \${==>vibDepth} value="0.00"></input>
                </div>
                <div>
                    <label for="vibSpeed"> Speed </label>
                    <input id="vibSpeed" type="range" min="0.00" max="1.0" step="0.01" \${==>vibSpeed} value="0.00"></input>
                </div>
                
            </div>

            
            <div style="background-color: #d0e3e9; border: 1px solid #929fa4; border-radius: 5px; color: #131617;  pointer-events: all; gap: 5px;padding: 5px ">
                <span> Arpeggiation: </span>
                <div>
                    <label for="arpMult">Freq. Mult</label>
                    <input id="arpMult" type="range"  min="-1.00" max="1.00" step="0.01" \${==>arpMult} value="0.00"></input>
                </div>
                <div>
                    <label for="arpChange"> Change Spd </label>
                    <input id="arpChange" type="range" min="0.00" max="1.0" step="0.01" \${==>arpChange} value="0.00"></input>
                </div>
                
            </div>

            
            <div style="background-color: #d0e3e9; border: 1px solid #929fa4; border-radius: 5px; color: #131617;  pointer-events: all; gap: 5px;padding: 5px ">
                <span> Duty Cycle: </span>
                <div >
                    <label for="dcCycle">Cycle</label>
                    <input \${!==disableTextGetter} id="dcCycle" type="range"  min="0.00" max="1.00" step="0.01" \${==>dcCycle} value="0.00"></input>
                    <input \${===disableTextGetter} id="dcCycle" type="range"  min="0.00" max="1.00" step="0.01"  value="0.00" disabled></input>
                </div>
                <div>
                    <label for="dcSweep"> Sweep </label>
                    <input \${!==disableTextGetter} id="dcSweep" type="range" min="-1.00" max="1.00" step="0.01" \${==>dcSweep} value="0.00" ></input>
                    <input \${===disableTextGetter}id="dcSweep" type="range" min="-1.00" max="1.00" step="0.01" value="0.00" disabled ></input>
                </div>
                
            </div>

            <div style="background-color: #d0e3e9; border: 1px solid #929fa4; border-radius: 5px; color: #131617;  pointer-events: all; gap: 5px;padding: 5px ">
                <span> Retrigger: </span>
                <div>
                    <label for="reRate">Rate</label>
                    <input id="reRate" type="range"  min="0.00" max="1.00" step="0.01" \${==>reRate} value="0.00"></input>
                </div>                
            </div>

            <div style="background-color: #d0e3e9; border: 1px solid #929fa4; border-radius: 5px; color: #131617;  pointer-events: all; gap: 5px; padding: 5px">
                <span> Flanger: </span>
                <div>
                    <label for="flgOffset">Offset</label>
                    <input id="flgOffset" type="range"  min="-1.00" max="1.00" step="0.01" \${==>flgOffset} value="0.00"></input>
                </div>
                <div>
                    <label for="flgSweep">Sweep </label>
                    <input id="flgSweep" type="range" min="-1.00" max="1.00" step="0.01" \${==>flgSweep} value="0.00"></input>
                </div>
            
            </div>

            <div style="background-color: #d0e3e9; border: 1px solid #929fa4; border-radius: 5px; color: #131617;  pointer-events: all; gap: 5px;padding: 5px ">
                <span> Lo Pass Filter: </span>
                <div>
                    <label for="lopassFreq"> Frequency </label>
                    <input id="lopassFreq" type="range" min="0.00" max="1.0" step="0.001" \${==>lopassFreq} value="1.0"></input>
                </div>
                <div>
                    <label for="lopassSweep"> Sweep </label>
                    <input id="lopassSweep" type="range"  min="-1.0" max="1.0" step="0.001" \${==>lopassSweep} value="0.0"></input>
                </div>
                <div>

                    <label for="lopassRes"> Resonance </label>
                    <input id="lopassRes" type="range"  min="0.00" max="1.0" step="0.001" \${==>lopassRes} value="0.0"></input>
                </div>
               
            </div>
            <div style="background-color: #d0e3e9; border: 1px solid #929fa4; border-radius: 5px; color: #131617;  pointer-events: all; gap: 5px;padding: 5px ">
                <span> Hi Pass Filter: </span>
                <div>
                    <label for="hipassFreq"> Frequency </label>
                    <input id="hipassFreq" type="range" min="0.00" max="1.0" step="0.001" \${==>hipassFreq} value="0.0"></input>
                </div>
                <div>
                    <label for="hipassSweep"> Sweep </label>
                    <input id="hipassSweep" type="range"  min="-1.0" max="1.0" step="0.001" \${==>hipassSweep} value="0.0"></input>
                </div>
            </div>

            <div style="background-color: #d0e3e9; border: 1px solid #929fa4; border-radius: 5px; color: #131617;  pointer-events: all; gap: 5px;padding: 5px ">
                <div>
                    <label for="Gain">Gain</label>
                    <input id="Gain" type="range"  min="0.00" max="1.00" step="0.01" \${==>Gain} value="0.25"></input>
                </div>                
            </div>
        
            <div style="background-color: #d0e3e9; border: 1px solid #929fa4; border-radius: 5px; color: #131617;  pointer-events: all; gap: 5px; padding: 5px ">
                <spam> Sample Rate: </span>
                <div>
                    <label for="rate44k"> 44k </label>
                    <input id="rate44k" type="radio" name="rate" \${==>rate44k} value="0" checked></input>
                </div>
                <div>
                    <label for="rate22k"> 22k </label>
                    <input id ="rate22k" type="radio" name="rate" \${==>rate22k} value="1" ></input>
                </div>
                <div> 
                    <label for="rate11k"> 11k </label>
                    <input id ="rate11k" type="radio" name="rate" \${==>rate11k} value="2"></input>
                </div>
                <div> 
                    <label for="rate6k"> 6k </label>
                    <input id ="rate6k" type="radio" name="rate" \${==>rate6k} value="3"></input>
                </div>
            </div>
            <div style="background-color: #d0e3e9; border: 1px solid #929fa4; border-radius: 5px; color: #131617;  pointer-events: all; gap: 5px; padding: 5px ">
                <spam> Sample Size: </span>
                <div>
                    <label for="size16bit"> 16-bit </label>
                    <input id="size16bit" type="radio" name="size" \${==>size16bit} value="0" ></input>
                </div>
                <div>
                    <label for="size8bit"> 8-bit </label>
                    <input id ="size8bit" type="radio" name="size" \${==>size8bit} value="1" checked></input>
                </div>
            </div>

            </div>
        <div style="width: 25%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: flex-start; gap: 10px; border-left: 1px solid black; padding-left: 10px; padding-right: 10px">
            <div style='display: flex;  align-items:center; justify-content: center; gap: 10px; width: 90%;'>
                <div style="font-size: 20px; width: 140px;">Current Sounds</div>
                <div class="export" title="Export" \${click@=>exportObject}> </div>
            </div>    
        
        
            <div style="display: flex; flex-direction: column; align-items: flex-start; justify-content: center; gap: 10px; width: 100%; overflow-y: scroll; pointer-events: all;">
                <div class="sound_entry" \${sound<=*sounds}> 
                    <div class="soundlabel">\${sound}</div>
                    <div style="display: flex; align-items: center; justify-content: space-between;">
                        <div class="play" title="Play" \${click@=>playRecordedSound}> </div>
                        <div class="delete" title="Delete" \${click@=>deleteRecordedSound}> </div>
                    </div>
                </div>
            </div>
        </div>

    </hud-layer>
</div>`;
