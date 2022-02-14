<!--
 * @Author: 24min
 * @Date: 2022-02-14 20:41:59
 * @LastEditors: 24min
 * @LastEditTime: 2022-02-14 21:00:08
 * @FilePath: \antd-vue-model\src\components\HelloWorld.vue
 * @note: If it ain't broke, don't fix it.🍤
 * @Description: to bo continued...
-->
<template>
  <div class="hello">
    <Button @click="() => (isShow = true)"> 打开对话框1</Button>
    <Modal v-model:visible="isShow" title="打开对话框1" @ok="handleOk">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
    <hr />
    <Button @click="() => (isShow2 = true)"> 打开对话框2</Button>
    <Modal
      v-model:visible="isShow2"
      title="打开对话框2"
      @ok="handleOk2"
      :getContainer="temp"
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  </div>
</template>

<script>
import { Modal, Button } from "ant-design-vue";
import { ref } from "vue";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  setup() {
    const isShow = ref(false);
    const handleOk = () => {
      isShow.value = false;
    };
    const isShow2 = ref(false);
    const handleOk2 = () => {
      isShow2.value = false;
    };

    const temp = () => {
      return document.body;
    };
    return {
      isShow,
      handleOk,
      isShow2,
      handleOk2,
      temp,
    };
  },
  components: {
    Modal,
    Button,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
