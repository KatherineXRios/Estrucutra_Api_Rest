const BaseService = require('./base.service');
let _commentRepository = null;
 _ideaRepository = null;

class CommentService extends BaseService{
        constructor({CommentRepository, IdeaRepository}){
            super(CommentRepository);
            _commentRepository = CommentRepository;
            _ideaRepository = IdeaRepository;
        }

       async getIdeaComment(ideaId){
        if(!ideaId){
            const error = new Error();
            error.status = 400;
            error.message = "Debes mandar el id idea";
            throw error;
        }  
        const idea = await _ideaRepository.get(ideaId);
        if(!idea){
            const error = new Error();
            error.status = 404;
            error.message = "Esta idea no existe";
            throw error;
       }

       const {comments} = idea;
       return comments;
}
        async createComment(comment, ideaId){
            if(!ideaId){
                const error = new Error();
                error.status = 400;
                error.message = "Debes mandar el id idea";
                throw error;
            }  
            const idea = await _ideaRepository.get(ideaId);
            if(!idea){
                const error = new Error();
                error.status = 404;
                error.message = "Esta idea no existe";
                throw error;
           }
          const createdComment = await _commentRepository.create({comment});
          idea.comments.push(createdComment);
          return await _ideaRepository.update(ideaId, {comments: idea.comment});  
        }
}

module.exports = CommentService;