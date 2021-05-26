<script lang="ts">
import {Vue} from "vue-class-component"

import {ROUTE_BOT_NAME, ROUTE_ROADMAP_NAME, ROUTE_WHAT_NAME} from "@/router"

export default class Menu extends Vue {

  get ROUTE_BOT_NAME(): string {
    return ROUTE_BOT_NAME
  }

  get ROUTE_WHAT_NAME(): string {
    return ROUTE_WHAT_NAME
  }

  get ROUTE_ROADMAP_NAME(): string {
    return ROUTE_ROADMAP_NAME
  }

  onSelect(element: string): void {
    this.$router.push({
      name: element
    })
  }
}
</script>

<template>
  <el-menu mode="horizontal" @select="onSelect">
    <el-menu-item :index="ROUTE_BOT_NAME">Bot</el-menu-item>
    <el-menu-item :index="ROUTE_WHAT_NAME">Documentation</el-menu-item>
    <el-menu-item :index="ROUTE_ROADMAP_NAME">Roadmap</el-menu-item>
  </el-menu>
</template>
