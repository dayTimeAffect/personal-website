<template>
    <div id="cssShowTwo">
        <button>按钮</button>
    </div>
</template>

<script>
    export default {
        name: "cssShowTwo"
    }
</script>

<style scoped lang="less">
    #cssShowTwo{
        width: 400px;
        padding-left: 50px;
        button{
            font-size: 80px;
            outline: none;
            border: none;
            color: white;
            padding: 0.3em 1em;
            border-radius: .2em;
            cursor: pointer;
            background: linear-gradient(#3de5fb,#26acbd);
            text-shadow: 0 2px 2px grey;
            box-shadow: 0 0.2em 0 #068494, 0 0.2em 0.2em grey;
            &:active{
                box-shadow: 0 0.1em 0 #068494, 0 0.1em 0.1em grey;
                transform: translate(0, 0.1em);
            }
        }
    }
</style>