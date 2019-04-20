// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import {
  ApolloClient
} from 'apollo-client'
import {
  HttpLink
} from 'apollo-link-http'
import {
  InMemoryCache
} from 'apollo-cache-inmemory'

import VueApollo from 'vue-apollo'

import Vue from 'vue'
import App from './App'
import 'tachyons'

Vue.config.productionTip = false

const httpLink = new HttpLink({
  uri: 'https://api.graph.cool/simple/v1/cjuq0u5hh335l0168ccjt7ubv'
})

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTool: true
})

Vue.use(VueApollo)

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
  defaultOptions: {
    $loadingKey: 'loading'
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  provide: apolloProvider.provide(),
  render: h => h(App)
})
