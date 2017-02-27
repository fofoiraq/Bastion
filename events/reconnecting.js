/*
 * Copyright (C) 2017 Sankarsan Kampa
 *                    https://sankarsankampa.com/contact
 *
 * This file is a part of Bastion Discord BOT.
 *                        https://github.com/snkrsnkampa/Bastion
 *
 * This code is licensed under the Bastion Shared License. It is free to
 * download, copy, compile, use, study and refer under the terms of the
 * Bastion Shared License. You can modify the code only for personal or
 * internal use only. However, you can not redistribute the code without
 * explicitly getting permission fot it.
 *
 * Bastion BOT is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY. See the Bastion Shared License for
 * more details.
 *
 * You should have received a copy of the Bastion Shared License along
 * with this program. If not, see <https://github.com/snkrsnkampa/Bastion/LICENSE>.
 */

const chalk = require('chalk');

module.exports = Bastion => {
  console.log(chalk.cyan(`[${Bastion.user.username}]: `) + 'Reconnecting...');
};
