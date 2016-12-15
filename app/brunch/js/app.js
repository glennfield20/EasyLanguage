// eslint-disable-next-line no-undef
glob('./behaviors/*', (e, files) => { files.forEach(require) })
// eslint-disable-next-line no-undef
glob('./initializers/*', (e, files) => { files.forEach(require) })

