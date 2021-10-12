module.exports = {
    mount: {
        public: {url: '/'},
        src: {url: '/dist'}
    },
    plugins: [
        '@snowpack/plugin-react-refresh',
        '@snowpack/plugin-typescript'
    ],
    routes: [
        {match: 'routes', src: '.*', dest: './index.html'}
    ],
    optimize: {
        bundle: true
    },
    buildOptions: {
        baseUrl: '/fun-focused-coaching'
    }
}
