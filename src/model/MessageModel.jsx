class MessageModel {
    constructor(plainMassage) {
        this.createdBy = plainMassage.createdBy;
        this.createdAt = plainMassage.createdAt;
        this.title = plainMassage.title;
        this.details = plainMassage.details;
        this.priority = plainMassage.priority;
        this.comments = plainMassage.comments;
    }
}
export default MessageModel;