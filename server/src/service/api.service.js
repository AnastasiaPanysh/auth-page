const bcrypt = require('bcrypt');
const { foundUser, createUserDB, checkUserByPwdDB } = require('../repository/api.repository')

async function createUser(email, pwd) {
    const user = await foundUser(email)
    if (user.length) throw new Error('такой есть')
    const salt = await bcrypt.genSaltSync(10);
    const hashPwd = await bcrypt.hashSync(pwd, salt);
    await createUserDB(email, hashPwd);
}

async function doAuthorization(email, pwd) {
    const foundUser = await foundUser(email);
    if (!foundUser.length) throw new Error('wrong email');

    const userPwd = await checkUserByPwdDB(email);
    if (!(await bcrypt.compare(pwd, userPwd))) throw new Error('wrong password');}

module.exports = { createUser, doAuthorization }