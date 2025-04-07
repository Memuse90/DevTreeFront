import { Link } from "react-router-dom";

function RegisterView() {
    return ( 
        <>
        
            <div className="text-pretty font-black bg-orange-400">Register here!</div>

            <nav>
                <Link to="/auth/login">
                
                    Already have an account? Login here.
                
                </Link>

            </nav>
        </>
     );
}

export default RegisterView;