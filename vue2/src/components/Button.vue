<template>
  <div>
    <cos-table></cos-table>
    <Content>
      <el-button @click="click">vue2 button click</el-button>
    </Content>
  </div>
</template>

<script>
import CosTable from "./table"
import Content from "./Content"
export default {
  components: {
    CosTable,
    Content
  },
  methods: {
    click() {
      this.$emit("btnClick");
      // vue3 events needs the Camel-Case start with "on"
      this.$emit("onBtnClick");
    }
  },
  data() {
    return {
      form: {name:"td"}
    }
  }
}
</script>

