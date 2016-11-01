'use strict';

angular.module('bulletJournal.version', [
  'bulletJournal.version.interpolate-filter',
  'bulletJournal.version.version-directive'
])

.value('version', '0.1');
