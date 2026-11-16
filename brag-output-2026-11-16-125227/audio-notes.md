# Aggressive launch soundtrack

Use `composition/assets/audio/wraghstep-launch-24s.wav` at timeline zero, gain 1.0. It is 24.000 seconds, stereo PCM at 48 kHz. The track is the original "Wraghstep [v2]" by Of Far Different Nature, from the artist's heavy bass pack tagged dubstep, drumstep, distorted bass and wobble.

## Timing

The source excerpt is 10.285714 to 34.285714 seconds. This skips the quieter opening and begins on the dense full-spectrum drop. The musical grid is 140 BPM, with a 0.428571-second quarter note, 0.214286-second eighth note, and 1.714286-second bar. Fourteen bars make exactly 24 seconds. All beat and bar timestamps, plus rounded 30 fps frame positions, are in `composition/assets/audio/wraghstep-grid.json`.

The skill analyzer estimates 139.67 BPM. Its onset timestamps lag the underlying musical beat by about 40-60 ms because of the analysis window. Use the regular 140 BPM grid for the edit and the measured strong cues for local accents. The drop was selected from the spectrogram and onset/energy analysis, not by listening.

Bar starts: 0.000, 1.714, 3.429, 5.143, 6.857, 8.571, 10.286, 12.000, 13.714, 15.429, 17.143, 18.857, 20.571, 22.286. End: 24.000.

## Level and processing

The source excerpt measures -5.68 LUFS integrated with +0.68 dBTP true peak. The edit applies -4.32 dB gain and a 120 ms ending fade. Verified output is -10.00 LUFS integrated, -3.62 dBTP true peak, 0.50 LU loudness range. No tempo change, extra synthesizer, or corporate music is used. The available headroom supports small impact effects if wanted. Avoid reducing this track to a quiet background-bed gain.

The original OGG is retained as `composition/assets/audio/wraghstep-source.ogg`. The JSON provenance includes source URLs, hashes and processing details. The maintained brag audio cue analyzer produced `wraghstep-analysis.json` and `wraghstep-analysis.md` beside the audio. Direct archive download and ffmpeg were the smallest fallback because media-use ingest does not unpack a multi-track ZIP.

## License and publication credit

The artist's upload lists CC BY 4.0. Include the following credit in the published video description or an adjacent persistent credits page; it need not become on-screen feature copy.

Music: "Wraghstep [v2]" by Of Far Different Nature (https://fardifferent.carrd.co/), licensed under CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/). Source: https://opengameart.org/content/huge-loop-box-2-heavy-bass-music-for-action-racing-fighting-rpg-adventure-and-cutscenes. Edited to 24 seconds, gain reduced, and ending faded.

No audio-listening interface was available. Analysis verifies the musical grid, heavy spectral density, immediate onset, levels and duration; subjective bass character and absence of incidental vocal samples still benefit from a human playback review.
