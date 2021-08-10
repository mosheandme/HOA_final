class UserModel {
    constructor(plainUser) {
        this.fname = plainUser.fname;
        this.lname = plainUser.lname;
        this.email = plainUser.email;
        this.apartment = plainUser.apartment;
        this.isCommitteeMember = plainUser.isCommitteeMember;
        this.pwd = plainUser.pwd;
    }
}
export default UserModel;