class CommentModel {
    constructor(plainComment) {
        this.createdBy = plainComment.createdBy;
        this.createdAt = plainComment.createdAt;
        this.text = plainComment.text;
        this.comments = plainComment.comments;
    }
}
export default CommentModel;