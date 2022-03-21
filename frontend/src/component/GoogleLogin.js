import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { signinGoogleAction } from "../action/userAction";
import styled from "styled-components";

const GoogleDiv = styled.div`
  margin-left: 2rem;

  button {
    height: 100%;
    box-shadow: initial !important;
    border: 0 !important;
    border-radius: 3px !important;
    background: rgb(76, 105, 186)!important;
    color: white !important;
    width: 9rem;
    justify-content: center;

    &:hover {
      color: rgb(219, 219, 219)!important;
    }

    div {
      margin-left: 1rem;
      line-height: 0;
    }
  }
`;

// const clientId =
//   "961704671013-ka03sek4vf04j7ml41jcvgavev06cm95.apps.googleusercontent.com";

const clientId = "414401859048-nvjs8if3im0s5ia0fls6qlhthpn54rjn.apps.googleusercontent.com";

// const clientId = "381491792472-tr2a3l81684pb2jjudk0jfo8iarb6sed.apps.googleusercontent.com";

export default function LoginGoogle() {
  const dispatch = useDispatch();
  const onSuccess = (data) => {
    dispatch(signinGoogleAction(data));
  };

  const onFailure = (res) => {
    console.log("Login Google fail:", res);
  };

  return (
    <GoogleDiv className="google-div">
      <GoogleLogin
        clientId={clientId}
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        buttonText="GOOGLE"
        isSignedIn={false} //nên cho tất cả google và fb về false cho tính năng autoLoad và isSignedIn
      />
    </GoogleDiv>
  );
}
