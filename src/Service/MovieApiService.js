import ApiService from "./ApiService";

export default class MovieApiService extends ApiService{
    constructor(){
        super('/Movie');
    }

    create(object){
        return this.post('', object);
    }

    update(id, object){
        return this.put(`/${id}`, object);
    }

    delete(id){
        return super.delete(`/${id}`);
    }

    find(params){
        return this.get(`${params}`);
    }


}
