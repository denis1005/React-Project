

export const Register=()=>{
    return(
        <>
  <section>
    <div className="card-body p-5 text-center">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-9 col-lg-7 col-xl-6">
            <div className="card bg-dark text-white" style={{ borderRadius: 15 }}>
              <div className="card-body p-5">
                <h2 className="text-uppercase text-center mb-5">
                  Create an account
                </h2>
                <form>
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="form3Example1cg"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" htmlFor="form3Example1cg">
                      Your Name
                    </label>
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="form3Example3cg"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" htmlFor="form3Example3cg">
                      Your Email
                    </label>
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="form3Example4cg"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" htmlFor="form3Example4cg">
                      Password
                    </label>
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="form3Example4cdg"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" htmlFor="form3Example4cdg">
                      Repeat your password
                    </label>
                  </div>
                  <div className="d-flex justify-content-center">
                    <button
                      type="button"
                      className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                    >
                      Register
                    </button>
                  </div>
                  <p className="text-center text-muted mt-5 mb-0">
                    Have already an account?{" "}
                    <a href="#!" className="fw-bold text-body">
                      <u>Login here</u>
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>
    );
}