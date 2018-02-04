#!/usr/bin/env node

const clone = require('git-clone')
const program = require('commander')
const shell = require('shelljs')
const log = require('tracer').colorConsole()

program.version('1.0.0').description('corn project template cli')
program
  .command('* <tpl> <project> <argv>')
  .option('-c, --client', 'create Client')
  .option('-s, --server', 'create Server')
  .option('-a, --all', 'create All')
  .action(function(tpl, project) {
    log.info('create Client Only：corn myproject -c')
    log.info('create Server Only：corn myproject -s')
    log.info('create All：corn myproject -a')

    if (!tpl && tpl !== 'corn') {
      log.error('You should use：corn <myproject> <argv>')
    } else {
      if (program.client) {
        log.info('you are creating a client!')
      }
      if (program.server) {
        log.info('you are creating a server!')
      }
      if (program.all) {
        log.info('you are creating a all!')
      }
    }

    // if (tpl && project) {
    //   let pwd = shell.pwd()
    //   log.info(`downloading project to location：${pwd}/${project}/ ...`)
    //   clone(
    //     `https://github.com/cheneyweb/${tpl}.git`,
    //     pwd + `/${project}`,
    //     null,
    //     function() {
    //       shell.rm('-rf', pwd + `/${project}/.git`)
    //       log.info('模板工程建立完成')
    //     }
    //   )
    // } else {
    //   log.error('正确命令例子：x-cli x-express myproject')
    // }
  })
program.parse(process.argv)
