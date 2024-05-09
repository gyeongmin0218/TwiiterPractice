import SQ, { DATE } from 'sequelize';
import { sequelize } from '../db/database.js';
const DataTypes = SQ.DataTypes; //sequelize에서 사용하는 데이터 형태를

export const User = sequelize.define( // DB에 table이 없어도 여기서 만듬
    'user', // table 명, s가 자동으로 붙음
    {
        id :{ // 컬럼 생성
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(150),
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        url : DataTypes.STRING(1000)
    },
    {timestamps : false}
);

// 아이디(username) 중복검사
export async function findByUsername(username){
    return User.findOne({where: {username}});
}
// id 중복검사
export async function findById(id){
    return User.findByPk(id); // primary key
}

export async function createUser(user){
   return User.create(user).then((data) => {data.dataValues.id})
};

// export async function login(username){
//     return db.execute('select username, password from users where username = ?',[username]).then((result) => {console.log(result);
//         return result;
    
//     });
// };