import assert from 'assert';
import {changeableData} from './data';
import {statistics} from './statistic';
import {
  setTimerSecond,
  setLives,
  setStatisticAnswer,
  setStatisticTime,
  setSeconds,
  setAttemptValue,
  setResult
} from './functions';

describe(`game`, () => {
  describe(`setStatisticAnswer`, () => {
    it(`should update answer in statistic`, () => {
      assert(1, setStatisticAnswer(statistics.answers, 1).answer);
    });
    it(`should't allow set negative answers`, () => {
      setStatisticAnswer(statistics.answers, 1);
    });
  });
  describe(`setStatisticTime`, () => {
    it(`should update answer in statistic`, () => {
      assert(1, setStatisticTime(statistics.time, 1).answer);
    });
    it(`should't allow set negative answers`, () => {
      setStatisticTime(statistics.time, 1);
    });
  });
  describe(`setSeconds`, () => {
    it(`should update seconds`, () => {
      assert(1, setSeconds(changeableData, 1).seconds);
    });
    it(`should't allow set negative seconds`, () => {
      setSeconds(changeableData.seconds, 1);
    });
    it(`should have 0 minutes on start`, () => {
      assert.equal(changeableData.seconds, 0);
    });
  });
  describe(`setLives`, () => {
    it(`should update lives`, () => {
      assert(1, setLives(changeableData, 1).lives);
    });
    it(`should't allow set negative lives`, () => {
      setLives(changeableData.lives, 1);
    });
    it(`should have 3 lives on start`, () => {
      assert.equal(changeableData.lives, 3);
    });
  });
  describe(`setAttemptValue`, () => {
    it(`should update attempts`, () => {
      assert(1, setAttemptValue(changeableData.result, 1).attempt);
    });
    it(`should't allow set negative attempts`, () => {
      setAttemptValue(changeableData.attempt, 1);
    });
    it(`should have 9 attempts on start`, () => {
      assert.equal(changeableData.attempt, 9);
    });
  });
  describe(`setResult`, () => {
    it(`should update results`, () => {
      assert(1, setResult(changeableData.result, 1).result);
    });
    it(`should't allow set negative results`, () => {
      setResult(changeableData.result, 1);
    });
    it(`should have 0 results on start`, () => {
      assert.equal(changeableData.result, 0);
    });
  });
  describe(`#setTimerSecond`, () => {
    it(`should update time`, () => {
      assert(1, setTimerSecond(changeableData, 1).seconds);
    });
    it(`should't allow set negative seconds`, () => {
      setResult(changeableData.seconds, 1);
    });
  });
});
