// resources/js/shims-inertia.d.ts

interface CreateInertiaAppProps {
    id?: string
    resolve: (name: string) => DefineComponent | Promise<DefineComponent> | { default: DefineComponent }
    setup: (props: { el: Element; App: InertiaApp; props: InertiaAppProps; plugin: Plugin }) => void | VueApp
    title?: (title: string) => string
    progress?:
      | false
      | {
          delay?: number
          color?: string
          includeCSS?: boolean
          showSpinner?: boolean
        }
    page?: Page
    render?: (app: VueApp) => Promise<string>
}

declare module '@inertiajs/vue3' {
    import { App, Plugin } from 'vue';
    const InertiaVue3: Plugin;
    export function createInertiaApp({
        id = 'app',
        resolve,
        setup,
        title,
        progress = {},
        page,
        render,
      }: CreateInertiaAppProps): Promise<{ head: string[]; body: string }>;
    export { InertiaVue3 as default };
}
  