import {useForm} from 'react-hook-form' 
import { useNavigate } from 'react-router-dom';
function UserLogin() {
    const {
        register,
        handleSubmit,
    } = useForm()

    const navigate = useNavigate()

    const handleForm = (data) => {
        console.log(data);
        localStorage.setItem("userData", JSON.stringify(data));
        if(role == "admin"){
            navigate("/AdminDash");
        }else
        {
            navigate("/AdminDash");
        }
    }
    return(
        <div>
            <form className="ms-5 mt-5 p-2 mx-auto" onSubmit={handleSubmit(handleForm)}>
                <label htmlFor="name">name:</label><br />
                <input type="text" id="name" {...register("name", {require: true})}/><br />
                <label htmlFor="email">Email</label><br />
                <input type="email" name="" id="email" {...register("email", {required: true})}/><br />
                <label htmlFor="role">Role:</label><br />
                <select name="role" id="role" {...register("role", {required: true})}>
                    <option value="user">user</option>
                    <option value="admin">admin</option>
                </select><br />
                <button type="submit" className="btn btn-primary mt-2">Submit</button>
            </form>
        </div>
    )
}

export default UserLogin