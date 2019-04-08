import Inertia from 'inertia-vue';
import Vue from 'vue';

let app = document.getElementById('app');

new Vue({
  render: h => h(Inertia, {
    props: {
      component: app.dataset.component,
      props: JSON.parse(app.dataset.props),
      resolveComponent: (component) => {
        return import(`@/pages/${component}`).then(module => module.default)
      },
    },
  }),
}).$mount(app);
