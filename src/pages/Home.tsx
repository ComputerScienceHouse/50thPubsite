import {
  useOidcFetch,
  // useOidc,
  // useOidcAccessToken,
  // useOidcIdToken,
} from "@axa-fr/react-oidc";
import {useEffect, useState} from "react";
import {apiPrefix} from "../configuration";
// import {Link} from "react-router-dom";
// import Authenticating from "../callbacks/Authenticating";
// import AuthenticationError from "../callbacks/AuthenticationError";
// import SessionLost from "../callbacks/SessionLost";
// import UserInfo from "../UserInfo";

const Home = () => {
  // important hooks
  // const {idToken, idTokenPayload} = useOidcIdToken(); // this is how you get the users id token
  // const {login, logout, isAuthenticated} = useOidc(); // this gets the functions to login and logout and the logout state
  // const {accessTokenPayload} = useOidcAccessToken(); // this contains the user info in raw json format
  // const userInfo = accessTokenPayload as UserInfo;

  const {fetch} = useOidcFetch();

  const [data, setData] = useState<string | null>(null);
  // Just an example of how to get data from an API!
  useEffect(() => {
    let cancelled = false;
    fetch(`${apiPrefix}/demo`)
      .then((res) => res.json())
      .then((res) => {
        if (cancelled) {
          return;
        }
        setData(res.someValue);
      });

    return () => {
      cancelled = true;
    };
  }, [fetch]);

  return (
    <div>
      <h1 className="display-3">Yippee it works</h1>
      <p className="lead">
        Check out <code>src/pages/Home.tsx</code> to see how you can get
        started.
      </p>
      {data !== null && <p>Your data was: {data}</p>}

      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5 underglow">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src={"./public/CSH-nobg.png"} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"></img>
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">Welcome to the 50th Webpage!</h1>
            <p className="lead">CSH is turning 50! We will be celebrating over the course of three days, April 17th to April 19th 2026.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className="btn btn-gold">Primary</button>
              <button type="button" className="btn btn-silver">Primary</button>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default Home;
