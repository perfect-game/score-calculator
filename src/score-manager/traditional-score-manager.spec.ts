import { TraditionalScoreManager } from './traditional-score-manager';
import { TraditionalScoringFrame } from '../frame';

describe('Traditional Score Manager', () => {
  const frame1 = new TraditionalScoringFrame().setFirstPitch(10);
  const frame2 = new TraditionalScoringFrame().setFirstPitch(10);
  const frame3 = new TraditionalScoringFrame().setFirstPitch(10);
  const frame4 = new TraditionalScoringFrame().setFirstPitch(9).setSecondPitch(1);
  const frame5 = new TraditionalScoringFrame().setFirstPitch(8).setSecondPitch(2);
  const frame6 = new TraditionalScoringFrame().setFirstPitch(7).setSecondPitch(3);
  const frame7 = new TraditionalScoringFrame().setFirstPitch(6).setSecondPitch(4);
  const frame8 = new TraditionalScoringFrame().setFirstPitch(5).setSecondPitch(5);
  const frame9 = new TraditionalScoringFrame().setFirstPitch(4).setSecondPitch(6);
  const frame10 = new TraditionalScoringFrame().setFirstPitch(10).setSecondPitch(10).setThirdPitch(10);

  const scoreManager = new TraditionalScoreManager()
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
    expect(scoreManager.totalScore).toBe(209);
  });

  test('Score per Frames', () => {
    expect(scoreManager.frames[0].score).toBe(30);
    expect(scoreManager.frames[1].score).toBe(29);
    expect(scoreManager.frames[2].score).toBe(20);
    expect(scoreManager.frames[3].score).toBe(18);
    expect(scoreManager.frames[4].score).toBe(17);
    expect(scoreManager.frames[5].score).toBe(16);
    expect(scoreManager.frames[6].score).toBe(15);
    expect(scoreManager.frames[7].score).toBe(14);
    expect(scoreManager.frames[8].score).toBe(20);
    expect(scoreManager.frames[9].score).toBe(30);
  });

  test('Accumulate Score', () => {
    expect(scoreManager.frames[0].accumulateScore).toBe(30);
    expect(scoreManager.frames[1].accumulateScore).toBe(59);
    expect(scoreManager.frames[2].accumulateScore).toBe(79);
    expect(scoreManager.frames[3].accumulateScore).toBe(97);
    expect(scoreManager.frames[4].accumulateScore).toBe(114);
    expect(scoreManager.frames[5].accumulateScore).toBe(130);
    expect(scoreManager.frames[6].accumulateScore).toBe(145);
    expect(scoreManager.frames[7].accumulateScore).toBe(159);
    expect(scoreManager.frames[8].accumulateScore).toBe(179);
    expect(scoreManager.frames[9].accumulateScore).toBe(209);
  });
});
