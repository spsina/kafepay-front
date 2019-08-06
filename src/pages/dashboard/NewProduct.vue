<template>
    <div class="ui segment" style="border-radius: 15px; margin: 30px auto; width: 90%; text-align: center; padding: 0px;">
        <div class="header" style="border-radius: 15px 15px 0px 0px; background-color: #777777; color: #dddddd; text-align: center; font-size: 20px; padding: 13px;">
            <div style="margin: auto"> ثبت محصول</div>
        </div>
        <form class="ui form" style="border-radius: 0px 0px 15px 15px; text-align: right; padding: 10px; border: 1px solid #777777;" action="/projects/create/" method="post">
                <div class="field">
                    <p>
                        عنوان محصول
                    </p>
                    <input style="text-align: right; border-radius: 5px; border: 2px solid #cacaca !important;" type="text" name="title">
                </div>
                <div class="field">
                    <p>
                        شرح جزییات محصول
                    </p>
                    <textarea style="text-align: right; border-radius: 5px; border: 2px solid #cacaca !important;" name="description"></textarea>
                </div>
                <div class="inline field" dir="rtl">
                    <p>
                        قیمت
                    </p>
                    <input style="text-align: right; border-radius: 5px; border: 2px solid #cacaca !important;" type="number" name="price">
                </div>
                <div style="text-align: center;">
                    <input class="ui positive button" value="ارسال" type="submit">
                </div>
            </form>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>

</style>
