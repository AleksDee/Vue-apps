// import User from '../components/User.vue';
import Home from '../components/Home.vue';
import UserStart from '../components/UserStart.vue';
// import UserDetail from '../components/UserDetail.vue';
import UserEdit from '../components/UserEdit.vue';
import Header from '../components/Header.vue';

const User = resolve => {
    require.ensure(['../components/User.vue'], () => {
        resolve(require('../components/User.vue'));
    });
};

const UserDetail = resolve => {
    require.ensure(['../components/UserDetail.vue'], () => {
        resolve(require('../components/UserDetail.vue'));
    });
};


export const routes = [
    { path: '', components: {
        default: Home,
        'header-top': Header
    } },
    { path: '/user', components: {
        default: User,
        'header-bottom': Header
    }, 
    
    children: [
        { path: '', component: UserStart },
        { path: ':id', component: UserDetail, name: 'home', beforeEnter: (to, from, next) => {
            console.log('Local Guard');
        } },
        { path: ':id/edit', component: UserEdit, name: 'userEdit' },
    ] },

    {
        // path: '/redirect-me', redirect: '/user'
        path: '/redirect-me', redirect: {name: 'home'}
    },

    {
        path: '*', redirect: '/'
    },

    { path: '/', component: WelcomePage },
    { path: '/signup', component: SignupPage },
    { path: '/signin', component: SigninPage },
    { path: '/dashboard', component: DashboardPage }
];