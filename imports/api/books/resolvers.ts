import Books from './books';
import Condolences from '../condolences/condolences';
export default {
    Query: {
        books(obj, args, { userId }) {
            return Books.find({ userId }).fetch();
        }
    },
    Book: {
        condolences: book => Condolences.find({ bookId: book._id }).fetch(),

        completed: book => {
            const condolences = Condolences.find({
                bookId: book._id
            }).fetch();

            if (condolences.length === 0) return false;

            const completed = condolences.filter(g => g.completed);
            return condolences.length === completed.length;
        }
    },
    Mutation: {
        createBook(obj, { name }, { userId }) {
            if (userId) {
                const id = Books.insert({
                    name,
                    userId
                });
                return Books.findOne(id);
            }
            throw new Error('Unauthorised');
        }
    }
};
