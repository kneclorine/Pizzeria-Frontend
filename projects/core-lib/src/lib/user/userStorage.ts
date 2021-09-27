import {UserDTO} from './userDTO'
const key = "user";
class UserStorage{
    private userDTO: UserDTO|any ={};
    addUser(userDTO: UserDTO){
        this.userDTO = userDTO;
        return new Promise((resolve, reject)=>{
            resolve('');
        })
    }
    //TODO generic TypeScript
    getUser():Promise<UserDTO | any>{
        return new Promise((resolve, reject)=>{
            //TODO meter token
            resolve(this.userDTO);
        })
    }
}
export default new UserStorage();