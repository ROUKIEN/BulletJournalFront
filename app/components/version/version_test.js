'use strict';

describe('bulletJournal.version module', function() {
  beforeEach(module('bulletJournal.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
