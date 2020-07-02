<template>
  <p>{{ $t("hello") }}</p>
</template>

<script>
export default {
  name: "HelloI18n"
};
</script>

<i18n>
{
  "cn":{
    "hello":"您好！"
  },
  "en": {
    "hello": "Hello i18n in SFC!"
  }
}
</i18n>
