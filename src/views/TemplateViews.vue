<template>
  <div>
    <NavBar/>
    <SideMenu/>
    <router-view></router-view>
  </div>
</template>
<script>
import NavBar from "@/components/templateComponents/NavBar";
import SideMenu from "@/components/templateComponents/SideMenu";

export default{
  components: {
    NavBar,
    SideMenu
  },
}
</script>