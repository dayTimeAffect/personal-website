<template>
    <div id="headnav">
        <div class="nav">
            <span class="title">
            </span>
            <Menu mode="horizontal" theme="light" active-name="1" class="nav-det">
                <MenuItem name="1" to="/">
                    首页
                </MenuItem>
                <MenuItem name="2" to="/resume">
                    <Icon type="ios-paper" />
                    个人简历
                </MenuItem>
                <MenuItem name="3" to="/production">
                    <Icon type="ios-photos" />
                    我的作品
                </MenuItem>
                <MenuItem name="4">
                    <Icon type="ios-planet" />
                    学习笔记
                </MenuItem>
                <MenuItem name="5">
                    <Icon type="ios-wine" />
                    给我留言
                </MenuItem>
                <MenuItem name="6">
                    <Icon type="ios-mail" />
                    技术交流
                </MenuItem>
            </Menu>
        </div>

    </div>
</template>

<script>
    export default {
        name: "headnav",
        data () {
            return {

            }
        }
    }
</script>

<style scoped lang="less">
    @navw:100%;
    #headnav{
        height: 70px;
        width: @navw;
        overflow: hidden;

        .nav{
            width: 1700px;
            height: 70px;
            position: fixed;
            top: 0;
            background-color: #fff;
            border-bottom: 1px solid #ccc;
            z-index: 999;
            .title{
                display: inline-block;
                width: 200px;
                height: inherit;
                background-image: url("../assets/logo.png");
                background-size: 100% (100% - 2px);
                line-height: 65px;
                font-size: 18px;
                font-weight: 600;
                margin-left: 100px;
                color: #515a6e;
                vertical-align: top;
            }
            .nav-det{
                display: inline-block;
                position: absolute;
                right: 50px;
                li{
                    float: left;
                }
            }
        }

    }
</style>