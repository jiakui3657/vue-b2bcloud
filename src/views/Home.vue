<template>
  <el-row class="container">
		<el-col :span="24" class="header">
			
		</el-col>
		<el-col :span="24" class="main">
			<aside>
        <el-menu unique-opened="true" background-color="#323641" text-color="#fff" :default-active="active" class="el-menu-vertical-demo">
          <!-- <el-menu-item v-for="(item, indexs) in asideList" :key="indexs" :index="item.id">
            <i class="iconfont" :class="item.icon"></i>
            <span slot="title">{{ item.txt }}</span>
          </el-menu-item> -->
          <el-submenu v-for="(item, indexs) in asideList" :key="indexs" :index="item.id">
            <template slot="title">
              <i class="iconfont" :class="item.icon"></i>
              <span slot="title">{{ item.txt }}</span>
            </template>
            <el-menu-item-group>
              <el-menu-item v-for="(items, idx) in item.children" :key="idx" :index="item.id">{{ items.txt }}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </aside>
			<section class="content-container">
      </section>
		</el-col>
	</el-row>
</template>

<script>

export default {
  name: "Home",
  data() {
			return {
        asideList: [
          {
            id: '1',
            icon: 'icon-shouye',
            txt: '概况',
            path: '',
            children: []
          },
          {
            id: '2',
            icon: 'icon-shouyin',
            txt: '收银',
            path: '',
            children: [
              {
                id: '2-1',
                icon: '',
                txt: '收银开单',
                path: ''
              },
              {
                id: '2-2',
                icon: '',
                txt: '收银设置',
                path: ''
              }
            ]
          },
          {
            id: '3',
            icon: 'icon-dingdan',
            txt: '订单',
            path: '',
            children: [
              {
                id: '3-1',
                icon: '',
                txt: '销售单',
                path: ''
              },
              {
                id: '3-2',
                icon: '',
                txt: '售后单',
                path: ''
              },
              {
                id: '3-3',
                icon: '',
                txt: '订单评价',
                path: ''
              }
            ]
          },
          {
            id: '4',
            icon: 'icon-shangpin',
            txt: '商品',
            path: '',
            children: [
              {
                id: '4-1',
                icon: '',
                txt: '新增商品',
                path: ''
              },
              {
                id: '4-2',
                icon: '',
                txt: '商品资料',
                path: ''
              },
              {
                id: '4-3',
                icon: '',
                txt: '商品排序',
                path: ''
              },
              {
                id: '4-4',
                icon: '',
                txt: '商品分类',
                path: ''
              },
              {
                id: '4-5',
                icon: '',
                txt: '商品标签',
                path: ''
              },
              {
                id: '4-6',
                icon: '',
                txt: '商品模板',
                path: ''
              }
            ]
          },
          {
            id: '5',
            icon: 'icon-7',
            txt: '会员',
            path: '',
            children: [
              {
                id: '5-1',
                icon: '',
                txt: '会员资料',
                path: ''
              },
              {
                id: '5-2',
                icon: '',
                txt: '会员标签',
                path: ''
              },
              {
                id: '5-3',
                icon: '',
                txt: '会员资金',
                path: ''
              },
              {
                id: '5-4',
                icon: '',
                txt: '充值管理',
                path: ''
              },
              {
                id: '5-5',
                icon: '',
                txt: '会员账单',
                path: ''
              },
              {
                id: '5-6',
                icon: '',
                txt: '会员卡',
                path: ''
              },
              {
                id: '5-7',
                icon: '',
                txt: '积分设置',
                path: ''
              },
              {
                id: '5-8',
                icon: '',
                txt: '客群管理',
                path: ''
              },
              {
                id: '5-9',
                icon: '',
                txt: '积分账单',
                path: ''
              }
            ]
          },
          {
            id: '6',
            icon: 'icon-mall',
            txt: '商城',
            path: '',
            children: [
              {
                id: '6-1',
                icon: '',
                txt: '商城模板',
                path: ''
              },
              {
                id: '6-2',
                icon: '',
                txt: '页面编辑',
                path: ''
              },
              {
                id: '6-3',
                icon: '',
                txt: '商城设置',
                path: ''
              },
              {
                id: '6-4',
                icon: '',
                txt: '我的媒体库',
                path: ''
              }
            ]
          },
          {
            id: '7',
            icon: 'icon-kucun',
            txt: '库存',
            path: '',
            children: [
              {
                id: '7-1',
                icon: '',
                txt: '盘点',
                path: ''
              },
              {
                id: '7-2',
                icon: '',
                txt: '发货',
                path: ''
              },
              {
                id: '7-3',
                icon: '',
                txt: '收货',
                path: ''
              },
              {
                id: '7-4',
                icon: '',
                txt: '库存查询',
                path: ''
              },
              {
                id: '7-5',
                icon: '',
                txt: '库存预警',
                path: ''
              },
              {
                id: '5-6',
                icon: '',
                txt: '会员卡',
                path: ''
              },
              {
                id: '5-7',
                icon: '',
                txt: '积分设置',
                path: ''
              },
              {
                id: '5-8',
                icon: '',
                txt: '客群管理',
                path: ''
              },
              {
                id: '5-9',
                icon: '',
                txt: '积分账单',
                path: ''
              }
            ]
          },
          {
            id: '8',
            icon: 'icon-caiwurenminbizhifu',
            txt: '财务',
            path: ''
          },
          {
            id: '9',
            icon: 'icon-data',
            txt: '数据',
            path: ''
          },
          {
            id: '10',
            icon: 'icon-shezhi',
            txt: '设置',
            path: ''
          },
          {
            id: '11',
            icon: 'icon-shichang',
            txt: '货源市场',
            path: ''
          }
        ],
        active: '1'
      }
		},
		methods: {},
		mounted() {}
};
</script>

<style scoped lang="scss">
  @import '~@/styles/common.scss';
  
  .container {
		position: absolute;
		top: 0px;
		bottom: 0px;
		width: 100%;
		.header {
			height: 68px;
			line-height: 68px;
			background: $color-primary;
			color:#fff;
		}
		.main {
			display: flex;
			position: absolute;
			top: 68px;
			bottom: 0px;
			overflow: hidden;
			aside {
				flex:0 0 150px;
				width: 150px;
        background: #323641;
        overflow-y: auto;
        height: 100%;
        &::-webkit-scrollbar {
          display: none;
        }
        .el-menu {
          width: 150px;
        }
        .el-submenu {
          .el-menu-item {
            min-width: 140px;
            box-sizing: border-box;
          }
        }
			}
			.content-container {
				flex:1;
				overflow-y: auto;
				padding: 20px;
			}
		}
	}
</style>
