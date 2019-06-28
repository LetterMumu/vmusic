<template lang="html">
    <div>
      <SwiperBanner/>
      <TodayRecommend title="今日榜单" type="1"/>
      <NewsMusic/>
      <MusicListNav/>
      <keep-alive>
        <router-view/>
      </keep-alive>
      <TodayRecommend title="今日歌单" type="24"/>

    </div>
</template>

<script>
  import SwiperBanner from "../components/Swiper_Banner"
  import TodayRecommend from "../components/Today_Recommend"
  import NewsMusic from "../components/News_Music"
  import MusicListNav from  "./musiclist/music_listnav"

    export default {
        name: "home",
      components: {
        SwiperBanner,
        TodayRecommend,
        NewsMusic,
        MusicListNav
        }
    }
</script>

<style lang="css">

</style>
