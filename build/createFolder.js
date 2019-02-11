const program = require('commander');
const chalk = require('chalk');
const ora = require('ora');
const path = require('path');
const fs = require('fs');
const spinner = ora({
    text: chalk.blue('generate template begin')
});

const BASE_DIR = path.join(__dirname, '../packages');


const isExist = (name) => fs.existsSync(path.join(BASE_DIR, name));

program
.version(require('../package.json').version)
.action((name) => {
    const inquirer = require('inquirer');
    inquirer.prompt([
        {
            name: 'name',
            message: '请输入文件夹名称'
        }
    ])
    .then(data => {
        const { name } = data;
        if (isExist(name)) {
            return spinner.fail('文件夹已存在')
        }
        createWxml(BASE_DIR + '/' + name);
    });
})


function createWxml(path, name) {
    const template = `
    <view class="container">
    </view>
    `;
    fs.mkdirSync(path);
    fs.writeFileSync(path + '/index.wxml', template, 'utf-8');
}
// console.log('');
// spinner.start('Generating, please wait......');
// console.log('')
// console.log('process.argv: ', process.argv);

program.parse(process.argv)