module.exports = {
  name: 'generate:pages',
  description: 'Create new page inside src/page',
  run: async toolbox => {
    const { parameters, createComponent } = toolbox;

    const name = parameters.first;

    await createComponent('src/pages', name);
  },
};
