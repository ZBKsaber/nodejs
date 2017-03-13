/**
 * Created by Saber on 2017/3/13.
 */
function People(name,sex,age){
    this.name = name;
    this.sex = sex;
    this.age = age;
}

People.prototype = {
    sayHell : function(){
        console.log(this.name + this.sex + this.age);
    }
}
// 此时,People就被视为构造函数,可以用new来实例化
module.exports = People;