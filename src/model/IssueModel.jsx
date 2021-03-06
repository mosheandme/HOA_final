class IssueModel {
    constructor(plainIssue) {
        this.createdBy = plainIssue.createdBy;
        this.createdAt = plainIssue.createdAt;
        this.title = plainIssue.title;
        this.details = plainIssue.details;
        this.image = plainIssue.image;
        this.priority = plainIssue.priority;
        this.status = plainIssue.status;
        this.comments = plainIssue.comments;
    }
}
export default IssueModel;