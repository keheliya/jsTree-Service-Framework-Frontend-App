'use strict';

define(
		['projectWeb'],
		function() {

			var rivalWarIndexModule = angular.module('projectWeb', [
					'ui.router', 'oc.lazyLoad', 'rivalWarLayoutService']);

			rivalWarIndexModule
					.controller(
							'rivalWarLayoutController',
							[
									'$scope',
									'$ocLazyLoad',
									'rivalWarLayoutService',
									function($scope, $ocLazyLoad,
											rivalWarLayoutService) {

										$scope.mainHeader = 'partials/layout/header/RivalWar/';
										$scope.mainSidebar = 'partials/layout/aside/RivalWar/';
										$scope.contentWrapper = 'partials/layout/contents/RivalWar/';
										$scope.mainFooter = 'partials/layout/footer/RivalWar/';
										$scope.controlSidebar = 'partials/layout/sidebar/RivalWar/';

										$scope
												.$on(
														'$includeContentLoaded',
														function(event, file) {
															if (file === 'partials/layout/header/RivalWar/') {
																console
																		.log(file);
															} else if (file === 'partials/layout/aside/RivalWar/') {
																rivalWarLayoutService
																		.fire();
															} else if (file === 'partials/layout/contents/RivalWar/') {
																$ocLazyLoad
																.load(
						                                                  [
						                                                      {
						                                                        name: 'RivalWarService',
						                                                        files: ['partials/layout/contents/RivalWar/service.js']
						                                                      },
						                                                      {
						                                                        name: 'RivalWarController',
						                                                        files: ['partials/layout/contents/RivalWar/controller.js']
						                                                      },
						                                                      'partials/layout/contents/RivalWar/index.css']);
																rivalWarLayoutService
																		.fire();
															} else if (file === 'partials/layout/footer/RivalWar/') {
																rivalWarLayoutService
																		.fire();
															} else if (file === 'partials/layout/sidebar/RivalWar/') {
																console
																		.log(file);
															};
														});

									}]);// indexModule.controllerF
			/*rivalWarIndexModule.controller('rivalWarContentsController', ['$scope',
                '$ocLazyLoad', 'rivalWarLayoutService',
                function($scope, $ocLazyLoad, rivalWarLayoutService) {
                  console.log('rivalWarContentsController');
                }]);*/// rivalWarContentsController.controller
		});