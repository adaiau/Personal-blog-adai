<template>
  <form
    @submit.prevent="handleSubmit"
    id="data-form-container"
    ref="form"
    class="data-form-container"
  >
    <div class="form-item">
      <div class="input-area">
        <input
          v-model="formData.nickName"
          type="text"
          maxlength="10"
          placeholder="用户昵称"
        />
        <span class="tip">{{ formData.nickName.length }}/10</span>
      </div>
      <div class="error">{{ err.nickName }}</div>
    </div>
    <div class="form-item">
      <div class="text-area">
        <textarea
          v-model="formData.content"
          maxlength="300"
          placeholder="输入内容"
        ></textarea>
        <span class="tip">{{ formData.content.length }}/300</span>
      </div>
      <div class="error">{{ err.content }}</div>
    </div>
    <div class="form-item">
      <div class="button-area">
        <button @click="handleClick($event)" :disabled="isSubmit">
          {{ isSubmit ? "提交中..." : "提交" }}
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        nickName: "",
        content: "",
      },
      err: {
        nickName: "",
        content: "",
      },
      isSubmit: false,
    };
  },
  methods: {
    handleClick() {
      this.err.nickName = this.formData.nickName ? "" : "请输入昵称！";
      this.err.content = this.formData.content ? "" : "请输入内容！";
      if (this.err.nickName || this.err.content) {
        // 没填
        return;
      } else {
        this.isSubmit = true;
        this.$emit("submit", this.formData, (showMessage) => {
          // 清空输入框
          this.formData.content = "";
          this.isSubmit = false;
          // 调用弹窗
          this.$showMessage({ content: showMessage, type: "success" });
        });
      }
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/colorVar.less";
.data-form-container {
  padding-top: 10px;
  margin-bottom: 20px;
  overflow: hidden;
}
.form-item {
  margin-bottom: 8px;
}
.input-area {
  width: 50%;
  position: relative;
}
.text-area {
  position: relative;
}
.tip {
  position: absolute;
  right: 5px;
  bottom: 5px;
  color: #b4b8bc;
  font-size: 12px;
}
input,
textarea {
  display: block;
  width: 100%;
  box-sizing: border-box;
  border: 1px dashed @gray;
  outline: none;
  color: @words;
  font-size: 14px;
  border-radius: 4px;
  &:focus {
    border-color: @primary;
  }
}
input {
  padding: 0 15px;
  height: 40px;
}
textarea {
  resize: none;
  padding: 8px 15px;
  height: 120px;
}
.error {
  margin-top: 6px;
  color: @danger;
  font-size: 14px;
  height: 20px;
  line-height: 20px;
}
button {
  position: relative;
  cursor: pointer;
  border: none;
  outline: none;
  width: 100px;
  height: 34px;
  color: #fff;
  border-radius: 4px;
  background: @primary;
  &:hover {
    background: darken(@primary, 10%);
  }
  &:disabled {
    background: lighten(@primary, 20%);
    cursor: not-allowed;
  }
}
</style>
