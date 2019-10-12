<template>
    <div id="resume">
        <Dialog v-if="dialog" v-bind:dialogArguments="dialogArguments"></Dialog>
        <div class="userInfo">
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
                            <li>参与项目关于前端的部分，指导后端实习生对JS组件的使用</li>
                            <li>参与项目的公司内测，对部分前端bug进行更改</li>
                        </ul>
                    </div>
                    <div class="occupationalHistoryOne">
                        <span style="font-size: 24px;color: #000;font-weight: 600">上海德拓信息技术股份有限公司</span><span style="color: #959496;font-size: 18px;margin-left: 8px">2019年7月至今</span>
                        <p style="font-size: 16px;color: #333;padding-bottom: 12px">前端开发工程师</p>
                        <ul class="content">
                            <li>参与PC端的项目开发，配合项目经理和UI设计师，依据产品需求完成高质量的web前端的开发和维护</li>
                            <li>根据用户的需求参与项目需求的分析</li>
                            <li>根据公司下达的任务，负责项目前端页面的编码，对开发的代码进行集成测试</li>
                            <li>完成项目功能使用手册</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="professionalSkill">
                <p><span>专业技能</span></p>
                <div>
                    <ul class="content">
                        <li>精通掌握了HTML、CSS、Javascript等Web开发技术，熟悉页面结构和布局，有良好的代码编写习惯</li>
                        <li>熟练掌握H5、CSS3的新属性</li>
                        <li>熟悉使用jQuery、iconfonts等js类库，应用JavaScript或jQuery等实现页面动态效果以及交互效果</li>
                        <li>熟练使用vue进行组件和mvvm开发</li>
                        <li>熟练使用less预处理语言，提高工作效率以及代码的复用性和可维护性</li>
                        <li>了解ES6、nodeJs等</li>
                        <li>了解使用git、github</li>
                        <li>了解echarts、熟悉使用bootstrap、iView、layui类库。</li>
                    </ul>
                </div>
            </div>
            <div class="project">
                <p><span>项目经验</span></p>
                <div class="content">
                    <span style="font-size: 24px;color: #000;font-weight: 600">贵阳市公安交通管理局数据铁笼大数据平台二期项目</span><span style="color: #959496;font-size: 18px;margin-left: 8px">2019年7月至</span>
                    <p style="font-size: 16px;color: #333;padding-bottom: 12px">贵阳交管项目组</p>
                    <ul>
                        <li>项目介绍：
                            <ul class="twoText">
                                <li>贵阳市公安交通管理局“数据铁笼”大数据平台二期项目全面梳理市交管局“三清单一流程”，即权责清单、“三 重一大”事项清单、风险清单和业务流程，
                                    完善业务系统信息化内容，同时拓展大数据平台应用，对市交管局权责清单和“三重一大”事项进行梳理，全面评估风险清单，实现权力运行过程数据化、
                                    自流程化、规范化，对权力运行过程的相关环节 实现监管、预警、分析、反馈、评价和展示等功能，
                                    构建大数据监管技术反腐体系，减少和消除权力寻租空间，推进落实两个责任和一岗双责，促进党风廉政建设，提升政府治理能力。</li>
                            </ul>
                        </li>
                        <li>我的职责：
                            <ul class="twoText">
                                <li>负责按UI所给设计图，重写已完成功能样式，负责将新样式风格应用在新功能页面的编写上；</li>
                                <li>通过JavaScript结合jQuery完成动态交互效果的编写；</li>
                                <li>负责页面交互效果、完成页面跳转等逻辑；</li>
                                <li>负责和后台协商解决页面数据渲染、返回等问题；</li>
                                <li>负责修改因需求变动、基于一期项目的高耦合、数据变动等等因素所产生的BUG</li>
                            </ul>
                        </li>
                    </ul>
                </div>
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
              dialog:false,
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
                            .twoText{
                                text-indent: 2em;
                            }
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
                    .twoText{
                        text-indent: 2em;
                    }
                }
            }
        }
    }
</style>