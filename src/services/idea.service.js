const BaseService = require("./base.service");
let _ideaRepository = null;

class IdeaService extends BaseService{
    constructor({IdeaRepository}){
        super(IdeaRepository);
        _ideaRepository = IdeaRepository;
    }

    async getUserIdeas(author){
        if(!author){
            const error = new Error();
            error.status = 400;
            error.message = "Debes mandar el id user";
            throw error;
        }  
        
    return await _ideaRepository.getUserIdeas(author);
    }

    async upvoteIdea(ideaId){
        if(!ideaId){
            const error = new Error();
            error.status = 400;
            error.message = "Debes mandar el id idea";
            throw error;
        }  
        
        const idea = await _ideaRepository.get(IdeaId);
        if(!idea){
            const error = new Error();
            error.status = 404;
            error.message = "Esta idea no existe";
            throw error;
        }

        idea.upvotes.push(true);
        return await _ideaRepository.upvoteIdea(IdeaId, {upvotes: idea.upvotes});
    }

    async downvoteIdea(ideaId){
        if(!ideaId){
            const error = new Error();
            error.status = 400;
            error.message = "Debes mandar el id idea";
            throw error;
        }  
        
        const idea = await _ideaRepository.get(IdeaId);
        if(!idea){
            const error = new Error();
            error.status = 404;
            error.message = "Esta idea no existe";
            throw error;
        }

        idea.upvotes.push(true);
        return await _ideaRepository.downvoteIdea(IdeaId, {upvotes: idea.downvotes});
    }
}

module.exports = IdeaService;