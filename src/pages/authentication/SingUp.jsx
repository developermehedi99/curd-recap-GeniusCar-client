import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";


const SingUp = () => {
    const {createUser} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister=event=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)

        // authentication
        createUser(email,password)
        .then(result =>{
          console.log(result.user)
          navigate('/');
        })
        .then(error=> console.error(error))
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form
          onSubmit={handleRegister}
          className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="your name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6}"
                className="input input-bordered"
                title="Password must contain at least one number, one lowercase and one uppercase letter, and at least 6 or more characters"
                required
              />
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Sing Up" />
            </div>
          </form>
          <p className='pb-5 ml-5'><small>already register? <Link to='/login' className=' text-red-500'>please singIn</Link></small></p>

        </div>
      </div>
    </div>
    );
};

export default SingUp;