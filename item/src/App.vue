<template>
    <div id="app">
        <div class="nav">
            <headnav></headnav>
        </div>
        <div class="container">
            <mainbody></mainbody>
        </div>
        <div class="foot">
            <foot></foot>
        </div>

    </div>
</template>


<script>
    import headnav from './views/head'
    import mainbody from './views/mainbody'
    import foot from './views/foot'
    export default {
        name:'app',
        data(){
            return{
                snowflake:{//雪花
                    number:25
                },
            }

        },
        methods:{
            snow:function(app,W,H){
                let snowflake = document.createElement("span");
                snowflake.setAttribute("class","snow")
                snowflake.innerHTML = "❅"
                let startPositionLeft = Math.random()*W - 200 //生成位置
                let startOpacity = 0.7 + Math.random()*0.3//生成时的透明度
                let duration = Math.ceil(Math.random()*1000 + 3000) //飘落时间
                let f_size = Math.random()*20 + 5 //雪花大小
                snowflake.style.left = startPositionLeft + "px"
                snowflake.style.fontSize = f_size + "px"
                snowflake.style.opacity = startOpacity

                this.snowCreat = ()=>{
                    app.appendChild(snowflake)
                }
                this.snowMove = ()=>{
                    let duration = Math.ceil(Math.random()*1000 + 3000) //飘落时间
                    setTimeout(()=>{
                        H = app.offsetHeight
                        snowflake.style.transition = `all ${duration}ms`
                        snowflake.style.left = parseInt(snowflake.style.left) + Math.random()*200 + "px"
                        snowflake.style.top = H + "px"
                        snowflake.style.opacity = 0.5 + Math.random()*0.2
                        this.recover(duration)
                    },100)
                }
                this.recover = (duration)=>{
                    setTimeout(()=>{
                        W = app.offsetWidth
                        snowflake.style.transition = `all 0s`
                        snowflake.style.opacity = 0.7 + Math.random()*0.3
                        snowflake.style.top = "-50px"
                        snowflake.style.left = Math.random()*W - 200 + "px"
                        snowflake.style.fontSize = Math.random()*20 + 5 + "px"
                        this.snowMove()
                    },duration)
                }

            },
        },
        mounted(){
            let app = document.getElementById("app")
            let W = app.offsetWidth
            let H = app.offsetHeight
            let idex = 0

            setInterval(()=>{
                idex++
                if (idex <= this.snowflake.number){
                    let a = new this.snow(app,W,H)
                    a.snowCreat()
                    a.snowMove()
                }
            },100)

        },
        components:{
            headnav,
            mainbody,
            foot
        }
    }
</script>

<style lang="less">
    *{
        margin: 0;
        padding: 0;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    ul,li,ol{
        list-style: none;
    }
    a,b{
        text-decoration: none;
    }
    #app{
        min-width: 1700px;
        overflow: hidden;
        &>div{
            width: 1700px;
            margin: auto;
            box-sizing: border-box;
            overflow: hidden;
        }

        .nav{
            overflow: hidden;

        }
        .container{
            overflow: hidden;

        }
        .foot{
            position: absolute;
            left: 0;
            right: 0;
            &:after{
                display: block;
                content: "";
                clear: both;
            }
        }

        .snow{
            position: absolute;
            top: 50px;
            color: #fff;
            z-index: 1000;
            /*transition: all 0.3s;*/
        }
    }

</style>
