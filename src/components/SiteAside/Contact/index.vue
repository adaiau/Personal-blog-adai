<template>
  <ul class="contact-container">
    <li>
      <a target="_blank" :href="data.github">
        <div class="icon">
          <Icon type="github" :size="26" />
        </div>
        <span>{{ data.githubName }}</span>
      </a>
    </li>
    <li>
      <a :href="`mailto:${data.mail}`">
        <div class="icon">
          <Icon type="mail" :size="26" />
        </div>
        <span>{{ data.mail }}</span>
      </a>
    </li>
    <li>
      <a
        :href="`tencent://message/?Menu=yes&uin=${data.qq}&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45`"
      >
        <div class="icon">
          <Icon type="qq" :size="26" />
        </div>
        <span>{{ data.qq }}</span>
      </a>
      <div class="pop">
        <img :src="data.qqQrCode" alt="" />
      </div>
    </li>
    <li>
      <a href="">
        <div class="icon weixin">
          <Icon type="weixin" :size="32" />
        </div>
        <span>{{ data.weixin }}</span>
      </a>
      <div class="pop">
        <img :src="data.weixinQrCode" alt="" />
      </div>
    </li>
  </ul>
</template>

<script>
import Icon from "@/components/Icon";
import { mapState } from "vuex";
export default {
  components: {
    Icon,
  },

  computed: mapState("setting", ["data"]),
};
</script>

<style lang="less" scoped>
@import "~@/styles/global.less";
@import "~@/styles/colorVar.less";
.contact-container {
  margin: 0;
  padding: 20px;
  list-style: none;
  color: @gray;
  @itemHeight: 30px;
  li {
    position: relative;
    height: @itemHeight;
    line-height: @itemHeight;
    margin: 14px 0;
    &:hover {
      .pop {
        transform: scaleY(1);
      }
    }
  }
  a {
    display: flex;
    align-items: center;
    font-size: 14px;
    cursor: pointer;
  }
  .icon {
    font-size: 26px;
    width: 36px;
    &.weixin {
      font-size: 32px;
      //   ****
      text-indent: -3px;
      //   ****
    }
  }
  .pop {
    position: absolute;
    left: 0;
    bottom: @itemHeight + 5px;
    padding: 10px 20px;
    width: 150px;
    height: 150px;
    background: #fff;
    border-radius: 5px;
    transform: scaleY(0);
    transform-origin: bottom center;
    transition: 0.3s;
    img {
      width: 100%;
    }
    &::after {
      content: "";
      position: absolute;
      left: 50%;
      transform: translate(-50%);
      bottom: -16px;
      border: 8px solid;
      border-color: #fff transparent transparent transparent;
    }
  }
}
</style>
