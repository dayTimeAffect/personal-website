
<template>
    <div class="dialog">
        <div class="mask" v-if="!content.img.img"></div>
        <div class="content"  v-if="!content.img.img">
            <div class="img">
                <img :src="getPic(content.img.one.url)" alt="" v-if="this.content.img.one.is">
                <Carousel autoplay loop arrow="always" class="carousel" :autoplay-speed="content.img.more.autoSpeed" v-else>
                    <template v-for="url of content.img.more.url">
                        <CarouselItem>
                            <div class="demo-carousel">
                                <img v-bind:src="getPic(url)" alt="" style="display: block">
                            </div>
                        </CarouselItem>
                    </template>
                </Carousel>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Dialog",
        data(){
            return {
                content:{
                  img:{
                      img:true,
                      one:{
                          is:true,
                          url:undefined
                      },
                      more:{
                          autoSpeed:5000,
                          url:undefined,
                      }

                  }
                },
                contentIndex:undefined
            }
        },
        props:['dialogArguments'],
        methods:{
            acquireArguments(){

                console.log(this.$props.dialogArguments);
                for (let key in this.$props.dialogArguments){
                    switch (key) {
                        case 'imgUrl':
                            this.content.img.img = true;
                            this.contentIndex = 1;
                            break;
                        default:
                            break
                    }
                }
            },
            disposeContent(){
                switch (this.contentIndex) {
                    case 1:
                        if (this.$props.dialogArguments.imgUrl.length != 1){
                            this.content.img.one.is = false
                            this.content.img.more.url = this.$props.dialogArguments.imgUrl
                        }else {
                            this.content.img.one.url = this.$props.dialogArguments.imgUrl
                        }
                        break
                    default:
                        break
                }
            },
            getPic(url){
                //获取图片
                return require("../../assets/"+url+"")
            },
        },
        mounted() {
            this.acquireArguments();
            this.disposeContent();
            console.log(this.content);
        }

    }
</script>

<style scoped>
    .dialog{
        width: 100vw;
    }
    .mask{
        width: 100%;
        height: 100%;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 9999;
        background-color: #333;
        opacity: 0.7;
    }
    .content{
        box-sizing: border-box;
        border-bottom: 1px solid black;
        border-top: 1px solid black;
        height: 500px;
        position: fixed;
        left: 0;
        top: 20%;
        right: 0;
        z-index: 10000;
    }
    .content .img img{
        height: 500px;
        margin: auto;
        box-sizing: border-box;
    }
    .content .img .carousel{
        margin: auto;
        width: 65%;
        min-width: 800px;
    }
</style>