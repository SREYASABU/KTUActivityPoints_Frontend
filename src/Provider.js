import { createContext, useContext, useState  } from "react";

// @function  UserContext
const UserContext = createContext({ name: '', auth: false });

// @function  UserProvider
// Create function to provide UserContext
const UserProvider = ({ children }) => {
//   const [user_id, setUser] = useState('');
//  const [ authRole, setRole] = useState('')
//  const [isAuth, setIsAuth] = useState(false)

 const [user, setUser] = useState({ user_id:'',role :'', isAuth : false})

  const login = (user_id_local, authRole_local, random_var) => {
    
    // setUser((user)=>({user_id_local})
    // );
    // setRole(authRole_local)
    // setIsAuth(random_var)
    setUser((user)=>({user_id:user_id_local, role :authRole_local, isAuth : random_var}))
    console.log("in login inside provider")
    console.log("user in provider after login is" , user)
  };

  const logout = () => {
    // setUser({
    //   user_id: '',
    //   auth: false,
    //   role: ''
    // });
    // setUser('');
    // setRole('')
    // setIsAuth('Not_Authenticated')
    setUser((user)=>({user_id:'', role :'', isAuth : false}))
    console.log("in logout inside provider")
    console.log("user in provider after login is" , user)
  };

  return (
    <UserContext.Provider value={{ user, setUser,login, logout }}>
      {children}
    </UserContext.Provider>
  );
};


export { UserProvider, UserContext };
