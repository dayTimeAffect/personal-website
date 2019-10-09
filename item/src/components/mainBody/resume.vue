<template>
    <div id="resume">
        <Dialog v-if="dialog" v-bind:dialogArguments="dialogArguments"></Dialog>
        <div class="userInfo">
            <div>dialog</div>
            <div class="userId">邓俊</div>
            <div class="headPortrait">
                <img src="../../assets/user.jpg" alt="个人照片">
            </div>
            <div class="contact">
                <p>联系电话</p>
                <p>18282649585</p>
            </div>
            <div class="contact">
                <p>电子邮箱</p>
                <p>771238216@qq.com</p>
            </div>
            <div class="contact">
                <p>教育背景</p>
                <p>成都信息工程大学</p>
                <p>信息与计算科学(本科)</p>
            </div>
        </div>
        <div class="userSkill">
            <div class="userSkillHead">
                <span><i class="fa fa-print" aria-hidden="true"></i><Button type="text" size="large">打印简历</Button></span>
                <span><i class="fa fa-envelope-o" aria-hidden="true"></i><Button type="text" size="large">给我发邮件</Button></span>
                <span><i class="fa fa-picture-o" aria-hidden="true"></i><Button type="text" size="large">查看个人照片</Button></span>
            </div>
            <div class="occupationalHistory">
                <p><span>工作经历</span></p>
                <div>
                    <div class="occupationalHistoryOne">
                        <span style="font-size: 24px;color: #000;font-weight: 600">四川中电启明星信息技术有限公司</span><span style="color: #959496;font-size: 18px;margin-left: 8px">2018年9月至2019年3月</span>
                        <p style="font-size: 16px;color: #333;padding-bottom: 12px">web前端实习生</p>
                        <ul class="content">
                            <li>编写项目组所使用的JS组件使用手册</li>
                            <li>参与项目成都门户2.0的后期剩余功能关于前端的部分，指导后端实习生对JS组件的使用</li>
                            <li>参与项目的公司内测，对部分前端bug进行更改</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="professionalSkill">
                <p><span>专业技能</span></p>
                <div>
                    <ul class="content">
                        <li>熟练掌握HTML5、CSS3、JavaScript等前端技术，完成网页静态布局以及实现页面的交互，提升用户体验</li>
                        <li>熟练掌握JQuery框架，实现页面的交互效果</li>
                        <li>熟悉使用VUE全家桶构建项目工程</li>
                        <li>熟悉使用less、sass等css预处理语言</li>
                        <li>熟悉bootstrap、iView前端框架</li>
                        <li>了解ES6、nodeJs等</li>
                        <li>熟悉使用git</li>
                    </ul>
                </div>
            </div>
            <div class="project">
                <p><span>项目经验</span></p>
                <div class="content">
                    <span style="font-size: 24px;color: #000;font-weight: 600">应用数据管理系统</span><span style="color: #959496;font-size: 18px;margin-left: 8px">2018年11月至2018年12月</span>
                    <p style="font-size: 16px;color: #333;padding-bottom: 12px">实习期练手项目</p>
                    <ul>
                        <li>该项目主要用于管理各种应用数据</li>
                        <li>负责制作前端应用编码申请，审核，维护，台账管理页面，完成基本交互功能</li>
                        <li>负责对接后端接口，将后端返回的数据呈现在前端页面</li>
                        <li>该项目使用了HTML，CSS，JS，JQ等</li>
                    </ul>
                </div>
                <div class="content">
                    <span style="font-size: 24px;color: #000;font-weight: 600">房屋租赁管理系统</span><span style="color: #959496;font-size: 18px;margin-left: 8px">2019年4月至2019年5月</span>
                    <p style="font-size: 16px;color: #333;padding-bottom: 12px">毕业设计</p>
                    <ul>
                        <li>本项目为一个使用vue构建的单页面应用，项目采用了vue-cli、vuex、vue-route、axios以及ES6语法，采用组件化思想搭建整个项目，从而使组件高度复用，代码十分简洁</li>
                        <li>负责后端部分：项目采用node(express框架)+mysql来搭建后台服务器</li>
                        <li>负责前端部分：使用vue-cli，vue-router搭建项目路由，vuex来实现单文件组件和数据的抽离，axios来实现前后端数据交互</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import dialog from './../FuncModule/dialog'
    export default {
        name: "resume",
        data(){
          return {
              dialog:true,
              dialogArguments:{
                  imgUrl:["user.jpg","user1.jpg","user2.jpg"]
              }
          }
        },
        components:{
            Dialog:dialog,
        }
    }
</script>

<style scoped lang="less">
    @bgbule:#6ecadc;
    @conColor:#758487;
    #resume{
        width: 1500px;
        margin: auto;
        &>div{
            float: left;
            box-sizing: border-box;
            overflow: hidden;
        }
        .userInfo{
            width: 350px;
            /*height: 100%;*/
            padding-left: 50px;
            background-color: @bgbule;

            .userId{
                width: 100px;
                height: 90px;
                font-size: 32px;
                line-height: 64px;
                font-weight: 600;
                color: #fff;
                padding: 0 0 30px 15px;
            }
            .headPortrait{
                width: 230px;
                border: 1px solid #ccc;
                padding: 15px;
                img{
                    width: 200px;
                }
            }
            .contact{
                width: 100%;
                padding-top: 25px;
                &>p:first-child{
                    color: #fff;
                    font-size: 24px;
                    height: 37px;
                    line-height: 32px;
                    padding-bottom: 5px;
                }
                &>p:not(first-child){
                    padding-left: 24px;
                    color: #000;
                    font-size: 16px;
                }
            }
        }
        .userSkill{
            width: 65%;
            min-width: 12px;
            .userSkillHead{
                height: 100px;
                box-sizing: border-box;
                padding: 25px 0;
                line-height: 50px;
                font-size: 18px;
                color: #333;

                span{
                    margin: 20px;
                    i{
                        color:@bgbule
                    }
                }
            }
            .occupationalHistory{
                width: 100%;
                &>p{
                    height: 50px;
                    line-height: 50px;
                    span{
                        padding-left: 30px;
                        width: 180px;
                        font-size: 24px;
                        color: #fff;
                        display: inline-block;
                        background-color: @bgbule;
                        border-left: 3px solid #fff;
                    }
                }
                &>div{
                    width: 100%;
                    .occupationalHistoryOne{
                        margin-left: 30px;
                        &>span{
                            display: inline-block;
                        }
                        .content{
                            font-size: 16px;
                            color: @conColor;
                        }
                    }
                }

            }
            .professionalSkill{
                width: 100%;
                &>p{
                    height: 50px;
                    line-height: 50px;
                    span{
                        padding-left: 30px;
                        width: 240px;
                        font-size: 24px;
                        color: #fff;
                        display: inline-block;
                        background-color: #e9a820;
                        border-left: 3px solid #fff;
                    }
                }
                &>div{
                    width: 100%;
                    .content{
                        margin-top: 12px;
                        margin-left: 30px;
                        font-size: 16px;
                        color: @conColor;
                    }
                }

            }
            .project{
                width: 100%;
                &>p{
                    height: 50px;
                    line-height: 50px;
                    span{
                        padding-left: 30px;
                        width: 280px;
                        font-size: 24px;
                        color: #fff;
                        display: inline-block;
                        background-color: #3eb991;
                        border-left: 3px solid #fff;
                    }
                }
                .content{
                    margin-bottom: 10px;
                    margin-left: 30px;
                    ul{
                        font-size: 16px;
                        color: @conColor;
                    }
                }
            }
        }
    }
</style>