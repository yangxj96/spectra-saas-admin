import {App} from 'vue';

export default (app: App<Element>) => {
    app.directive('auth', (el: HTMLElement, binding) => {
        el.addEventListener('click', () => {
            console.log('auth directive click');
        })
    })
}
