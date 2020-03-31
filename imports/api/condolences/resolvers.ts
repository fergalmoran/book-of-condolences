import Condolences from './condolences';
export default {
    Mutation: {
        createCondolence(obj, { name, bookId }) {
            const id = Condolences.insert({
                name,
                bookId,
                completed: false
            });
            return Condolences.findOne(id);
        },
        toggleCondolence(obj, { _id }) {
            const condolence = Condolences.findOne({ _id });
            const id = Condolences.update(_id, {
                $set: {
                    completed: !condolence.completed
                }
            });
            return Condolences.findOne(id);
        }
    }
};
