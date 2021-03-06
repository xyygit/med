//var SideNavModule = angular.module('SideNavModule', []);
app.controller('SideNavCtrl', function($scope, $http, $state, $stateParams,$localstorage) {

		$scope.list = {
			"parent": {
						"title": "主页",
						"url": "index.html"
					},
					
			"items":[
//				{
//					"title": "商品管理",
//					"url": "javascript:;",
//					"isActive":false,
//					"icon":"fa fa-laptop",
//					"child": [{
//							"title": "单一商品",
//							"url": ".goodsSingle",
//							"isActive":false
//						},{
//							"title": "组合商品",
//							"url": ".goodsMulti",
//							"isActive":false
//					  }]					
//				},
//				{
//					"title": "客户管理",
//					"url": "javascript:;",
//					"isActive":false,
//					"icon":"fa fa-users",
//					"child": [{
//							"title": "客户管理",
//							"url": "./",
//							"isActive":false
//						}]					
//				},
//				{
//					"title": "店铺管理",
//					"url": "javascript:;",
//					"isActive":false,
//					"icon":"fa fa-book",
//					"child": [{
//							"title": "在售商品",
//							"url": ".storeSale",
//							"isActive":false
//						},{
//							"title": "商品陈列",
//							"url": ".storeDisplay",
//							"isActive":false
//					  }]					
//				},
				{
					"title": "集货管理",
					"url": "javascript:;",
					"isActive":false,
					"icon":"fa fa-laptop",
					"child": [{
							"title": "库存查询",
							"url": ".collectStorage",
							"isActive":false
						},{
							"title": "药材筹措",
							"url": ".collectSupplement",
							"isActive":false
					  }]					
				},
				{
					"title": "仓储管理",
					"url": "javascript:;",
					"isActive":false,
					"icon":"fa fa-home",
					"child": [{
							"title": "收货验收",
							"url": ".wareEntry",
							"isActive":false
						},{
							"title": "入库上架",
							"url": ".wareShelves",
							"isActive":false
						},{
							"title": "货位管理",
							"url": ".wareInventory",
							"isActive":false
					  	},
						{
							"title": "保管养护",
							"url": ".wareMaintain",
							"isActive":false
					  	}]
				},
				{
					"title": "订单管理",
					"url": "javascript:;",
					"isActive":false,
					"icon":"fa fa-cogs",
					"child": [{
							"title": "订单录入",
							"url": ".orderAdd",
							"isActive":false
						},{
							"title": "订单查询",
							"url": ".orderQuery",
							"isActive":false
					  },{
							"title": "订单审核",
							"url": ".orderAudit",
							"isActive":false
						}
//,{
//							"title": "退货处理",
//							"url": ".orderRefund",
//							"isActive":false
//					  }
					]
				},{
					"title": "配货管理",
					"url": "javascript:;",
					"isActive":false,
					"icon":"fa fa-briefcase",
					"child": [{
							"title": "拆单拣货",
							"url": ".allocateGoods",
							"isActive":false
						},{
							"title": "装箱核对",
							"url": ".allocateCheck",
							"isActive":false
					  	}]					
				},
			
				{
					"title": "配载管理",
					"url": "javascript:;",
					"isActive":false,
					"icon":"fa fa-archive",
					"child": [{
							"title": "选配货载",
							"url": ".loadSelect",
							"isActive":false
						},{
							"title": "配载查询",
							"url": ".loadQuery",
							"isActive":false
						}]					
				},
			
				
				{
					"title": "运输管理",
					"url": "javascript:;",
					"isActive":false,
					"icon":"fa fa-truck",
					"child": [{
							"title": "车辆信息",
							"url": ".transVehicle",
							"isActive":false
					  	},{
							"title": "线路分配",
							"url": ".transLine",
							"isActive":false
						},{
							"title": "车辆调度",
							"url": ".transDispatch",
							"isActive":false
						},]					
				},{
					"title": "药材管理",
					"url": "javascript:;",
					"isActive":false,
					"icon":"fa fa-bar-chart-o",
					"child": [{
							"title": "药材字典",
							"url": ".dicSingle",
							"isActive":false
						}]
				},{
					"title": "业务统计",
					"url": "javascript:;",
					"isActive":false,
					"icon":"fa fa-book",
					"child": [
						{
							"title": "订单统计",
							"url": "javascript:;",
							"isActive":false
						},
						{
							"title": "保障能力",
							"url": "javascript:;",
							"isActive":false
						}]					
				},{
					"title": "机构管理",
					"url": "javascript:;",
					"isActive":false,
					"icon":"fa fa-sitemap",
					"child": [
						{
							"title": "供应机构",
							"url": ".instSupply",
							"isActive":false
						},
						{
							"title": "需求机构",
							"url": ".instDemand",
							"isActive":false
						},
						{
							"title": "保障关系",
							"url": ".instSafety",
							"isActive":false
						}]					
				},{
					"title": "用户管理",
					"url": "javascript:;",
					"isActive":false,
					"icon":"fa fa-user",
					"child": [
						{
							"title": "教员用户",
							"url": ".userTeacher",
							"isActive":false
						},
						{
							"title": "学员用户",
							"url": ".userStudent",
							"isActive":false
						}]					
				}
			]
		}
		$scope.isActive = false;
		$scope.listToggle = function(index){
			$scope.list.items[index].isActive = !$scope.list.items[index].isActive;
		}
	})
	
	