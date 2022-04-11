import { defineAppSetup } from '@slidev/types'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

export default defineAppSetup(({ app, router }) => {
  // Vue App
  app.component('font-awesome-icon', FontAwesomeIcon)
})
