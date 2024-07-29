import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
    const captchaRef= useRef(null);
    const [disabled, setDisabled] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";


    const {singIn} = useContext(AuthContext);

    useEffect(()=>{
        loadCaptchaEnginge(6);
    },[])

    const handleLogin=event=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)

        // authentication
        singIn(email,password)
        .then(result =>{
          console.log(result.user)
          Swal.fire({
            title: "login success!",
            icon: "success"
          });
          navigate(from, { replace: true });
        })
        .then(error=> console.error(error))
    }

    const handleValidateCaptcha=()=>{
        const user_captcha_value = captchaRef.current.value;
        if(validateCaptcha(user_captcha_value)){
            setDisabled(false);
        }else{
            setDisabled(true);
        }
    }

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form
          onSubmit={handleLogin}
          className="card-body">
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
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
            <LoadCanvasTemplate />
              <input
              ref={captchaRef}
                type="captcha"
                name="captcha"
                placeholder="type here captcha"
                className="input input-bordered"
                required
              />
              <button onClick={handleValidateCaptcha} className='btn btn-outline btn-xs'>validate</button>
            </div>
            <div className="form-control mt-6">
              <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
          <p className='pb-5 ml-5'><small>New here? <Link to='/singUp' className=' text-red-500'>Create a New Account</Link></small></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
