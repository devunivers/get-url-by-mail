let list = require('./list.js').config;
let Isemail = require('isemail');
let removeLast = require('remove-last-element');
let error = {
    success:false
},
success = {
    success:true
}


/**
 * extention - remove extention
 *
 * @param  {array} split description
 */
function extention(split){
    let l = split.split('.');
    removeLast(l);
    return l.join('.');
}
function generateSuccess (url){
    let forge = success;
    forge['url'] = 'https://mail.'+url;
    return forge;
}
function generateError(msg){
    let forge = error;
    forge['msg'] = msg;
    return forge;
}
/**
 *@param {string} // adress mail
 */
module.exports = (mail)=>{
    if(typeof mail !== 'string'){
        throw new TypeError('param must be string')
    }
    if (Isemail.validate(mail)) {
        let splited = String(mail).split('@');
        let withoutExt = extention(splited[1])
        let forge = null;
        for(let x in list){
            if(x == withoutExt){
                let forge = success;
                forge['url'] = list[x]
                return forge;
            }
        }
        return generateSuccess(splited[1]);
    }

    else{
        return generateError('String must be mail');
    }
}
