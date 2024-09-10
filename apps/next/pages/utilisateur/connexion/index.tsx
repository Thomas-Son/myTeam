import Signin from 'app/features/user/signin/index'

export default function GetUser() {
    const userForm = {
        alias: "",
        team: "",
        pwd: ""
    };
    return <Signin formId="add-user-form" userForm={userForm} />
}
