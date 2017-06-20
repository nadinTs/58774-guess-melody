import assert from 'assert';
import {changeableData} from './data';
import {statistics} from './statistic';
import {setAnswer, setLives, setMinutes, setStatisticAnswer, setStatisticTime, setSeconds, setTryValue} from './functions';

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
  describe(`setAnswer`, () => {
    it(`should update answer`, () => {
      assert(1, setAnswer(changeableData.result, 1).answer);
    });
    it(`should't allow set negative answers`, () => {
      setAnswer(changeableData.answer, 1);
    });
    it(`should have 0 answer on start`, () => {
      assert.equal(changeableData.answer, 0);
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
  describe(`setTryValue`, () => {
    it(`should update questions`, () => {
      assert(1, setTryValue(changeableData.result, 1).try);
    });
    it(`should't allow set negative questions`, () => {
      setTryValue(changeableData.try, 1);
    });
    it(`should have 10 questions on start`, () => {
      assert.equal(changeableData.try, 10);
    });
  });
});
