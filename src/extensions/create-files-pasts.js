module.exports = async toolbox => {
  const {
    template,
    print: { info },
  } = toolbox;

  async function createFilesAndPasts(dialect) {
    await template.generate({
      template: 'sequelize-models.js.ejs',
      target: `src/app/models/User.js`,
    })
    await template.generate({
      template: 'sequelize-control.js.ejs',
      target: `src/app/controllers/UserController.js`,
    })
    await template.generate({
      template: 'sequelize-auth.js.ejs',
      target: `src/app/middlewares/auth.js`,
    })
    await template.generate({
      template: 'sequelize-config-auth.js.ejs',
      target: `src/config/auth.js`
    })
    await template.generate({
      template: 'sequelize-dialect.js.ejs',
      target: `src/config/database.js`,
      props: { name: dialect, password: dialect === 'mysql' ? 'root': '' },
    })
    await info('É necessário criar subpastas em src/database: migrations e seeds')
    await template.generate({
      template: 'sequelize-app.js.ejs',
      target: `src/app.js`
    })
    await template.generate({
      template: 'sequelize-server.js.ejs',
      target: `src/server.js`
    })
    await template.generate({
      template: 'sequelize-routes.js.ejs',
      target: `src/routes.js`
    })
  }
  toolbox.createFilesAndPasts = createFilesAndPasts;
}
