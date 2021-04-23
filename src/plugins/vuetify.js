import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import pt from 'vuetify/es5/locale/pt'

Vue.use(Vuetify);

export default new Vuetify({
  lang: {
    locales: {pt},
    current: 'pt'
  },
  theme: {
    themes: {
      light: {
        primary: '#09c4e3',
        secondary:  '#b3cce0',
        terciary: '#f9fafc'
      }
    }
  },
  icons: {
    iconfont: 'md'
  }
});
