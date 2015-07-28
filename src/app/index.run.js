(function() {
  'use strict';

  angular
    .module('musicInventoryGulp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
