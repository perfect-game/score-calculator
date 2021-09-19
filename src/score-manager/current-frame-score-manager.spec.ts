import { CurrentFrameScoreManager } from './current-frame-score-manager';
import { CurrentFrameScoringFrame } from '../frame';

describe('Current Frame Score Manager', () => {
  const frame1 = new CurrentFrameScoringFrame().setFirstPitch(10);
  const frame2 = new CurrentFrameScoringFrame().setFirstPitch(9).setSecondPitch(1);
  const frame3 = new CurrentFrameScoringFrame().setFirstPitch(8).setSecondPitch(2);
  const frame4 = new CurrentFrameScoringFrame().setFirstPitch(7).setSecondPitch(3);
  const frame5 = new CurrentFrameScoringFrame().setFirstPitch(6).setSecondPitch(4);
  const frame6 = new CurrentFrameScoringFrame().setFirstPitch(5).setSecondPitch(5);
  const frame7 = new CurrentFrameScoringFrame().setFirstPitch(4).setSecondPitch(6);
  const frame8 = new CurrentFrameScoringFrame().setFirstPitch(3).setSecondPitch(7);
  const frame9 = new CurrentFrameScoringFrame().setFirstPitch(2).setSecondPitch(8);
  const frame10 = new CurrentFrameScoringFrame().setFirstPitch(10);

  const scoreManager = new CurrentFrameScoreManager()
    .push(frame1)
    .push(frame2)
    .push(frame3)
    .push(frame4)
    .push(frame5)
    .push(frame6)
    .push(frame7)
    .push(frame8)
    .push(frame9)
    .push(frame10);

  test('Total Score', () => {
    expect(scoreManager.totalScore).toBe(184);
  });

  test('Score per Frames', () => {
    expect(scoreManager.frames[0].score).toBe(30);
    expect(scoreManager.frames[1].score).toBe(19);
    expect(scoreManager.frames[2].score).toBe(18);
    expect(scoreManager.frames[3].score).toBe(17);
    expect(scoreManager.frames[4].score).toBe(16);
    expect(scoreManager.frames[5].score).toBe(15);
    expect(scoreManager.frames[6].score).toBe(14);
    expect(scoreManager.frames[7].score).toBe(13);
    expect(scoreManager.frames[8].score).toBe(12);
    expect(scoreManager.frames[9].score).toBe(30);
  });

  test('Accumulate Score', () => {
    expect(scoreManager.frames[0].accumulateScore).toBe(30);
    expect(scoreManager.frames[1].accumulateScore).toBe(49);
    expect(scoreManager.frames[2].accumulateScore).toBe(67);
    expect(scoreManager.frames[3].accumulateScore).toBe(84);
    expect(scoreManager.frames[4].accumulateScore).toBe(100);
    expect(scoreManager.frames[5].accumulateScore).toBe(115);
    expect(scoreManager.frames[6].accumulateScore).toBe(129);
    expect(scoreManager.frames[7].accumulateScore).toBe(142);
    expect(scoreManager.frames[8].accumulateScore).toBe(154);
    expect(scoreManager.frames[9].accumulateScore).toBe(184);
  });
});
