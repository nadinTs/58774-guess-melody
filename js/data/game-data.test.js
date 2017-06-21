import assert from 'assert';
import {changeableData} from './data';
import {statistics} from './statistic';
import {setTimerMinute, setTimerSecond, setLives, setMinutes, setStatisticAnswer, setStatisticTime, setSeconds, setTryValue, setResult} from './functions';

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
  describe(`setMinutes`, () => {
    it(`should update minutes`, () => {
      assert(1, setMinutes(changeableData, 1).minute);
    });
    it(`should't allow set negative minutes`, () => {
      setMinutes(changeableData.minute, 1);
    });
    it(`should have 2 minutes on start`, () => {
      assert.equal(changeableData.minute, 2);
    });
  });
  describe(`setLives`, () => {
    it(`should update lives`, () => {
      assert(1, setLives(changeableData, 1).lives);
    });
    it(`should't allow set negative lives`, () => {
      setLives(changeableData.lives, 1);
    });
    it(`should have 2 lives on start`, () => {
      assert.equal(changeableData.lives, 2);
    });
  });
  describe(`setTryValue`, () => {
    it(`should update try`, () => {
      assert(1, setTryValue(changeableData.result, 1).try);
    });
    it(`should't allow set negative try`, () => {
      setTryValue(changeableData.try, 1);
    });
    it(`should have 9 try on start`, () => {
      assert.equal(changeableData.try, 9);
    });
  });
  describe(`setResult`, () => {
    it(`should update results`, () => {
      assert(1, setResult(changeableData.result, 1).try);
    });
    it(`should't allow set negative results`, () => {
      setResult(changeableData.result, 1);
    });
    it(`should have 0 results on start`, () => {
      assert.equal(changeableData.result, 0);
    });
  });
  describe(`#setTimerMinute`, () => {
    it(`should update time`, () => {
      assert(1, setTimerMinute(1).try);
    });
  });
  describe(`#setTimerMinute`, () => {
    it(`should update time`, () => {
      assert(1, setTimerSecond(1).try);
    });
  });
});
