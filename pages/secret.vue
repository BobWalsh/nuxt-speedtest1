<template>
  <div>
    <h1 class="title is-1">this is secret info</h1>
  </div>
</template>

<script>
import { getUserFromCookie } from '@/helpers'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import Cookies from 'js-cookie'
export default {
  asyncData({ req, redirect }) {
    if (process.server) {
      const user = getUserFromCookie(req)
      console.log(user)
      if (!user) {
        redirect('/login')
      }
    } else {
      let user = firebase.auth().currentUser
      if (!user) {
        redirect('/login')
      }
      if (!user) {
        console.log('not logged in!')
        redirect('/login')
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
