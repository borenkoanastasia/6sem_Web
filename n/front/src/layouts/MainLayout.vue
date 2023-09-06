<template>
  <q-layout view="hHh Lpr lFf" class="shadow-2 rounded-borders">
    <q-header elevated>
      <q-toolbar class="bg-brown-10">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <!-- <q-btn flat round dense icon="home" /> -->

        <q-toolbar-title> Зоопарк </q-toolbar-title>

        <!--<div>Quasar v{{ $q.version }}</div>!-->
        <q-btn flat round dense icon="person" @click="toggleRightDrawer">
          <q-menu>
            <q-list padding>
              <!--<q-item-label header> Разделы </q-item-label>!-->

              <q-item
                clickable
                v-ripple
                v-for="link in essentialAccLinks()"
                :key="link.title"
                v-bind="link"
                :click="reloadPage"
                :to="link.to"
              >
                <q-item-section>
                  {{ link.title }}
                </q-item-section>
                <q-separator horizontal />
              </q-item>

              <!--<EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />!-->
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      :mini="miniState"
      mini-to-overlay
      @mouseover="miniState = false"
      @mouseout="miniState = true"
      show-if-above
      :width="200"
      :breakpoint="500"
      bordered
    >
      <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: '0' }">
        <q-list padding>
          <!--<q-item-label header> Разделы </q-item-label>-->

          <q-item
            clickable
            v-ripple
            v-for="link in essentialLinks"
            :key="link.title"
            v-bind="link"
            :to="link.to"
          >
            <q-item-section avatar>
              <!--<q-avatar color="teal" text-color="white" icon="{{link.icon}}" />!-->
              <q-icon :name="link.icon" color="brown-10" />
            </q-item-section>
            <q-item-section>
              {{ link.title }}
            </q-item-section>
          </q-item>

          <!--<EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />!-->
        </q-list>
      </q-scroll-area>
    </q-drawer>
    <!--
    <q-drawer
      side="right"
      v-model="rightDrawerOpen"
      show-if-above
      overlay
      :width="180"
      :breakpoint="500"
      bordered
    >
      <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: '0' }">
        <q-list padding>
          <q-item-label header> Разделы </q-item-label>

          <q-item
            clickable
            v-ripple
            v-for="link in essentialAccLinks"
            :key="link.title"
            v-bind="link"
          >
            <q-item-section>
              {{ link.title }}
            </q-item-section>
          </q-item>

          <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
        </q-list>
      </q-scroll-area>
    </q-drawer> -->

    <q-page-container class="bg-brown-1">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { getAuthState, output } from 'src/ts/Authorization';
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
// import EssentialLink from 'components/EssentialLink.vue';

// const linksList = [
//   {
//     title: 'Docs',
//     caption: 'quasar.dev',
//     icon: 'school',
//     link: 'https://quasar.dev',
//   },
//   {
//     title: 'Github',
//     caption: 'github.com/quasarframework',
//     icon: 'code',
//     link: 'https://github.com/quasarframework',
//   },
//   {
//     title: 'Discord Chat Channel',
//     caption: 'chat.quasar.dev',
//     icon: 'chat',
//     link: 'https://chat.quasar.dev',
//   },
//   {
//     title: 'Forum',
//     caption: 'forum.quasar.dev',
//     icon: 'record_voice_over',
//     link: 'https://forum.quasar.dev',
//   },
//   {
//     title: 'Twitter',
//     caption: '@quasarframework',
//     icon: 'rss_feed',
//     link: 'https://twitter.quasar.dev',
//   },
//   {
//     title: 'Facebook',
//     caption: '@QuasarFramework',
//     icon: 'public',
//     link: 'https://facebook.quasar.dev',
//   },
//   {
//     title: 'Quasar Awesome',
//     caption: 'Community Quasar projects',
//     icon: 'favorite',
//     link: 'https://awesome.quasar.dev',
//   },
// ];
const linksList = [
  {
    title: 'Главная',
    icon: 'arrow_back',
    to: '/main',
  },
  {
    title: 'Животные',
    icon: 'pets',
    to: '/animals',
  },
  {
    title: 'Отделы',
    icon: 'public',
    to: '/departments',
  },
  {
    title: 'Сотрудники',
    icon: 'group',
    to: '/accounts',
  },
];

const linksAccAuthList = [
  {
    title: 'Войти',
    to: '/authorization',
  },
  {
    title: 'Зарегистрироваться',
    to: '/registration',
  },
];
const linksAccNoAuthList = [
  {
    title: 'Аккаунт',
    to: '/account',
  },
  {
    title: 'Выйти',
    to: '/output',
  },
];

function getMenuOptions() {
  if (getAuthState()) {
    return linksAccNoAuthList;
  }
  return linksAccAuthList;
}
export default defineComponent({
  name: 'MainLayout',

  components: {
    // EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);
    const rightDrawerOpen = ref(false);
    const miniState = ref(true);

    function reloadPage() {
      window.location.reload();
      console.log('reload');
    }

    return {
      essentialLinks: linksList,
      essentialAccLinks: getMenuOptions,
      leftDrawerOpen,
      rightDrawerOpen,
      miniState,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
      reloadPage: reloadPage,
    };
  },
});
</script>
