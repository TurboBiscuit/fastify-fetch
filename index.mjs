import fp from 'fastify-plugin'
import fetch from 'node-fetch'
export default fp((fastify, options, next) => {
    fastify.decorate('fetch', fetch)
    next()
}, {
    fastify: '>=1.0.0',
    name: 'fastify-fetch'
})