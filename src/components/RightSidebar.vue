<template>
    <div class="ui right sidebar inverted vertical menu" id="right-menu">
        <div class="item">
            <div class="ui icon input desk-only" id="rightsearchbar">
                <i class="search icon"></i>
                <input type="text" placeholder="جستجو...">
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        mounted(){
            $(document).ready(function() {
                $("#right-menu a.item").click(function(){
                    $("#right-menu")
                        .first()
                        .sidebar("hide", { transition: "push" });
                })
                $("#right-menu")
                    .first()
                    .sidebar("setting", { transition: "push" })
                    .sidebar("attach events", ".mobile-button");
            });
        }
    }
</script>

<style scoped>
</style>