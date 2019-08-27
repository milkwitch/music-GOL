import GameOfLife from './GameOfLife';
import Tone from 'tone';

const synth = new Tone.Synth().toMaster();
Tone.Transport.start();
const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
let noteArray = [];
for (let i = 0; i < 16; i++) {
    let notes = [];
    for (let j = 0; j < letters.length; j++) {
        notes.push(letters[j] + `${i % 8}`)
    }
    noteArray.push(notes)
}


export function play(row, col) {
    if (col < letters.length) {
        synth.triggerAttackRelease(noteArray[row][col], '8n')
    } else {
        synth.triggerAttackRelease(noteArray[row][col % 8], '8n')
    }
}
