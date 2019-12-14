module.exports = {
  name: 'node',
  description: 'Generate subpasts to projects with the nodejs',
  run: async toolbox => {
    const {
      parameters,
      template,
      system: { run },
      prompt: { confirm },
      print: { success, spin },
      createFilesAndPasts,
    } = toolbox;

    if (parameters.options.db === 'sequelize') {
      const { dialect } = parameters.options;

      const pg = 'pg pg-hstore';
      const mysql = 'mysql2@^1.5.2';
      const mariadb = 'mariadb';
      const sqlite = 'sqlite3@^4.0.0';
      const mssql = 'tedious@^6.0.0';

      const typePackage = await confirm(
        'The type of package manager with Yarn?'
      );
      const argsType = typePackage ? 'yarn add' : 'npm install --save';

      const sequelize_cli = await confirm(
        "Do you want to use the 'sequelize-cli'?"
      );
      const argSequelize = sequelize_cli
        ? typePackage
          ? 'sequelize-cli -D'
          : 'sequelize-cli --save-dev'
        : '';

      const spinner = spin('Running...\n');

      switch (dialect) {
        case 'postgres':
          await run(`${argsType} sequelize ${pg} jsonwebtoken express`, {
            trim: true,
          });
          await run(
            `${argsType} eslint prettier eslint-plugin-prettier eslint-config-prettier babel-eslint -D`,
            { trim: true }
          );
          await run(`${argsType} eslint --init`, { trim: true });
          if (sequelize_cli)
            await run(`${`${argsType} ${argSequelize}`}`, { trim: true });
          await createFilesAndPasts(dialect);
          spinner.succeed('The packages went install with success!');
          spinner.info('Verify the file package.json');
          break;
        case 'mysql':
          await run(`${argsType} sequelize ${mysql} jsonwebtoken express`, {
            trim: true,
          });
          await run(
            `${argsType} eslint prettier eslint-plugin-prettier eslint-config-prettier babel-eslint -D`,
            { trim: true }
          );
          await run(`${argsType} eslint --init`, { trim: true });
          if (sequelize_cli)
            await run(`${`${argsType} ${argSequelize}`}`, { trim: true });
          spinner.succeed('The packages went install with success!');
          await createFilesAndPasts(dialect);
          spinner.info('Verify the file package.json');
          break;
        case 'mariadb':
          await run(`${argsType} sequelize ${mariadb} jsonwebtoken express`, {
            trim: true,
          });
          await run(
            `${argsType} eslint prettier eslint-plugin-prettier eslint-config-prettier babel-eslint -D`,
            { trim: true }
          );
          await run(`${argsType} eslint --init`, { trim: true });
          if (sequelize_cli)
            await run(`${`${argsType} ${argSequelize}`}`, { trim: true });
          await createFilesAndPasts(dialect);
          spinner.succeed('The packages went install with success!');
          spinner.info('Verify the file package.json');
          break;
        case 'sqlite':
          await run(`${argsType} sequelize ${sqlite} jsonwebtoken express`, {
            trim: true,
          });
          await run(
            `${argsType} eslint prettier eslint-plugin-prettier eslint-config-prettier babel-eslint -D`,
            { trim: true }
          );
          await run(`${argsType} eslint --init`, { trim: true });
          if (sequelize_cli)
            await run(`${`${argsType} ${argSequelize}`}`, { trim: true });
          await createFilesAndPasts(dialect);
          spinner.succeed('The packages went install with success!');
          spinner.info('Verify the file package.json');
          break;
        case 'mssql':
          await run(`${argsType} sequelize ${mssql} jsonwebtoken express`, {
            trim: true,
          });
          await run(
            `${argsType} eslint prettier eslint-plugin-prettier eslint-config-prettier babel-eslint -D`,
            { trim: true }
          );
          await run(`${argsType} eslint --init`, { trim: true });
          if (sequelize_cli)
            await run(`${`${argsType} ${argSequelize}`}`, { trim: true });
          await createFilesAndPasts(dialect);
          spinner.succeed('The packages went install with success!');
          spinner.info('Verify the file package.json');
          break;
        default:
          await run(`${argsType} sequelize jsonwebtoken express`, {
            trim: true,
          });
          await run(
            `${argsType} eslint prettier eslint-plugin-prettier eslint-config-prettier babel-eslint -D`,
            { trim: true }
          );
          await run(`${argsType} eslint --init`, { trim: true });
          if (sequelize_cli)
            await run(`${`${argsType} ${argSequelize}`}`, { trim: true });
          await createFilesAndPasts(dialect);
          spinner.succeed('The packages went install with success!');
          spinner.info('Verify the file package.json');
          break;
      }
      await template.generate({
        template: 'sequelize.js.ejs',
        target: '.sequelizerc',
      });
    }

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

    success('Generate new project nodejs');
  },
};
