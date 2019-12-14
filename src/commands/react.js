module.exports = {
  name: 'react',
  description: 'Generate subpasts to projects with the reactjs',
  run: async toolbox => {
    const {
      template,
      prompt: { confirm },
      print: { success, error },
    } = toolbox;

    const confirmation = await confirm('You are trying install correctly?');

    if (!confirmation) return error("Thank's for letting us know!");

    // EDITORCONFIG
    await template.generate({
      template: 'editorconfig.js.ejs',
      target: '.editorconfig',
    });

    // Prettier
    await template.generate({
      template: 'prettier.json.ejs',
      target: '.prettierrc',
    });

    return success('Generate new project nodejs');
  },
};
