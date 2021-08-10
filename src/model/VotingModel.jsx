class VotingModel {
    constructor(plainVoting) {
        this.createdBy = plainVoting.createdBy;
        this.createdAt = plainVoting.createdAt;
        this.title = plainVoting.title;
        this.details = plainVoting.details;
        this.dueDate = plainVoting.dueDate;
        this.votes = plainVoting.votes;
    }
}
export default VotingModel;