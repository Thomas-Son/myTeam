import Signup from 'app/features/user/signup/index'

const NewUser = () => {
    const userForm = {
        alias: "",
        team: "",
        email: "",
        pwd: ""
    };

    return <Signup formId="add-user-form" userForm={userForm} />;
};

export default NewUser;
