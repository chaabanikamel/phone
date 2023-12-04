// import PropTypes from 'prop-types';
import styles from "./styles.module.css"
 const {userInfo } = styles;


const UserInfo = ({name,age,location,phone}) => {
  return (
    <div className={userInfo}>
    <ul>
     <li>name :{name}</li>
     <li>age :{age}</li>
     <li>location :{location}</li>
     <li> phone :{phone}</li>
    </ul>
 </div>)
}
export default  UserInfo;

