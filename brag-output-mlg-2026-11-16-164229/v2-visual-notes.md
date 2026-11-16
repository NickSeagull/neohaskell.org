# MLG V2 visual implementation

Implemented seven distinct effect families while preserving the existing hitmarkers, nine scene boundaries, accepted copy, source evidence and original logo. The prior cinematic directory and V1 export were not edited.

| Global cue | Added visual effect |
| --- | --- |
| 0.00, 0.42 | Perimeter speed lines and a comic burst behind SEND IT. |
| 2.65-2.95 | Cyan speed wedges, opposing cyan and magenta GET REKT echoes, and a comic scope-impact burst. |
| 4.33-5.00, 5.57 | Eighteen ice-shell shards fly away around the intact old contract; a separate burst marks the new contract. Frank lasts through 6.6 seconds at 0.75 playback rate and shrinks toward the right edge from 5.21 seconds. |
| 6.95-9.35 | MOM GET THE CAMERA moves onto the actual IDE shot with camera brackets and a recording dot. |
| 9.43-12.80 | Eighteen spinning arcade coins arrive in six score bursts, six combo-meter segments accumulate, and TRIPLE gains its own comic burst in the open center gap. |
| 14.57-14.95 | Executable rules receive a cyan comic impact and opposing colored RUN echoes. |
| 16.29-16.88 | Reverse arrows and moving scan bars frame the real retained-history replay. The actual MW2 UAV notification appears on the third hit at 17.6 seconds. Its original game pixels are cropped from IGN footage. |
| 19.29-21.30 | A 38-piece deterministic confetti burst accompanies the crowd reaction and product payoff. |
| 21.48, 22.20, 22.95 | WHERE YOU AT appears only on the end card and receives three punch-ins, matching the final audio section's placement. Twenty-six confetti pieces launch around the 22.0-second victory hit. Caption exits around 23.85 seconds. |

The confetti markup and CSS-variable animation mechanism adapt the maintained HyperFrames `confetti` component, installed in compositions/components/confetti.html. The text-echo treatment follows the installed `rgb-glitch-text` mechanism. Decorative particles are static authored elements with finite timeline animation and deterministic index-based trajectories.

Reviewed the 15-frame contact sheets in verification/v2-agent-frames, then inspected full-resolution IDE, payoff, corrected built-in combo and end-card captures. The first pass crowded the built-in heading with the TRIPLE burst. Moving that burst into the center gap resolved the collision while preserving all feature labels. Final focused captures are in verification/v2-agent-final. The payoff has no premature WHERE caption; the end-card caption is legible beside the identity and URL. Root owns the integrated audio, actual UAV media, final browser gate and delivery render.
