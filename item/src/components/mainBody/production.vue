<template>
    <div id="production">
        <Layout>
            <Sider width="240">
                <Menu active-name="css" :open-names=MenuOpennames :accordion=MenuAccordion v-on:on-select="selectMenu">
                    <Submenu name="css">
                        <template slot="title">
                            <Icon type="logo-twitter" />
                            CSS小效果
                        </template>
                        <MenuItem name="cssShowOne">人脸识别时用到的扫描图</MenuItem>
                        <MenuItem name="cssShowTwo">立体感按钮</MenuItem>
                        <MenuItem name="cssShowThree">换色器</MenuItem>
                        <MenuItem name="cssShowFour">立方体旋转</MenuItem>
                    </Submenu>
                    <Submenu name="2">
                        <template slot="title">
                            <Icon type="md-code-working" />
                            JS小技巧代码
                        </template>
                    </Submenu>
                    <Submenu name="4">
                        <template slot="title">
                            <Icon type="ios-cog" />
                            作品
                        </template>
                    </Submenu>
                </Menu>
            </Sider>

            <Layout>
                <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}">
                    <Breadcrumb>
                        <BreadcrumbItem>{{BreadcrumbItem1}}</BreadcrumbItem>
                        <BreadcrumbItem>{{BreadcrumbItem2}}</BreadcrumbItem>
                        <BreadcrumbItem>{{BreadcrumbItem3}}</BreadcrumbItem>
                    </Breadcrumb>
                </Header>
                <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                    <div v-if=Content.cssShowOne>
                        <cssShowOne></cssShowOne>
                    </div>
                    <div v-if=Content.cssShowTwo>
                        <cssShowTwo></cssShowTwo>
                    </div>
                    <div v-if=Content.cssShowThree>
                        <cssShowThree></cssShowThree>
                    </div>
                    <div v-if=Content.cssShowFour>
                        <cssShowFour></cssShowFour>
                    </div>
                </Content>
            </Layout>

        </Layout>



    </div>
</template>

<script>
    import cssShowOne from './../../cssShowComponents/cssShowOne'
    import cssShowTwo from './../../cssShowComponents/cssShowTwo'
    import cssShowThree from './../../cssShowComponents/cssShowThree'
    import cssShowFour from './../../cssShowComponents/cssShowFour'
    export default {
        name: "production",
        data(){
            return {
                MenuAccordion:true,
                MenuOpennames:['css'],
                Content:{
                    cssShowOne:false,
                    cssShowTwo:false,
                },
                cssShowContent:{
                    cssShowOne:'人脸识别时用到的扫描图',
                    cssShowTwo:'立体感按钮',
                    cssShowThree:'换色器',
                    cssShowFour:'立方体旋转',
                },
                BreadcrumbItem1:'我的作品',
                BreadcrumbItem2:'CSS小作品',
                BreadcrumbItem3:'人脸识别时用到的扫描图',
            }
        },
        methods:{
          selectMenu(name){
              for (let contentKey in this.Content) {
                  this.Content[contentKey] = false
              }
              this.Content[name] = true
              this.BreadcrumbItem3 = this.cssShowContent[name]
          }
        },
        components:{
            cssShowOne:cssShowOne,
            cssShowTwo:cssShowTwo,
            cssShowThree:cssShowThree,
            cssShowFour:cssShowFour,
        }
    }
</script>

<style scoped>

</style>