import { TraditionalScoringFrame } from './traditional-scoring-frame';

describe('Traditional Scoring Frame', () => {
  describe('Single Frame Score', () => {
    describe('Two Pitches Frame', () => {
      describe('Strike', () => {
        const frame = new TraditionalScoringFrame();

        test('Set First Pitch Score', () => {
          frame.setFirstPitch(10);

          expect(frame.firstPitch).toBe(10);
        });

        test('Frame Score', () => {
          expect(frame.score).toBe(10);
        });
      });

      describe('Spare', () => {
        const frame = new TraditionalScoringFrame();

        test('Get First Pitch Score', () => {
          expect(frame.firstPitch).toBe(0);
        });

        test('Set First Pitch Score', () => {
          frame.setFirstPitch(9);

          expect(frame.firstPitch).toBe(9);
        });

        test('Get Second Pitch Score', () => {
          expect(frame.secondPitch).toBe(0);
        });

        test('Set Second Pitch Score', () => {
          frame.setSecondPitch(1);

          expect(frame.secondPitch).toBe(1);
        });

        test('Frame Score', () => {
          expect(frame.score).toBe(10);
        });
      });

      describe('Open Frame', () => {
        const frame = new TraditionalScoringFrame();

        test('Get First Pitch Score', () => {
          expect(frame.firstPitch).toBe(0);
        });

        test('Set First Pitch Score', () => {
          frame.setFirstPitch(5);

          expect(frame.firstPitch).toBe(5);
        });

        test('Get Second Pitch Score', () => {
          expect(frame.secondPitch).toBe(0);
        });

        test('Set Second Pitch Score', () => {
          frame.setSecondPitch(4);

          expect(frame.secondPitch).toBe(4);
        });

        test('Frame Score', () => {
          expect(frame.score).toBe(9);
        });
      });
    });

    describe('Three Pitches Frame', () => {
      const frame = new TraditionalScoringFrame();

      test('Get First Pitch Score', () => {
        expect(frame.firstPitch).toBe(0);
      });

      test('Set First Pitch Score', () => {
        frame.setFirstPitch(10);

        expect(frame.firstPitch).toBe(10);
      });

      test('Get Second Pitch Score', () => {
        expect(frame.secondPitch).toBe(0);
      });

      test('Set Second Pitch Score', () => {
        frame.setSecondPitch(10);

        expect(frame.secondPitch).toBe(10);
      });

      test('Get Third Pitch Score', () => {
        expect(frame.thirdPitch).toBe(0);
      });

      test('Set Third Pitch Score', () => {
        frame.setThirdPitch(10);

        expect(frame.thirdPitch).toBe(10);
      });

      test('Frame Score', () => {
        expect(frame.score).toBe(30);
      });
    });
  });

  describe('Multi Frames Score', () => {
    describe('Frame Reference', () => {
      const frame1 = new TraditionalScoringFrame().setFirstPitch(10);
      const frame2 = new TraditionalScoringFrame().setFirstPitch(5).setSecondPitch(5);
      const frame3 = new TraditionalScoringFrame().setFirstPitch(5);

      test('Set frame1 as previous frame of frame2.', () => {
        frame2.previousFrame = frame1;

        expect(frame2.previousFrame).toBe(frame1);
      });

      test('Set frame2 as previous frame of frame3.', () => {
        frame3.previousFrame = frame2;

        expect(frame2.previousFrame).toBe(frame1);
      });

      test('Set frame2 as next frame of frame1.', () => {
        frame1.nextFrame = frame2;

        expect(frame1.nextFrame).toBe(frame2);
      });

      test('Set frame3 as next frame of frame2.', () => {
        frame2.nextFrame = frame3;

        expect(frame2.nextFrame).toBe(frame3);
      });
    });
  });
});
