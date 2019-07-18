import Router from 'vue-router'
import Welcome from './pages/Welcome'
import Calendar from './pages/calendars/Individual'
/*import VueI18n from 'vue-i18n'
import messages from '@/lang/en'
import axios from 'axios'

export const i18n = new VueI18n({
    locale: 'en', // set locale
    fallbackLocale: 'en',
    messages // set locale messages
  })

const loadedLanguages = ['en'] // our default language that is preloaded 

function setI18nLanguage (lang) {
  i18n.locale = lang
  axios.defaults.headers.common['Accept-Language'] = lang
  document.querySelector('html').setAttribute('lang', lang)
  return lang
}
*/

// function loadLanguageAsync (lang) {
//   if (i18n.locale !== lang) {
//     if (!loadedLanguages.includes(lang)) {
//       return import(/* webpackChunkName: "lang-[request]" */ `@/lang/${lang}`).then(msgs => {
//         i18n.setLocaleMessage(lang, msgs.default)
//         loadedLanguages.push(lang)
//         return setI18nLanguage(lang)
//       })
//     } 
//     return Promise.resolve(setI18nLanguage(lang))
//   }
//   return Promise.resolve(lang)
// }


//As order of execution is not guaranteed
export function buildRouter(baseUrl) {
    console.log('[Vue-router] Setting base URL=' + baseUrl)

    // Define the routes of the application
    let router = new Router({
        base: baseUrl,
        mode: 'history',
        routes: [
            {
                path: '#/',
                name: 'Welcome',
                component: Welcome
            },
            {
                // Compose your own group of teachers
                path: '#/calendars/individual',
                name: 'Calendar',
                component: Calendar
            }
        ]
    });
    
    router.beforeEach(
        (to, from, next) => {
            //Lazy loading of i18n messages
            const lang = to.params.lang
            console.log('[Vue-router] Lang=' + lang)
            //loadLanguageAsync(lang).then(() => next())

            //Open the application for the first time 
            // => redirect to teachers' calendar
            // or last visited page
            if (to.path == '/' && sessionStorage.length == 0) {
                if (localStorage.getItem('lastVisitedPage') == null
                    || localStorage.getItem('lastVisitedPage') == '/'
                    || localStorage.getItem('lastVisitedPage') == sessionStorage.getItem("pathURL")) {
                    next({path: '/calendars/individual'})
                } else {
                    next({path: localStorage.getItem('lastVisitedPage')})
                }
                return;
            }
        
        //Memorize last visited page
        localStorage.setItem('lastVisitedPage', to.path)
        next()
        }
    );
    
    return router
}
