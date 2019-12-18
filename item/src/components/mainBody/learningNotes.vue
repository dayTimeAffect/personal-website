<template>
    <div id="learningNotes">
        <div class="articleBox">
            <button @click="requireHtml">123</button>
            <!--<VueMarkdown :source="htmlMD"></VueMarkdown>-->
            <div v-html="htmlMD"></div>
        </div>
        <div class="DetailDisplay">123</div>
    </div>
</template>

<script>
    // import VueMarkdown from 'vue-markdown'
    import showdown from 'showdown'
    export default {
        name: "learningNotes",
        data(){
            return{
                htmlMD:``
            }
        },
        methods:{
            requireHtml(){
                let converter = new showdown.Converter();
                let xhr = new XMLHttpRequest();
                xhr.open('get', '/static/README.md');
                xhr.send('')
                xhr.onload = function(){

                    let html = converter.makeHtml(xhr.responseText);
                    this.htmlMD = html
                    document.getElementsByClassName('DetailDisplay')[0].innerHTML = html;
                    console.log(xhr.responseText);
                    console.log(this.htmlMD);
                }
            }
        },
        components:{
            // VueMarkdown

        },
        mounted() {
            let converter = new showdown.Converter();

            // console.log(converter);
            // const url = `/static/README.md`;
            /*this.$http.get('./static/a.json').then((response) => {
                this.htmlMD = response.data;
                console.log(this.htmlMD);
            });
            this.htmlMD = require('../../../static/README.md')*/
/*            let xhr = new XMLHttpRequest();
            xhr.open('get', '/static/markdown.md');
            xhr.send('')
            xhr.onload = function(){

                let html = converter.makeHtml(xhr.responseText);
                this.htmlMD = html
                document.getElementsByClassName('DetailDisplay')[0].innerHTML = html;
                console.log(xhr.responseText);
                console.log(this.htmlMD);
            }*/
        }
    }
</script>

<style scoped lang="less">
    #learningNotes{
        .articleBox{

        }
    }
</style>